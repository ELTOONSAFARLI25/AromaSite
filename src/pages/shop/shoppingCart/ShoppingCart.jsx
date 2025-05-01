import React, { useContext, useState } from "react";
import shopCartCss from "./ShoppingCart.module.css";
import QuantityInput from "../../../components/quantityInput/QuantityInput";
import { DataContext } from "../../../context/data_context";
import BasketCard from "../../../components/basketCard/BasketCard";
import { v4 as uuidv4 } from "uuid";
import Pagination from "@mui/material/Pagination";

function ShoppingCart() {
  const store = useContext(DataContext);
  let basketArr = JSON.parse(localStorage.getItem("basket"));
  const itemsPerPage = 3;
  const pageCount = Math.ceil(basketArr.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  function changePage(event, value) {
    setCurrentPage(value);
  }
  let startIndex = (currentPage - 1) * itemsPerPage;
  let paginatedBasket = basketArr.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <div className={shopCartCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>Shopping Cart</h1>
          <p>Shop-Shopping Cart</p>
        </div>
      </div>
      <div className={shopCartCss.container}>
        <div className={shopCartCss.products_container}>
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

          <div className={shopCartCss.buttons}>
            <button className={shopCartCss.normal_button}>Update Cart</button>
            <div className={shopCartCss.buttons_part_2}>
              <input type="text" placeholder="Coupon Code" />
              <button className={shopCartCss.blue_button}>Apply</button>
              <button className={shopCartCss.normal_button}>
                Have a Coupon?
              </button>
            </div>
          </div>
          <div className={shopCartCss.subtotal}>
            <p>SUBTOTAL</p>$2160.00
          </div>
        </div>
        <div className={shopCartCss.payment_div}>
          <div className={shopCartCss.payment_container}>
            <div className={shopCartCss.payment_header}>
              <p style={{ fontWeight: "800" }}>SHIPPING</p>
              <ul>
                <li>
                  <p>Flat rate: $5.00</p>
                  <input type="radio" name="flat_rate" />
                </li>
                <li>
                  <p>Free Shipping</p>
                  <input type="radio" />
                </li>
                <li>
                  <p>Flat rate: $10.00</p>
                  <input type="radio" name="flat_rate" />
                </li>
                <li>
                  <p>Local Delivery: $2.00</p>
                  <input type="radio" />
                </li>
              </ul>
            </div>
            <div className={shopCartCss.payment_main}>
              <select>
                <option value="bangladesh">Bangladesh</option>
                <option value="bangladesh">India</option>
                <option value="bangladesh">Pakistan</option>
              </select>
              <select>
                <option value="state1">state1</option>
                <option value="state2">state2</option>
                <option value="state2">state2</option>
              </select>
              <input type="number" placeholder="PostCode/Zipcode" />
              <button className={shopCartCss.normal_button}>
                Update Details
              </button>
            </div>
          </div>
        </div>
        <div className={shopCartCss.products_footer_buttons}>
          <button className={shopCartCss.normal_button}>
            Continue Shopping
          </button>
          <button className={shopCartCss.blue_button}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
