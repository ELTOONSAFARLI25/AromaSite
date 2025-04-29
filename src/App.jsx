import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ShopCategory from "./pages/shop/shopCategory/ShopCategory";
import ProductDetails from "./pages/shop/productDetails/ProductDetails";
import ProductChekout from "./pages/shop/productCheckout/ProductChekout";
import Confirmation from "./pages/shop/confirmation/Confirmation";
import ShoppingCart from "./pages/shop/shoppingCart/ShoppingCart";
import Login from "./pages/login/Login";
import Regiter from "./pages/register/Regiter";
import Tracking from "./pages/tracking/Tracking";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Contact from "./pages/contact/Contact";
import "typeface-roboto";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop-category" element={<ShopCategory />}></Route>
        <Route path="/product-details/:id" element={<ProductDetails />}></Route>
        <Route path="/product-checkout" element={<ProductChekout />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Regiter />}></Route>
        <Route path="/tracking" element={<Tracking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
