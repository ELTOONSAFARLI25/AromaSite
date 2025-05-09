import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext("");
function DataProvider({ children }) {
  let basketArr = JSON.parse(localStorage.getItem("basket"));
  const products_url = "https://680d217ec47cb8074d8fa303.mockapi.io/products";
  const [products, setProducts] = useState([]);
  const [lang, setLang] = useState(1);
  const [theme, setTheme] = useState("");
  const [basket, setBasket] = useState([]);
  const langLocal = JSON.parse(localStorage.getItem("lang"));
  useEffect(() => {
    if (basketArr) {
      setBasket(basketArr);
    }
    axios(products_url).then((res) => {
      setProducts(res.data);
    });
    if (langLocal >= 0) {
      setLang(langLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);
  let store = {
    lang: {
      data: lang,
      setData: setLang,
    },
    theme: {
      data: theme,
      setData: setTheme,
    },
    products: {
      data: products,
      setData: setProducts,
    },
    basket: {
      data: basket,
      setData: setBasket,
    },
  };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}
export default DataProvider;
