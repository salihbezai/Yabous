import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";

function App() {
  return (
    <>
      <Router>
        <Header />
        <hr className="font-light opacity-16" />
        <Hero />
        <FlashSales />
        <hr className="font-light opacity-16" />
        <Categories />
        <hr className="font-light opacity-16" />
        <BestSelling />
      </Router>
    </>
  );
}

export default App;
