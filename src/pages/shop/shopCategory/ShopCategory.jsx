import React, { useContext, useEffect, useState } from "react";
import shopCss from "./ShopCategory.module.css";
import { Slider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../../context/data_context";
import langCheck from "./language";
import ProductCard from "../../../components/card/ProductCard";
import Pagination from "@mui/material/Pagination";

function ShopCategory() {
  //---- sorting -----
  const [sorting, setSorting] = React.useState("");
  const handleChangeSorting = (event) => {
    setSorting(event.target.value);
  };
  useEffect(() => {
    if (sorting == "low_to_high") {
      setResultProds([...resultProds].sort((a, b) => a.price - b.price));
    } else if (sorting == "high_to_low") {
      setResultProds([...resultProds].sort((a, b) => b.price - a.price));
    } else if (sorting == "default") {
      setResultProds(products);
    }
  }, [sorting]);
  //---- searching -------
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  function searchFunction() {
    setResultProds(
      filteredProds.filter((elem) =>
        elem.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setQuery(searchInput);
    setSearchInput("");
  }
  const [isSearched, setIsSearched] = useState(false);
  function clearSearch() {
    setIsSearched(false);
    setResultProds(products);
  }

  //---- side bar --------
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  //---------------------
  let store = useContext(DataContext);
  let products = store.products.data;

  //---- price filter ------
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [filteredProds, setFilteredProds] = useState(products);
  const handleChangePriceFilter = (event, newValue) => {
    setPriceFilter(newValue);
  };
  const [resultProds, setResultProds] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);
  useEffect(() => {
    if (products?.length > 0) {
      const prices = products.map((p) => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);
      setPriceFilter([minPrice, maxPrice]);
      setResultProds(products);
      setFilteredProds(products);
    }
  }, [products]);
  function filterByPrice() {
    setResultProds(
      products?.filter(
        (elem) => elem.price >= priceFilter[0] && elem.price <= priceFilter[1]
      )
    );
    setFilteredProds(
      products?.filter(
        (elem) => elem.price >= priceFilter[0] && elem.price <= priceFilter[1]
      )
    );
  }
  function clearFilterByPrice() {
    setResultProds(products);
    setPriceFilter([priceRange[0], priceRange[1]]);
    window.location.reload();
  }
  //---- color filter ----
  const [colorFilter, setColorFilter] = useState("");
  function filterByColor() {
    setResultProds(resultProds?.filter((elem) => elem.color == colorFilter));
  }
  function clearFilterByColor() {
    setResultProds(filteredProds);
    setColorFilter("");
  }
  //---- category ----
  const [category, setCategory] = useState("");
  function filterByCategory() {
    setResultProds(resultProds?.filter((elem) => elem.category == category));
  }
  function clearFilterByCategory() {
    setResultProds(filteredProds);
    setCategory("");
  }
  //--------------------
  let topProducts = [...products].sort((a, b) => b.price - a.price);
  //---- pagination ----
  const itemsPerPage = 9;
  const pageCount = Math.ceil(resultProds.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  function changePage(event, value) {
    setCurrentPage(value);
    console.log(value);
  }
  let startIndex = (currentPage - 1) * itemsPerPage;
  let paginatedBasket = resultProds.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Men");
                    }}
                  />
                  <label>
                    {langCheck.categories.listItems.men[store.lang.data]}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Women");
                    }}
                  />
                  <label>
                    {" "}
                    {langCheck.categories.listItems.women[store.lang.data]}{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Accessories");
                    }}
                  />
                  <label>
                    {" "}
                    {
                      langCheck.categories.listItems.accessories[
                        store.lang.data
                      ]
                    }{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Footwear");
                    }}
                  />
                  <label>
                    {" "}
                    {
                      langCheck.categories.listItems.footwear[store.lang.data]
                    }{" "}
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Electronics");
                    }}
                  />
                  <label>
                    {
                      langCheck.categories.listItems.electronics[
                        store.lang.data
                      ]
                    }{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    onChange={() => {
                      setCategory("Food");
                    }}
                  />
                  <label>
                    {" "}
                    {langCheck.categories.listItems.food[store.lang.data]}{" "}
                  </label>
                </li>
              </ul>
              <div className={shopCss.buttons}>
                <button className={shopCss.blue_btn} onClick={filterByCategory}>
                  {langCheck.categories.buttons.go[store.lang.data]}
                </button>
                <button
                  className={shopCss.normal_btn}
                  onClick={clearFilterByCategory}
                  // disabled={category.length === 0}
                >
                  {langCheck.categories.buttons.clear[store.lang.data]}{" "}
                  <DeleteOutlinedIcon
                    style={{ color: "gray", fontSize: "15px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={shopCss.filters_container}>
            <div className={shopCss.filters_header}>
              <p> {langCheck.filters.header[store.lang.data]}</p>
            </div>
            <div className={shopCss.filters}>
              {/* <div className={shopCss.brands_filters}>
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
              </div> */}
              <div className={shopCss.colors_filters}>
                <p> {langCheck.filters.colors.header[store.lang.data]}</p>{" "}
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="color"
                      onChange={(e) => {
                        setColorFilter("black");
                      }}
                    />
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
                    <input
                      type="radio"
                      name="color"
                      onChange={(e) => {
                        setColorFilter("black_red");
                      }}
                    />
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
                    <input
                      type="radio"
                      name="color"
                      onChange={(e) => {
                        setColorFilter("gold");
                      }}
                    />
                    <label>
                      {langCheck.filters.colors.listItems.gold[store.lang.data]}
                      (19)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="color"
                      onChange={(e) => {
                        setColorFilter("spacegray");
                      }}
                    />
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
                <div className={shopCss.buttons}>
                  <button className={shopCss.blue_btn} onClick={filterByColor}>
                    {langCheck.filters.colors.buttons.go[store.lang.data]}
                  </button>
                  <button
                    className={shopCss.normal_btn}
                    onClick={clearFilterByColor}
                  >
                    {langCheck.filters.colors.buttons.clear[store.lang.data]}{" "}
                    <DeleteOutlinedIcon
                      style={{ color: "gray", fontSize: "15px" }}
                    />
                  </button>
                </div>
              </div>
              <div className={shopCss.price_filter}>
                <p>{langCheck.priceFilter.header[store.lang.data]}</p>
                <Slider
                  value={priceFilter}
                  onChange={handleChangePriceFilter}
                  valueLabelDisplay="auto"
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={1}
                />
                <p style={{ fontSize: "13px" }}>
                  {" "}
                  {langCheck.priceFilter.paragraph[store.lang.data]}: $
                  {priceFilter[0].toFixed(2)} - ${priceFilter[1].toFixed(2)}
                </p>
                <div className={shopCss.buttons}>
                  <button className={shopCss.blue_btn} onClick={filterByPrice}>
                    {langCheck.priceFilter.buttons.go[store.lang.data]}
                  </button>
                  <button
                    className={shopCss.normal_btn}
                    onClick={clearFilterByPrice}
                  >
                    {langCheck.priceFilter.buttons.clear[store.lang.data]}{" "}
                    <DeleteOutlinedIcon
                      style={{ color: "gray", fontSize: "15px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={shopCss.products_container}>
          <div className={shopCss.products_header}>
            <div className={shopCss.products_header_filters}>
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
                    onChange={handleChangeSorting}
                    className={shopCss.select}
                  >
                    <MenuItem value={"default"}>
                      {langCheck.products.header.sorting.clear[store.lang.data]}
                    </MenuItem>
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
            <div style={{ display: "flex" }}>
              <div className={shopCss.search_input_div}>
                <form>
                  <input
                    type="text"
                    value={searchInput}
                    placeholder={
                      langCheck.products.header.search_inp[store.lang.data]
                    }
                    onChange={(e) => {
                      if (e.target.value.length > 0) {
                        setSearchInput(e.target.value);
                      }
                    }}
                  />

                  <button
                    type="submit"
                    className={shopCss.search_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      searchFunction();
                      setIsSearched(true);
                    }}
                  >
                    <SearchIcon />
                  </button>
                </form>
              </div>{" "}
              <button className={shopCss.blue_btn} onClick={clearSearch}>
                {langCheck.products.header.clearSearch[store.lang.data]}
              </button>
            </div>
          </div>
          {isSearched ? (
            query.length > 0 ? (
              <p className={shopCss.resultOf}>
                {langCheck.products.resultOf[store.lang.data]} <i>"{query}"</i>
              </p>
            ) : null
          ) : null}
          <div className={shopCss.products_div}>
            {" "}
            {paginatedBasket.length > 0 ? (
              paginatedBasket.map((elem) => {
                return <ProductCard key={uuidv4()} elem={elem} />;
              })
            ) : (
              <div className={shopCss.nothingFound}>
                <h1>{langCheck.products.notMatching[store.lang.data]}</h1>
              </div>
            )}
          </div>

          <div className={shopCss.pagination}>
            <Pagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              onChange={changePage}
            />
          </div>
        </div>
      </div>
      <div className={shopCss.trending_products_container}>
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
