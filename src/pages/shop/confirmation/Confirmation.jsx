import React, { useContext } from "react";
import confirmCss from "./Confirmation.module.css";
import { DataContext } from "../../../context/data_context";
function Confirmation() {
  const store = useContext(DataContext);
  const basketArr = JSON.parse(localStorage.getItem("basket"));
  let subtotal = 0;
  basketArr?.map((elem) => {
    subtotal += elem.quantity * elem.product.price;
  });
  const flat_rate = 50;

  return (
    <>
      <div className={confirmCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>Order Confirmation</h1>
          <p>Shop-Confirmation</p>
        </div>
      </div>
      <div className={confirmCss.container}>
        <div className={confirmCss.container_title}>
          <p>Thank you. Your order has been received.</p>
        </div>
        <div className={confirmCss.div1}>
          <p style={{ fontSize: "20px", fontWeight: "800" }}>Order Info </p>
          <table>
            <tbody>
              <tr>
                <td style={{ color: "gray" }}>Order number</td>
                <td>:60235</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Date</td>
                <td>:Oct 03, 2017</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Total</td>
                <td>:USD 2210</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Payment method</td>
                <td>:Check payments</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={confirmCss.div2}>
          {" "}
          <p style={{ fontSize: "20px", fontWeight: "800" }}>
            Billing Address{" "}
          </p>
          <table>
            <tbody>
              <tr>
                <td style={{ color: "gray" }}>Street</td>
                <td>:56/8 panthapath</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>City</td>
                <td>:Dhaka</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Country</td>
                <td>:Bangladesh</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Postcode </td>
                <td>:1205</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={confirmCss.div3}>
          <p style={{ fontSize: "20px", fontWeight: "800" }}>
            Shipping Address{" "}
          </p>
          <table>
            <tbody>
              <tr>
                <td style={{ color: "gray" }}>Street</td>
                <td>:56/8 panthapath</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>City</td>
                <td>:Dhaka</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Country</td>
                <td>:Bangladesh</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Postcode </td>
                <td>:1205</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={confirmCss.div4}>
          <p style={{ fontSize: "25px", fontWeight: "900" }}>Order Details</p>
          <table>
            <thead>
              <tr>
                <th style={{ width: "400px" }}>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {basketArr?.map((elem) => {
                return (
                  <tr>
                    <td>{elem.product.title}</td>
                    <td>
                      x
                      {elem.quantity < 10 ? `0${elem.quantity}` : elem.quantity}
                    </td>
                    <td style={{ color: "gray" }}>
                      ${(elem.quantity * elem.product.price).toFixed(2)}
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td> SUBTOTAL</td>
                <td></td>
                <td style={{ color: "gray" }}>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td> SHIPPING</td>
                <td></td>
                <td style={{ color: "gray" }}>
                  Flat rate: ${flat_rate.toFixed(2)}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td>${(subtotal + flat_rate).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
