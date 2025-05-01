import React, { useContext, useState } from "react";
import navCss from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import langCheck from "./language";
import { DataContext } from "../../context/data_context";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let store = useContext(DataContext);
  return (
    <>
      <nav>
        <div className={navCss.navbar}>
          <div className={isOpen ? navCss.mobileMenu : navCss.container}>
            <div className={navCss.logo}>
              <NavLink to="/">
                {" "}
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/logo.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className={navCss.links}>
              <ul>
                <li className={navCss.link_item}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? navCss.activeLink : navCss.link_name
                    }
                  >
                    {" "}
                    <p>{langCheck.nav.home[store.lang.data]}</p>
                  </NavLink>
                </li>
                <li className={`${navCss.shop} ${navCss.link_item}`}>
                  <p>{langCheck.nav.shop.main_shop[store.lang.data]}</p>
                  <div className={navCss.shop_links}>
                    <ul>
                      <li className={navCss.sub_menu_item}>
                        <NavLink to="/shop-category">
                          {
                            langCheck.nav.shop.submenu_item.category[
                              store.lang.data
                            ]
                          }
                        </NavLink>
                      </li>
                      <li className={navCss.sub_menu_item}>
                        <NavLink to="/product-checkout">
                          {
                            langCheck.nav.shop.submenu_item.checkout[
                              store.lang.data
                            ]
                          }
                        </NavLink>
                      </li>
                      <li className={navCss.sub_menu_item}>
                        <NavLink to="/confirmation">
                          {
                            langCheck.nav.shop.submenu_item.confirmation[
                              store.lang.data
                            ]
                          }
                        </NavLink>
                      </li>
                      <li className={navCss.sub_menu_item}>
                        <NavLink to="/shopping-cart">
                          {
                            langCheck.nav.shop.submenu_item.shoppingCart[
                              store.lang.data
                            ]
                          }
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className={navCss.link_item}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? navCss.activeLink : navCss.link_name
                    }
                  >
                    <p className={navCss.link_name}>
                      {langCheck.nav.contact[store.lang.data]}
                    </p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={navCss.buttons_div}>
              <button className={navCss.search_btn}>
                <SearchIcon />
              </button>
              <button className={navCss.cart_btn}>
                <ShoppingCartIcon />
              </button>
              <button className={navCss.buy_btn}>
                {langCheck.nav.buyNowBtn[store.lang.data]}
              </button>
              <div className={navCss.langs}>
                <p>
                  <LanguageIcon />
                </p>

                <div className={navCss.submenu_langs}>
                  <ul>
                    <li
                      className={navCss.sub_menu_item}
                      onClick={() => {
                        store.lang.setData(0);
                      }}
                    >
                      Azərbaycanca
                    </li>
                    <li
                      className={navCss.sub_menu_item}
                      onClick={() => {
                        store.lang.setData(1);
                      }}
                    >
                      English
                    </li>
                    <li
                      className={navCss.sub_menu_item}
                      onClick={() => {
                        store.lang.setData(2);
                      }}
                    >
                      Русский
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className={navCss.menu_btn}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
