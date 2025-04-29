import React from "react";
import confirmCss from "./Confirmation.module.css";
function Confirmation() {
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
              <tr>
                <td>Pixelstore fresh Blackberry</td>
                <td>x 02</td>
                <td style={{ color: "gray" }}>$720.00</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Pixelstore fresh Blackberry</td>
                <td>x 02</td>
                <td style={{ color: "gray" }}>$720.00</td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Pixelstore fresh Blackberry</td>
                <td>x 02</td>
                <td style={{ color: "gray" }}>$720.00</td>
              </tr>
              <tr>
                <td> SUBTOTAL</td>
                <td></td>
                <td style={{ color: "gray" }}>$2160.00</td>
              </tr>
              <tr>
                <td> SHIPPING</td>
                <td></td>
                <td style={{ color: "gray" }}>Flat rate: $50.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td>$180</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
