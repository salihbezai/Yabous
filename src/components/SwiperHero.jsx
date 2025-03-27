import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { ArrowForward } from "@mui/icons-material";

// Slide data with images
const slides = [
  {
    image: "/images/product2.png",
    logo: "/images/appleLogo.png",
    title: "IPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    description:
      "The Adidas Ultraboost 22 delivers unbeatable energy return with Boost cushioning, while the Primeknit upper adapts to your foot for ultimate comfort.",
  },
  {
    image: "/images/product1.png",
    logo: "/images/nikeLogo.png",
    title: "Nike Air Zoom Pegasus 40",
    subtitle: "Elevate Your Run with Comfort & Speed",
    description:
      "Experience the perfect blend of performance and comfort with the Nike Air Zoom Pegasus 40. Designed for runners of all levels, this shoe features responsive Zoom Air units for exceptional energy return and a breathable mesh upper to keep your feet cool.",
  },
  {
    image: "/images/sony5.jpg",
    logo: "/images/sony.ico",
    title: "PlayStation DualSense",
    subtitle: "Next-Gen Gaming Experience",
    description:
      "Feel every action with haptic feedback and adaptive triggers.",
  },
];

const SwiperHero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [isMediumScreen, setMediumScreen] = useState(window.innerWidth > 768);
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setMediumScreen(window.innerWidth >= 640 && window.innerWidth < 1024);
      setLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        height: "400px",
        borderRadius: "10px",
        margin: "5px 5px",
      }}
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: isSmallScreen
              ? "90%"
              : isMediumScreen
              ? "70%"
              : "contain", // Smaller image on small screens
            backgroundPosition: "100% center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="flex flex-col justify-items-start gap-5 lg:justify-around md:justify-around    h-full">
            <div
              className="title flex items-center sm:"
              data-swiper-parallax="-300"
            >
              {slide.logo && (
                <img
                  src={slide.logo}
                  alt="Brand Logo"
                  className="w-7 h-7 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              )}
              <h1 className="ml-1 font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl ">
                {slide.title}
              </h1>
            </div>
            <div className="subtitle w-[300px]" data-swiper-parallax="-200">
              <h3 className="text-2xl sm:text-2xl mb-1 mt-1 md:text-4xl lg:text-4xl font-semibold ">
                {slide.subtitle}
              </h3>
            </div>

            <div className="flex items-center ">
              <button className="font-bold border-b-2 border-[#FAFAFA] cursor-pointer">
                Shop Now
              </button>
              <ArrowForward className="icon-style" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHero;
