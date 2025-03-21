import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";

function App() {
  return (
    <>
      <Router>
        <Header />
        <hr className="font-light opacity-16" />
        <Hero />
        <FlashSales />
      </Router>
    </>
  );
}

export default App;
