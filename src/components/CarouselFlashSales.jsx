import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import StarRatings from "react-star-ratings";
import { HeartIcon } from "@heroicons/react/24/outline";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const CarouselFlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      discount: "-40%",
      img: "/images/controller.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      discount: "-35%",
      img: "/images/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      discount: "-30%",
      img: "/images/monitor.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "-25%",
      img: "/images/chair.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "-25%",
      img: "chair.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "-25%",
      img: "chair.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "-25%",
      img: "chair.jpg",
    },
  ];

  const changeRating = (newRating) => {
    console.log(newRating);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={4}
      spaceBetween={35}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
      style={{
        backgroundColor: "#fff",
      }}
      breakpoints={{
        500: {
          // When screen width is ≥ 640px
          slidesPerView: 2,
        },

        720: {
          // When screen width is ≥ 640px
          slidesPerView: 3,
        },
        1024: {
          // When screen width is ≥ 1024px
          slidesPerView: 4,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div>
            <div
              className="relative flex items-center flex-col justify-end w-[250px] h-[250px] shadow-md 
            rounded-md bg-color-bg-3 cursor-pointer "
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
              />
              <span className="bg-color-bg-2 text-white px-2 rounded  text-sm absolute top-3 left-1">
                {product.discount}
              </span>
              <div className="absolute top-3  right-0 flex flex-col gap-3">
                <div className="bg-white px-1 py-1 rounded-full">
                  <HeartIcon className="icon-style text-black" />
                </div>
                <div className="bg-white px-1 py-1 rounded-full">
                  <MdOutlineRemoveRedEye className="icon-style text-black" />
                </div>
              </div>

              <button
                className="button-theme shadow-gray-400
               text-slate-100 bg-color-bg-1 w-full rounded py-1.5"
              >
                Add To Cart
              </button>
            </div>
            <div className="w-[250px]">
              <p className="font-bold text-base text-black sm:text-base md:text-lg lg:text-lg xl:text-xl">
                {product.name}
              </p>
              <div className="flex items-center gap-4">
                <p className="secondaryColorText font-bold">{product.price}</p>
                <p className="greyColorText line-through font-bold">
                  {product.price}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <StarRatings
                  rating={5}
                  starRatedColor="#FFAD33"
                  changeRating={changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="14px"
                  starSpacing="5px"
                />
                <p className="greyColorText font-bold">(88)</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselFlashSales;
