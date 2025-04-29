import React, { useContext, useEffect, useState } from "react";
import homeCss from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { Link } from "react-router-dom";
import langCheck from "./language";
import { DataContext } from "../../context/data_context";
function Home() {
  let store = useContext(DataContext);
  let products = store.products.data;
  return (
    <>
      <div className={homeCss.header}>
        <div className={homeCss.header1}>
          <div className={homeCss.header_color_box}>
            <div className={homeCss.header_img_div}>
              <img
                src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
                alt=""
              />
            </div>{" "}
            <div className={homeCss.header_texts}>
              <p>
                {langCheck.heroSection.heroSectionParagragh[store.lang.data]}
              </p>
              <h1>{langCheck.heroSection.heroSectionTitle[store.lang.data]}</h1>
              <span>
                {langCheck.heroSection.heroSectionText[store.lang.data]}
              </span>
              <button className={homeCss.browseNow_btn}>
                {langCheck.heroSection.heroSectionBtn[store.lang.data]}
              </button>
            </div>
          </div>
        </div>
        <div className={homeCss.header2}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className={homeCss.swiper_container}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              624: {
                slidesPerView: 2,
              },
              845: {
                slidesPerView: 3,
              },
            }}
          >
            {products &&
              products.map((elem, index) => {
                if (index < 4) {
                  return (
                    <div key={uuidv4()}>
                      <SwiperSlide>
                        <Link to={`/product-details/${elem.id}`}>
                          <div className={homeCss.swiperBox}>
                            <img src={elem.image_url} alt="" />
                            <div className={homeCss.swiper_hover_box}>
                              <div className={homeCss.swiper_product_details}>
                                <h3>{elem.title}</h3>
                                <p>{elem.category}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  );
                }
              })}
          </Swiper>
        </div>
      </div>
      <div className={homeCss.products_container}>
        <div className={homeCss.products_title}>
          <p>{langCheck.trendingProducts.desc[store.lang.data]}</p>
          <h1>{langCheck.trendingProducts.title[store.lang.data]}</h1>
          <hr className={homeCss.products_title_line} />
        </div>
        <div className={homeCss.products_div}>
          {products &&
            products.map((elem) => {
              return (
                <div className={homeCss.product_card} key={uuidv4()}>
                  <div className={homeCss.product_card_image_div}>
                    <img
                      src={elem.image_url}
                      alt=""
                      className={homeCss.product_card_image}
                    />
                    <div className={homeCss.product_card_buttons}>
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
                  <div className={homeCss.product_card_details}>
                    <p>{elem.category}</p>
                    <h1>{elem.title}</h1>
                    <h3>${elem.price}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={homeCss.body_image_div}>
        <div className={homeCss.body_image_div_content}>
          <h1>{langCheck.adSection.paragraph[store.lang.data]}</h1>
          <h2>{langCheck.adSection.title[store.lang.data]}</h2>
          <p>{langCheck.adSection.desc[store.lang.data]}</p>
          <button className={homeCss.browseNow_btn}>
            {langCheck.adSection.button[store.lang.data]}
          </button>
        </div>
      </div>
      <div className={homeCss.products_container}>
        <div className={homeCss.products_title}>
          <p>{langCheck.bestSellersProducts.desc[store.lang.data]}</p>
          <h1>{langCheck.bestSellersProducts.title[store.lang.data]}</h1>
          <hr className={homeCss.products_title_line} />
        </div>
        <div className={homeCss.products_div}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className={homeCss.products_swiper}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              550: {
                slidesPerView: 2,
              },
              845: {
                slidesPerView: 3,
              },
              1060: {
                slidesPerView: 4,
              },
            }}
          >
            {products &&
              products.map((elem) => {
                return (
                  <SwiperSlide>
                    <div className={homeCss.product_card} key={uuidv4()}>
                      <div className={homeCss.product_card_image_div}>
                        <img
                          src={elem.image_url}
                          alt=""
                          className={homeCss.product_card_image}
                        />
                        <div className={homeCss.product_card_buttons}>
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
                      <div className={homeCss.product_card_details}>
                        <p>{elem.category}</p>
                        <h1>{elem.title}</h1>
                        <h3>${elem.price}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className={homeCss.news_container}>
        <div className={homeCss.products_title}>
          <p>{langCheck.latestNews.desc[store.lang.data]}</p>
          <h1>{langCheck.latestNews.title[store.lang.data]}</h1>
          <hr className={homeCss.products_title_line} />
        </div>
        <div className={homeCss.news_div}>
          <div className={homeCss.news_box}>
            <div className={homeCss.news_box_image_div}>
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png"
                alt=""
              />
            </div>
            <div className={homeCss.news_box_details}>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                {" "}
                <p>By Admin</p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <ChatBubbleOutlineIcon style={{ fontSize: "15px" }} />2
                  Comments
                </p>
              </div>
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <div className={homeCss.news_box_details_readmore}>
                <a href="">Read more </a>
                <i className={homeCss.news_box_details_readmore_icon}>
                  {" "}
                  <ArrowForwardIcon style={{ fontSize: "19px" }} />
                </i>
              </div>
            </div>
          </div>
          <div className={homeCss.news_box}>
            <div className={homeCss.news_box_image_div}>
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png"
                alt=""
              />
            </div>
            <div className={homeCss.news_box_details}>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                {" "}
                <p>By Admin</p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <ChatBubbleOutlineIcon style={{ fontSize: "15px" }} />2
                  Comments
                </p>
              </div>
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <div className={homeCss.news_box_details_readmore}>
                <a href="">Read more </a>
                <i className={homeCss.news_box_details_readmore_icon}>
                  {" "}
                  <ArrowForwardIcon style={{ fontSize: "19px" }} />
                </i>
              </div>
            </div>
          </div>
          <div className={homeCss.news_box}>
            <div className={homeCss.news_box_image_div}>
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png"
                alt=""
              />
            </div>
            <div className={homeCss.news_box_details}>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                {" "}
                <p>By Admin</p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <ChatBubbleOutlineIcon style={{ fontSize: "15px" }} />2
                  Comments
                </p>
              </div>
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <div className={homeCss.news_box_details_readmore}>
                <a href="">Read more </a>
                <i className={homeCss.news_box_details_readmore_icon}>
                  {" "}
                  <ArrowForwardIcon style={{ fontSize: "19px" }} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
