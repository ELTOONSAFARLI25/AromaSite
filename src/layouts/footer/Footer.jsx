import React from "react";
import footerCss from "./Footer.module.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <>
      <footer>
        <div className={footerCss.container}>
          <div className={footerCss.box}>
            <h1>Get Update From Anywhere</h1>
            <p style={{ color: "gray" }}>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className={footerCss.content}>
            <ul className={footerCss.content_list}>
              <li
                className={`${footerCss.footer_item} ${footerCss.texts}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "250px",
                }}
              >
                <h1>Our Mission</h1>
                <p>
                  So seed seed green that winged cattle in. Gathering thing made
                  fly you're no divided deep moved us lan Gathering thing us
                  land years living.
                </p>
                <p>
                  So seed seed green that winged cattle in. Gathering thing made
                  fly you're no divided deep moved
                </p>
              </li>
              <li className={`${footerCss.footer_item} ${footerCss.links}`}>
                <h4>Quick Links</h4>
                <ul className={footerCss.links_list}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop-category">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li className={`${footerCss.footer_item} ${footerCss.images}`}>
                <h4>Gallery</h4>
                <div className={footerCss.footer_images}>
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r1.jpg"
                    alt=""
                  />
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r2.jpg"
                    alt=""
                  />
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r3.jpg"
                    alt=""
                  />
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r5.jpg"
                    alt=""
                  />
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r7.jpg"
                    alt=""
                  />
                  <img
                    src="https://preview.colorlib.com/theme/aroma/img/gallery/r8.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className={`${footerCss.footer_item} ${footerCss.contact}`}>
                <h4>Contact Us</h4>
                <ul className={footerCss.contact_list}>
                  <li>
                    <LocationOnIcon className={footerCss.icon} />
                    <div>
                      <h4> Head Office </h4>
                      <p>123, Main Street, Your City</p>
                    </div>
                  </li>
                  <li>
                    <LocalPhoneIcon className={footerCss.icon} />
                    <div>
                      <h4> Phone Number </h4>
                      <p>+123 456 7890</p>
                      <p>+123 456 7890</p>
                    </div>
                  </li>
                  <li>
                    <EmailIcon className={footerCss.icon} />
                    <div>
                      <h4>Email</h4>
                      <p>free@infoexample.com</p>
                      <p>www.infoexample.com</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
