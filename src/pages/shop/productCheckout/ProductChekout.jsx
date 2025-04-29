import React from "react";
import checkCss from "./ProductCheckout.module.css";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function ProductChekout() {
  return (
    <>
      <div className={checkCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>Product Checkout</h1>
          <p>Shop-Checkout</p>
        </div>
      </div>
      <div className={checkCss.container}>
        <div className={checkCss.div1}>
          <div className={checkCss.div1_header}>
            <p>Returning Customer? </p>
            <Link style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Click here to login
            </Link>
          </div>
          <div className={checkCss.div1_container}>
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form className={checkCss.div1_form1}>
              <input
                type="text"
                placeholder="Username or Email*"
                className={checkCss.email_input}
              />
              <input
                type="password"
                placeholder="Password"
                className={checkCss.password_input}
              />
              <div
                style={{
                  gridArea: "buttons",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <input
                  type="submit"
                  value="login"
                  className={checkCss.submit_form1}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <label style={{ color: "gray" }}>Remember me</label>
                </div>
              </div>
            </form>
            <Link style={{ color: "gray" }}>Lost your password?</Link>
          </div>
        </div>
        <div className={checkCss.div2}>
          <div className={checkCss.div1_header}>
            <p>Have a coupon? </p>
            <Link style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Click here to enter your code
            </Link>
          </div>
          <div className={checkCss.div2_container}>
            <form className={checkCss.div2_form2}>
              <input
                type="number"
                placeholder="Enter coupon code"
                className={checkCss.coupen_code_input}
              />
              <input
                type="submit"
                value="Apply Coupon"
                className={checkCss.submit_form2}
              />
            </form>
          </div>
        </div>
        <div className={checkCss.div3}>
          <div className={checkCss.div3_container}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              Billing Details
            </p>
            <form className={checkCss.div3_form3}>
              <input
                type="text"
                style={{ gridArea: "first_name_input" }}
                placeholder="First Name"
              />
              <input
                type="email"
                style={{ gridArea: "last_name_input" }}
                placeholder="Last Name"
              />
              <input
                type="text"
                style={{ gridArea: "company_name_input" }}
                placeholder="Company Name"
              />
              <input
                type="text"
                style={{ gridArea: "address1_input" }}
                placeholder="Address Line-1"
              />
              <input
                type="text"
                style={{ gridArea: "address2_input" }}
                placeholder="Address Line-2"
              />
              <select style={{ gridArea: "country_input" }}>
                <option value="">Country</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="turkey">Turkey</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
              <input
                type="text"
                style={{ gridArea: "city_input" }}
                placeholder="City"
              />
              <input
                type="text"
                style={{ gridArea: "region_input" }}
                placeholder="Region"
              />
              <select style={{ gridArea: "district_input" }}>
                <option value="">District</option>
                <option value="">District</option>
                <option value="">District</option>
              </select>
              <input
                type="text"
                style={{ gridArea: "postcode_input" }}
                placeholder="Postcode/ZIP"
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" />
                <p style={{ color: "gray" }}>Create an account?</p>
              </div>
            </form>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              Shipping Details
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" />
              <p style={{ color: "gray" }}>Ship to a different address?</p>
            </div>
            <textarea placeholder="Order Notes"></textarea>
          </div>
        </div>
        <div className={checkCss.div4}>
          <div className={checkCss.div4_container}>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>Your Order</p>
            <TableContainer
              component={Paper}
              sx={{
                minWidth: 250,
                boxShadow: "none", // Remove shadow
                border: "none", // Remove border
                backgroundColor: "#f1f6f7",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      <b>Product</b>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      <b>Quantity</b>
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "none", fontSize: "16px" }}
                      align="right"
                    >
                      <b>Total</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                    >
                      Fresh Blackberry
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      x02
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                      align="right"
                    >
                      $720.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                    >
                      Bag
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      x01
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                      align="right"
                    >
                      $150.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                    >
                      Bag
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      x03
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "gray",
                      }}
                      align="right"
                    >
                      $720.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    <b>SUBTOTAL</b>
                  </TableCell>{" "}
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                      color: "gray",
                    }}
                    align="right"
                  >
                    $2160.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    <b>SHIPPING</b>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                      color: "gray",
                    }}
                    align="right"
                  >
                    Flate Rate:$50.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    <b>TOTAL</b>
                  </TableCell>{" "}
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                      color: "gray",
                    }}
                    align="right"
                  >
                    <b>2210.00</b>$
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
            <form className={checkCss.payment_form}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="radio" name="payment" />
                <p>Check Payments</p>
              </div>
              <div style={{ padding: "20px", backgroundColor: "white" }}>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="radio" name="payment" />
                  <p>PayPal</p>
                </div>
                <img
                  style={{ width: "70px", height: "20px" }}
                  src="https://cdn.shopify.com/s/files/1/0278/2140/8344/files/Payment_Method_B_480x480.png?v=1618988660"
                  alt=""
                />
              </div>
              <div style={{ padding: "20px", backgroundColor: "white" }}>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  Pay via PayPal; you can pay with your credit card if you don’t
                  have a PayPal account.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" required />
                <p style={{ fontSize: "13px" }}>
                  I’ve read and accept the{" "}
                  <a href="" style={{ color: "blue" }}>
                    terms & conditions
                  </a>
                </p>
              </div>
              <input
                type="submit"
                value="Proceed to Payment"
                className={checkCss.submit_payment_form}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductChekout;
