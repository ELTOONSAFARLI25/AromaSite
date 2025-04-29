import React, { useEffect, useState } from "react";
import detailCss from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuantityInput from "../../../components/quantityInput/QuantityInput.jsx";
import DiamondIcon from "@mui/icons-material/Diamond";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { v4 as uuidv4 } from "uuid";

function ProductDetails() {
  let { id } = useParams();
  const products_url = "https://680d217ec47cb8074d8fa303.mockapi.io/products";

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [comments_count, setComments_count] = useState(0);
  useEffect(() => {
    axios(`${products_url}/${id}`).then((res) => {
      setProduct(res.data);
      setComments_count(res.data.comments.length);
    });
    axios(products_url).then((res) => {
      setProducts(res.data);
    });
  }, [id]);
  let topProducts = [...products].sort((a, b) => b.price - a.price);
  const [quantity, setQuantity] = useState(1);
  const [about, setAbout] = useState("description");
  const [rating, setRating] = useState(1);
  let sum_rate = 0;
  let average_rate;
  let five_star = 0,
    four_star = 0,
    three_star = 0,
    two_star = 0,
    one_star = 0;
  if (product && product.comments) {
    product.comments.forEach((elem) => {
      sum_rate += elem.rate;
      if (elem.rate == 5) five_star++;
      else if (elem.rate == 4) four_star++;
      else if (elem.rate == 3) three_star++;
      else if (elem.rate == 2) two_star++;
      else if (elem.rate == 1) one_star++;
    });
    average_rate = sum_rate / comments_count;
  }

  return (
    <>
      <div className={detailCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>Shop Single</h1>
          <p>Shop-Shop Single</p>
        </div>
      </div>
      <div className={detailCss.container}>
        <div className={detailCss.image_div}>
          <img src={product.image_url} alt="" />
        </div>
        <div className={detailCss.details_div}>
          <h1>{product.title}</h1>
          <p style={{ color: "#384AEB", fontWeight: "900", fontSize: "25px" }}>
            ${product.price}
          </p>
          <p>
            Category :<span style={{ color: "gray" }}>{product.category}</span>
          </p>
          <p>
            Availibility :
            <span style={{ color: "gray" }}>{product.availibility}</span>
          </p>
          <p style={{ color: "gray" }}>{product.short_description}</p>
          <div className={detailCss.buttons_div}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Quantity:</p>
              <QuantityInput
                count={product.count}
                setQuantity={setQuantity}
                quantity={quantity}
              />
            </div>

            <button className={detailCss.add_to_cart_btn}>Add to Cart</button>
          </div>
          <div className={detailCss.icon_buttons_div}>
            <button className={detailCss.icon_btn}>
              <DiamondIcon />
            </button>
            <button className={detailCss.icon_btn}>
              <FavoriteBorderIcon />
            </button>
          </div>
        </div>
        <div className={detailCss.about_div}>
          <div className={detailCss.about_div_header}>
            <button
              className={`${detailCss.about_part_btn} ${
                about === "description" ? detailCss.about_choosen : null
              }`}
              onClick={() => {
                setAbout("description");
              }}
            >
              Description
            </button>
            <button
              className={`${detailCss.about_part_btn} ${
                about === "specification" ? detailCss.about_choosen : null
              }`}
              onClick={() => {
                setAbout("specification");
              }}
            >
              Specification
            </button>
            <button
              className={`${detailCss.about_part_btn} ${
                about === "comments" ? detailCss.about_choosen : null
              }`}
              onClick={() => {
                setAbout("comments");
              }}
            >
              Comments
            </button>
            <button
              className={`${detailCss.about_part_btn} ${
                about === "reviews" ? detailCss.about_choosen : null
              }`}
              onClick={() => {
                setAbout("reviews");
              }}
            >
              Reviews
            </button>
          </div>

          {about === "description" && (
            <div className={detailCss.about_description_container}>
              <p>{product.description}</p>
            </div>
          )}

          {about === "specification" && (
            <div className={detailCss.about_specification_container}>
              <TableContainer
                component={Paper}
                sx={{ maxWidth: 950, boxShadow: "none", border: "none" }}
              >
                <Table aria-label="specifications table">
                  <TableBody>
                    {product.specification.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}

          {about === "comments" && (
            <div className={detailCss.about_comments_container}>
              <div className={detailCss.comments_div}>
                <ul>
                  {product.comments &&
                    product.comments.map((elem) => {
                      const date = new Date(elem.posted_date.date);
                      const formatted_date = date.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });
                      return (
                        <li key={uuidv4()}>
                          <div className={detailCss.comment_div}>
                            <div className={detailCss.comment_header}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                }}
                              >
                                <div
                                  className={detailCss.comments_profile_img_div}
                                >
                                  <img src={elem.profile_img} alt="" />
                                </div>

                                <div>
                                  <p
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "800",
                                    }}
                                  >
                                    {elem.user_name}
                                  </p>
                                  <p
                                    style={{ fontSize: "13px", color: "gray" }}
                                  >
                                    {formatted_date} at {elem.posted_date.clock}
                                  </p>
                                </div>
                              </div>

                              <button className={detailCss.reply_btn}>
                                Reply
                              </button>
                            </div>
                            <div className={detailCss.comment_content}>
                              <p style={{ color: "gray" }}>
                                {elem.comment_content}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className={detailCss.post_comment_div}>
                <h2>Post a comment</h2>
                <form className={detailCss.post_comment_form}>
                  <input type="text" placeholder="Your Full name" />
                  <input type="email" placeholder="Email address" />
                  <input type="tel" placeholder="Phone Number" />
                  <textarea placeholder="Message"></textarea>
                  <input
                    type="submit"
                    value="Submit Now"
                    className={detailCss.post_form_submit}
                  />
                </form>
              </div>
            </div>
          )}
          {about === "reviews" && (
            <div className={detailCss.about_reviews_container}>
              <div className={detailCss.reviews_div}>
                <div className={detailCss.reviews_header}>
                  <div className={detailCss.overall}>
                    <p style={{ fontSize: "20px", fontWeight: "800" }}>
                      Overall
                    </p>
                    <h1 style={{ fontSize: "40px", color: "#384aeb" }}>
                      {average_rate.toFixed(1)}
                    </h1>
                    <p style={{ color: "gray" }}>(3 reviews)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "800", fontSize: "20px" }}>
                      Based on {comments_count} reviews
                    </p>
                    <ul>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p>5 star</p>
                        <Rating name="read-only" value={5} readOnly />
                        <p>{five_star}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p>4 star</p>
                        <Rating name="read-only" value={4} readOnly />
                        <p>{four_star}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p>3 star</p>
                        <Rating name="read-only" value={3} readOnly />
                        <p>{three_star}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p>2 star</p>
                        <Rating name="read-only" value={2} readOnly />
                        <p>{two_star}</p>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p>1 star</p>
                        <Rating name="read-only" value={1} readOnly />
                        <p>{one_star}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={detailCss.comments_div}>
                  <ul>
                    {product.comments &&
                      product.comments.map((elem) => {
                        return (
                          <li key={uuidv4()}>
                            <div className={detailCss.comment_div}>
                              <div className={detailCss.comment_header}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div
                                    className={
                                      detailCss.comments_profile_img_div
                                    }
                                  >
                                    <img src={elem.profile_img} alt="" />
                                  </div>

                                  <div>
                                    <p
                                      style={{
                                        fontSize: "20px",
                                        fontWeight: "800",
                                      }}
                                    >
                                      {elem.user_name}
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "13px",
                                        color: "gray",
                                      }}
                                    >
                                      <Rating
                                        name="read-only"
                                        value={elem.rate}
                                        readOnly
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={detailCss.comment_content}>
                                <p style={{ color: "gray" }}>
                                  {elem.comment_content}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className={detailCss.add_review}>
                <p style={{ fontSize: "25px", fontWeight: "800" }}>
                  Add a Review
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p>Your Rating</p>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                  <p>Outstanding</p>
                </div>
                <form className={detailCss.post_comment_form}>
                  <input type="text" placeholder="Enter your name" />
                  <input type="email" placeholder="Enter email address" />
                  <input type="text" placeholder="Enter subject" />
                  <textarea placeholder="Enter message"></textarea>
                  <input
                    type="submit"
                    value="Submit Now"
                    className={detailCss.post_form_submit}
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={detailCss.trending_products_container}>
        {" "}
        <div className={detailCss.products_container}>
          <div className={detailCss.products_title}>
            <p>Popular Item in the market</p>
            <h1>Top Product</h1>
            <hr className={detailCss.products_title_line} />
          </div>
          <div className={detailCss.trending_products_div}>
            {topProducts &&
              topProducts.map((elem, index) => {
                if (index < 12) {
                  return (
                    <div
                      className={detailCss.trending_product_card}
                      key={uuidv4()}
                    >
                      <div
                        className={detailCss.trending_product_card_image_div}
                      >
                        <img
                          src={elem.image_url}
                          alt=""
                          className={detailCss.trending_product_card_image}
                        />
                      </div>
                      <div className={detailCss.trending_product_card_details}>
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

export default ProductDetails;
