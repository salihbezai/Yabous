import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";
import HeroCategories from "./components/HeroCategories";
import OurProducts from "./components/OurProducts";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Myaccount from "./pages/Myaccount";
import EditProfile from "./components/EditProfile";
import PaymentOptions from "./components/PaymentOptions";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserProfile, refreshToken } from "./features/user/userActions";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refresh_Token = localStorage.getItem("refresh_token");

    if (accessToken) {
      dispatch(getUserProfile(accessToken));
    } else {
      dispatch(refreshToken(refresh_Token));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myaccount/*" element={<Myaccount />}>
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="payment-options" element={<PaymentOptions />} />
          </Route>
          <Route path="/product/*">
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Not-Found" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
