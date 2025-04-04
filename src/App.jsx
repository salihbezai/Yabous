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

function App() {
  return (
    <>
      <Router>
        <Header />
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
