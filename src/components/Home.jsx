import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import HeroCategories from "../components/HeroCategories";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Services from "../components/Services";
import { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <hr className="font-light opacity-16" />
      <Hero />
      <FlashSales />
      <hr className="font-light opacity-16" />
      <Categories />
      <hr className="font-light opacity-16" />
      <BestSelling />
      <HeroCategories />
      <OurProducts />
      <Featured />
      <Services />
    </div>
  );
};

export default Home;
