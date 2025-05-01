import React, { useContext } from "react";
import cardCss from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { DataContext } from "../../context/data_context";
import { boolean } from "yup";
function ProductCard({ elem }) {
  const store = useContext(DataContext);
  let basketArr = store.basket.data;
  return (
    <>
      <div className={cardCss.product_card}>
        <div className={cardCss.product_card_image_div}>
          <img
            src={elem.image_url}
            alt=""
            className={cardCss.product_card_image}
          />
          <div className={cardCss.product_card_buttons}>
            <Link to={`/product-details/${elem.id}`}>
              <button>
                <SearchIcon />
              </button>
            </Link>

            <button>
              <FavoriteBorderIcon />
            </button>
            <button
              onClick={() => {
                let newBasketElement = {
                  product: elem,
                  quantity: 1,
                };
                let isInBasket = false;
                basketArr.forEach((basket) => {
                  if (basket.product.id == elem.id) {
                    basket.quantity++;
                    isInBasket = true;
                  }
                });
                if (!isInBasket) {
                  basketArr.push(newBasketElement);
                }
                store.basket.setData(basketArr);
                localStorage.setItem(
                  "basket",
                  JSON.stringify(store.basket.data)
                );
              }}
            >
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>
        <div className={cardCss.product_card_details}>
          <p>{elem.category}</p>
          <h1>{elem.title}</h1>
          <h3>${elem.price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
