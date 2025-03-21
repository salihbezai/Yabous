import React from "react";
import SwiperHero from "./SwiperHero";
import SidebarContainer from "./SidebarContainer";

const Hero = () => {
  return (
    <div className="store-container flex items-start gap-3  md:flex-row sm:items-start">
      <SidebarContainer />
      <SwiperHero />
    </div>
  );
};

export default Hero;
