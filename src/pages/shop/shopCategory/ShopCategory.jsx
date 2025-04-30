import React, { useContext, useEffect, useState } from "react";
import shopCss from "./ShopCategory.module.css";
import { Slider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/data_context";
import langCheck from "./language";
function ShopCategory() {
  const [sorting, setSorting] = React.useState("");
  const handleChangeAge = (event) => {
    setSorting(event.target.value);
  };
  const [value, setValue] = useState([0, 3500]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  let store = useContext(DataContext);
  let products = store.products.data;
  let topProducts = [...products].sort((a, b) => b.price - a.price);
  return (
    <>
      <div className={shopCss.header}>
        <div style={{ textAlign: "center" }}>
          {" "}
          <h1 style={{ fontWeight: "900" }}>
            {langCheck.heroSection.title[store.lang.data]}
          </h1>
          <p>{langCheck.heroSection.paragraph[store.lang.data]}</p>
        </div>
      </div>
      <div className={shopCss.container}>
        <div
          className={`${!isOpenSideBar ? shopCss.side_bar : null} ${
            isOpenSideBar ? shopCss.responsive_side_bar : null
          }`}
        >
          {isOpenSideBar ? (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <h1 style={{ color: "white" }}>
                {langCheck.filters.mobHeader[store.lang.data]}
              </h1>
              <button
                className={shopCss.close_side_bar}
                onClick={() => {
                  setIsOpenSideBar(false);
                }}
              >
                <CloseIcon style={{ color: "white", fontSize: "30px" }} />
              </button>
            </div>
          ) : null}
          <div className={shopCss.categories_container}>
            <div className={shopCss.categories_header}>
              <p>{langCheck.categories.header[store.lang.data]}</p>
            </div>
            <div className={shopCss.categories}>
              <ul>
                <li>
                  <input type="radio" name="category" />
                  <label>
                    {langCheck.categories.listItems.men[store.lang.data]} (3600)
                  </label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>
                    {" "}
                    {langCheck.categories.listItems.women[store.lang.data]}{" "}
                    (3600)
                  </label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>
                    {" "}
                    {
                      langCheck.categories.listItems.accessories[
                        store.lang.data
                      ]
                    }{" "}
                    (3600)
                  </label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>
                    {" "}
                    {
                      langCheck.categories.listItems.footwear[store.lang.data]
                    }{" "}
                    (3600)
                  </label>
                </li>

                <li>
                  <input type="radio" name="category" />
                  <label>
                    {" "}
                    {
                      langCheck.categories.listItems.electronics[
                        store.lang.data
                      ]
                    }{" "}
                    (3600)
                  </label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>
                    {" "}
                    {langCheck.categories.listItems.food[store.lang.data]}{" "}
                    (3600)
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className={shopCss.filters_container}>
            <div className={shopCss.filters_header}>
              <p> {langCheck.filters.header[store.lang.data]}</p>
            </div>
            <div className={shopCss.filters}>
              <div className={shopCss.brands_filters}>
                <p>{langCheck.filters.brands.header[store.lang.data]}</p>{" "}
                <ul>
                  <li>
                    <input type="radio" name="brand" />
                    <label>Apple(29)</label>
                  </li>
                  <li>
                    <input type="radio" name="brand" />
                    <label>Asus(29)</label>
                  </li>
                  <li>
                    <input type="radio" name="brand" />
                    <label>Gionee(19)</label>
                  </li>
                  <li>
                    <input type="radio" name="brand" />
                    <label>Micromax(19)</label>
                  </li>
                  <li>
                    <input type="radio" name="brand" />
                    <label>Samsung(19)</label>
                  </li>
                </ul>
              </div>
              <div className={shopCss.colors_filters}>
                <p> {langCheck.filters.colors.header[store.lang.data]}</p>{" "}
                <ul>
                  <li>
                    <input type="radio" name="color" />
                    <label>
                      {
                        langCheck.filters.colors.listItems.black[
                          store.lang.data
                        ]
                      }
                      (29)
                    </label>
                  </li>

                  <li>
                    <input type="radio" name="color" />
                    <label>
                      {
                        langCheck.filters.colors.listItems.black_with_red[
                          store.lang.data
                        ]
                      }
                      (19)
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" />
                    <label>
                      {langCheck.filters.colors.listItems.gold[store.lang.data]}
                      (19)
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" />
                    <label>
                      {
                        langCheck.filters.colors.listItems.spacegrey[
                          store.lang.data
                        ]
                      }
                      (19)
                    </label>
                  </li>
                </ul>
              </div>
              <div className={shopCss.price_filter}>
                <p>{langCheck.priceFilter.header[store.lang.data]}</p>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10000}
                  step={1000}
                />
                <p style={{ fontSize: "13px" }}>
                  {" "}
                  {langCheck.priceFilter.paragraph[store.lang.data]}: $
                  {value[0].toFixed(2)} - ${value[1].toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={shopCss.products_container}>
          <div className={shopCss.products_header}>
            <div style={{ display: "flex", gap: "10px" }}>
              {" "}
              <button className={shopCss.filter_btn} onClick={toggleSideBar}>
                <FilterAltIcon style={{ color: "#384aeb" }} />
              </button>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {langCheck.products.header.sorting.main[store.lang.data]}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sorting}
                    label="Sorting"
                    onChange={handleChangeAge}
                    className={shopCss.select}
                  >
                    <MenuItem value={"low_to_high"}>
                      {
                        langCheck.products.header.sorting.low_to_high[
                          store.lang.data
                        ]
                      }
                    </MenuItem>
                    <MenuItem value={"high_to_low"}>
                      {
                        langCheck.products.header.sorting.high_to_low[
                          store.lang.data
                        ]
                      }
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={shopCss.search_input_div}>
              <input
                type="text"
                placeholder={
                  langCheck.products.header.search_inp[store.lang.data]
                }
              />
              <button className={shopCss.search_btn}>
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className={shopCss.products_div}>
            {products &&
              products.map((elem) => {
                return (
                  <div className={shopCss.product_card} key={uuidv4()}>
                    <div className={shopCss.product_card_image_div}>
                      <img
                        src={elem.image_url}
                        alt=""
                        className={shopCss.product_card_image}
                      />
                      <div className={shopCss.product_card_buttons}>
                        <Link to={`/product-details/${elem.id}`}>
                          <button>
                            <SearchIcon />
                          </button>
                        </Link>

                        <button>
                          <FavoriteBorderIcon />
                        </button>
                        <button>
                          <AddShoppingCartIcon />
                        </button>
                      </div>
                    </div>
                    <div className={shopCss.product_card_details}>
                      <p>{elem.category}</p>
                      <h1>{elem.title}</h1>
                      <h3>${elem.price}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={shopCss.trending_products_container}>
        {" "}
        <div className={shopCss.products_container}>
          <div className={shopCss.products_title}>
            <p>{langCheck.trending_prods.header.paragraph[store.lang.data]}</p>
            <h1>{langCheck.trending_prods.header.title[store.lang.data]}</h1>
            <hr className={shopCss.products_title_line} />
          </div>
          <div className={shopCss.trending_products_div}>
            {topProducts &&
              topProducts.map((elem, index) => {
                if (index < 12) {
                  return (
                    <div
                      className={shopCss.trending_product_card}
                      key={uuidv4()}
                    >
                      <div className={shopCss.trending_product_card_image_div}>
                        <img
                          src={elem.image_url}
                          alt=""
                          className={shopCss.trending_product_card_image}
                        />
                      </div>
                      <div className={shopCss.trending_product_card_details}>
                        <h1>{elem.title}</h1>
                        <h3>${elem.price}</h3>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCategory;
