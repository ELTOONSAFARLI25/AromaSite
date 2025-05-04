import React, { useContext } from "react";
import checkCss from "./ProductCheckout.module.css";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataContext } from "../../../context/data_context";
import langCheck from "./language";
import { v4 as uuidv4 } from "uuid";

function ProductChekout() {
  const store = useContext(DataContext);
  const basketArr = JSON.parse(localStorage.getItem("basket"));
  let subtotal = 0;
  basketArr?.map((elem) => {
    subtotal += elem.quantity * elem.product.price;
  });
  const flat_rate = 50;
  return (
    <>
      <div className={checkCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>
            {langCheck.heroSection.title[store.lang.data]}
          </h1>
          <p>{langCheck.heroSection.paragraph[store.lang.data]}</p>
        </div>
      </div>
      <div className={checkCss.container}>
        <div className={checkCss.div1}>
          <div className={checkCss.div1_header}>
            <p>{langCheck.div1.header.paragraph[store.lang.data]} </p>
            <Link style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              {langCheck.div1.header.link[store.lang.data]}
            </Link>
          </div>
          <div className={checkCss.div1_container}>
            <p>{langCheck.div1.body.paragraph[store.lang.data]}</p>
            <form className={checkCss.div1_form1}>
              <input
                type="text"
                placeholder={langCheck.div1.body.emailInp[store.lang.data]}
                className={checkCss.email_input}
              />
              <input
                type="password"
                placeholder={langCheck.div1.body.passwordInp[store.lang.data]}
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
                  value={langCheck.div1.body.loginBtn[store.lang.data]}
                  className={checkCss.submit_form1}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <label style={{ color: "gray" }}>
                    {langCheck.div1.body.rememberMe[store.lang.data]}
                  </label>
                </div>
              </div>
            </form>
            <Link style={{ color: "gray" }}>
              {langCheck.div1.body.lostPassword[store.lang.data]}
            </Link>
          </div>
        </div>
        <div className={checkCss.div2}>
          <div className={checkCss.div1_header}>
            <p>{langCheck.div2.header.paragraph[store.lang.data]} </p>
            <Link style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              {langCheck.div2.header.link[store.lang.data]}
            </Link>
          </div>
          <div className={checkCss.div2_container}>
            <form className={checkCss.div2_form2}>
              <input
                type="number"
                placeholder={langCheck.div2.body.couponCodeInp[store.lang.data]}
                className={checkCss.coupen_code_input}
              />
              <input
                type="submit"
                value={langCheck.div2.body.applyBtn[store.lang.data]}
                className={checkCss.submit_form2}
              />
            </form>
          </div>
        </div>
        <div className={checkCss.div3}>
          <div className={checkCss.div3_container}>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {langCheck.billingDetails.title[store.lang.data]}
            </p>
            <form className={checkCss.div3_form3}>
              <input
                type="text"
                style={{ gridArea: "first_name_input" }}
                placeholder={
                  langCheck.billingDetails.firstName[store.lang.data]
                }
              />
              <input
                type="email"
                style={{ gridArea: "last_name_input" }}
                placeholder={langCheck.billingDetails.lastName[store.lang.data]}
              />
              <input
                type="text"
                style={{ gridArea: "company_name_input" }}
                placeholder={
                  langCheck.billingDetails.companyName[store.lang.data]
                }
              />
              <input
                type="text"
                style={{ gridArea: "address1_input" }}
                placeholder={
                  langCheck.billingDetails.addressLine1[store.lang.data]
                }
              />
              <input
                type="text"
                style={{ gridArea: "address2_input" }}
                placeholder={
                  langCheck.billingDetails.addressLine2[store.lang.data]
                }
              />
              <select style={{ gridArea: "country_input" }}>
                <option value="">
                  {
                    langCheck.billingDetails.countrySelect.country[
                      store.lang.data
                    ]
                  }
                </option>
                <option value="azerbaijan">
                  {
                    langCheck.billingDetails.countrySelect.azerbaijan[
                      store.lang.data
                    ]
                  }
                </option>
                <option value="turkey">
                  {
                    langCheck.billingDetails.countrySelect.turkey[
                      store.lang.data
                    ]
                  }
                </option>
                <option value="bangladesh">
                  {
                    langCheck.billingDetails.countrySelect.bangladesh[
                      store.lang.data
                    ]
                  }
                </option>
              </select>
              <input
                type="text"
                style={{ gridArea: "city_input" }}
                placeholder={langCheck.billingDetails.city[store.lang.data]}
              />
              <input
                type="text"
                style={{ gridArea: "region_input" }}
                placeholder={langCheck.billingDetails.region[store.lang.data]}
              />
              <select style={{ gridArea: "district_input" }}>
                <option value="">
                  {langCheck.billingDetails.district[store.lang.data]}
                </option>
                <option value="">
                  {langCheck.billingDetails.district[store.lang.data]}
                </option>
                <option value="">
                  {langCheck.billingDetails.district[store.lang.data]}
                </option>
              </select>
              <input
                type="text"
                style={{ gridArea: "postcode_input" }}
                placeholder={langCheck.billingDetails.postcode[store.lang.data]}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" />
                <p style={{ color: "gray" }}>
                  {langCheck.billingDetails.createAccount[store.lang.data]}
                </p>
              </div>
            </form>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {langCheck.billingDetails.shippingDetails[store.lang.data]}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" />
              <p style={{ color: "gray" }}>
                {langCheck.billingDetails.shippingCheckbox[store.lang.data]}
              </p>
            </div>
            <textarea
              placeholder={
                langCheck.billingDetails.orderMessage[store.lang.data]
              }
            ></textarea>
          </div>
        </div>
        <div className={checkCss.div4}>
          <div className={checkCss.div4_container}>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {langCheck.order.title[store.lang.data]}
            </p>
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
                      <b>
                        {langCheck.order.table.thead.product[store.lang.data]}
                      </b>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
                      <b>
                        {langCheck.order.table.thead.quantity[store.lang.data]}
                      </b>
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "none", fontSize: "16px" }}
                      align="right"
                    >
                      <b>
                        {langCheck.order.table.thead.total[store.lang.data]}
                      </b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {basketArr &&
                    basketArr?.map((elem) => {
                      return (
                        <TableRow>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              fontSize: "16px",
                              color: "gray",
                            }}
                          >
                            {elem.product.title}
                          </TableCell>
                          <TableCell
                            sx={{ borderBottom: "none", fontSize: "16px" }}
                          >
                            x
                            {elem.quantity < 10
                              ? `0${elem.quantity}`
                              : elem.quantity}
                          </TableCell>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              fontSize: "16px",
                              color: "gray",
                            }}
                            align="right"
                          >
                            ${elem.quantity * elem.product.price}
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
                    <b>
                      {langCheck.order.table.tbody.subtotal[store.lang.data]}
                    </b>
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
                    ${subtotal.toFixed(2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    <b>
                      {langCheck.order.table.tbody.shipping[store.lang.data]}
                    </b>
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
                    {langCheck.order.table.tbody.flat_rate[store.lang.data]}: $
                    {flat_rate.toFixed(2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    <b>{langCheck.order.table.tfoot.total[store.lang.data]}</b>
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
                    $<b>{(subtotal + flat_rate).toFixed(2)}</b>
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
            <form className={checkCss.payment_form}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="radio" name="payment" />
                <p>{langCheck.order.checkPayment.title[store.lang.data]}</p>
              </div>
              <div style={{ padding: "20px", backgroundColor: "white" }}>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  {langCheck.order.checkPayment.paragraph[store.lang.data]}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="radio" name="payment" />
                  <p>{langCheck.order.paypal.title[store.lang.data]}</p>
                </div>
                <img
                  style={{ width: "70px", height: "20px" }}
                  src="https://cdn.shopify.com/s/files/1/0278/2140/8344/files/Payment_Method_B_480x480.png?v=1618988660"
                  alt=""
                />
              </div>
              <div style={{ padding: "20px", backgroundColor: "white" }}>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  {langCheck.order.paypal.paragraph[store.lang.data]}
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" required />
                <p style={{ fontSize: "13px" }}>
                  {langCheck.order.terms[store.lang.data]}
                </p>
              </div>
              <input
                type="submit"
                value={langCheck.order.proceedBtn[store.lang.data]}
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
