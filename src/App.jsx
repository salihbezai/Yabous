import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";

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
      </Router>
    </>
  );
}

export default App;
