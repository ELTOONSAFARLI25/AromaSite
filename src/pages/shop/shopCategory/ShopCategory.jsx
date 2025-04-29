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
          <h1 style={{ fontWeight: "900" }}>Shop Category</h1>
          <p>Home-Shop Category</p>
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
              <h1 style={{ color: "white" }}>Filter</h1>
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
              <p>Browse Categories</p>
            </div>
            <div className={shopCss.categories}>
              <ul>
                <li>
                  <input type="radio" name="category" />
                  <label>Men (3600)</label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>Women (3600)</label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>Accessories (3600)</label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>Footwear (3600)</label>
                </li>

                <li>
                  <input type="radio" name="category" />
                  <label>Electronics (3600)</label>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <label>Food (3600)</label>
                </li>
              </ul>
            </div>
          </div>
          <div className={shopCss.filters_container}>
            <div className={shopCss.filters_header}>
              <p>Product Filters</p>
            </div>
            <div className={shopCss.filters}>
              <div className={shopCss.brands_filters}>
                <p>Brands</p>{" "}
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
                <p>Colors</p>{" "}
                <ul>
                  <li>
                    <input type="radio" name="color" />
                    <label>Black(29)</label>
                  </li>

                  <li>
                    <input type="radio" name="color" />
                    <label>Black with red(19)</label>
                  </li>
                  <li>
                    <input type="radio" name="color" />
                    <label>Gold(19)</label>
                  </li>
                  <li>
                    <input type="radio" name="color" />
                    <label>Spacegrey(19)</label>
                  </li>
                </ul>
              </div>
              <div className={shopCss.price_filter}>
                <p>Price</p>
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
                  Price: ${value[0].toFixed(2)} - ${value[1].toFixed(2)}
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
                  <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sorting}
                    label="Sorting"
                    onChange={handleChangeAge}
                    className={shopCss.select}
                  >
                    <MenuItem value={"low_to_high"}>
                      Price: Low to High
                    </MenuItem>
                    <MenuItem value={"high_to_low"}>
                      Price: High to Low
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={shopCss.search_input_div}>
              <input type="text" placeholder="Search" />
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
            <p>Popular Item in the market</p>
            <h1>Top Product</h1>
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
