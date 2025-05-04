import React, { useContext, useState } from "react";
import shopCartCss from "./ShoppingCart.module.css";
import QuantityInput from "../../../components/quantityInput/QuantityInput";
import { DataContext } from "../../../context/data_context";
import BasketCard from "../../../components/basketCard/BasketCard";
import { v4 as uuidv4 } from "uuid";
import Pagination from "@mui/material/Pagination";
import langCheck from "./language";
import { Link } from "react-router-dom";
function ShoppingCart() {
  const store = useContext(DataContext);
  let basketArr = JSON.parse(localStorage.getItem("basket"));

  let subtotal = 0;
  basketArr?.map((elem) => {
    subtotal += elem.product.price * elem.quantity;
  });
  //---- pagination ----
  const itemsPerPage = 3;
  const pageCount = Math.ceil(basketArr?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  function changePage(event, value) {
    setCurrentPage(value);
  }
  let startIndex = (currentPage - 1) * itemsPerPage;
  let paginatedBasket = basketArr?.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <div className={shopCartCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>
            {langCheck.heroSection.title[store.lang.data]}
          </h1>
          <p>{langCheck.heroSection.paragraph[store.lang.data]}</p>
        </div>
      </div>
      <div className={shopCartCss.container}>
        <div className={shopCartCss.products_container}>
          {paginatedBasket?.length > 0 ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {paginatedBasket &&
                paginatedBasket.map((elem) => {
                  return <BasketCard key={uuidv4()} elem={elem} />;
                })}
              <div className={shopCartCss.pagination}>
                <Pagination
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  onChange={changePage}
                />
              </div>
            </div>
          ) : (
            <div className={shopCartCss.noProduct}>
              <h1>{langCheck.noProduct.title[store.lang.data]}</h1>
              <Link to="/shop-category">
                <button className={shopCartCss.blue_button}>
                  {langCheck.noProduct.paragraph[store.lang.data]}
                </button>
              </Link>
            </div>
          )}

          <div className={shopCartCss.buttons}>
            <button className={shopCartCss.normal_button}>
              {langCheck.buttons.updateCart[store.lang.data]}
            </button>
            <div className={shopCartCss.buttons_part_2}>
              <input
                type="text"
                placeholder={langCheck.buttons.couponCode[store.lang.data]}
              />
              <button className={shopCartCss.blue_button}>
                {langCheck.buttons.apply[store.lang.data]}
              </button>
              <button className={shopCartCss.normal_button}>
                {langCheck.buttons.coupon[store.lang.data]}
              </button>
            </div>
          </div>
          <div className={shopCartCss.subtotal}>
            <p>{langCheck.payment.header.subtotal[store.lang.data]}</p>$
            {subtotal.toFixed(2)}
          </div>
        </div>
        <div className={shopCartCss.payment_div}>
          <div className={shopCartCss.payment_container}>
            <div className={shopCartCss.payment_header}>
              <p style={{ fontWeight: "800" }}>
                {langCheck.payment.header.shipping[store.lang.data]}
              </p>
              <ul>
                <li>
                  <p>
                    {langCheck.payment.header.flat_rate[store.lang.data]}: $5.00
                  </p>
                  <input type="checkbox" name="flat_rate" />
                </li>
                <li>
                  <p>
                    {langCheck.payment.header.freeShipping[store.lang.data]}
                  </p>
                  <input type="checkbox" />
                </li>
                <li>
                  <p>
                    {" "}
                    {langCheck.payment.header.flat_rate[store.lang.data]}:
                    $10.00
                  </p>
                  <input type="checkbox" name="flat_rate" />
                </li>
                <li>
                  <p>
                    {" "}
                    {langCheck.payment.header.localDelivery[store.lang.data]}:
                    $2.00
                  </p>
                  <input type="checkbox" />
                </li>
              </ul>
            </div>
            <div className={shopCartCss.payment_main}>
              <select>
                <option value="bangladesh">
                  {langCheck.payment.main.countries.bangladesh[store.lang.data]}
                </option>
                <option value="india">
                  {langCheck.payment.main.countries.india[store.lang.data]}
                </option>
                <option value="pakistan">
                  {langCheck.payment.main.countries.pakistan[store.lang.data]}
                </option>
              </select>
              <select>
                <option value="state1">
                  {langCheck.payment.main.states.state[store.lang.data]}
                </option>
                <option value="state2">
                  {" "}
                  {langCheck.payment.main.states.state[store.lang.data]}
                </option>
                <option value="state2">
                  {" "}
                  {langCheck.payment.main.states.state[store.lang.data]}
                </option>
              </select>
              <input
                type="number"
                placeholder={langCheck.payment.main.postcode[store.lang.data]}
              />
              <button className={shopCartCss.normal_button}>
                {langCheck.buttons.updateDetails[store.lang.data]}
              </button>
            </div>
          </div>
        </div>
        <div className={shopCartCss.products_footer_buttons}>
          <button className={shopCartCss.normal_button}>
            {langCheck.buttons.continueShop[store.lang.data]}
          </button>
          <button className={shopCartCss.blue_button}>
            {langCheck.buttons.proceedCheckout[store.lang.data]}
          </button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
