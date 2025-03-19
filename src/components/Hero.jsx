import React from "react";
import Sidebar from "./Sidebar";
import SwiperHero from "./SwiperHero";

const Hero = () => {
  return (
    <div className="store-container flex items-center gap-3 flex-col-reverse sm:flex-col md:flex-row">
      <Sidebar />
      <SwiperHero />
    </div>
  );
};

export default Hero;
