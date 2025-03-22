import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosPhonePortrait } from "react-icons/io";

const CarouselCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Phones",
      img: "/images/phone-svgrepo-com.svg",
    },
    {
      id: 2,
      name: "Computers",
      img: "/images/computer-svgrepo-com.svg",
    },
    {
      id: 3,
      name: "SmartWatch",
      img: "/images/smartwatch-svgrepo-com.svg",
    },
    {
      id: 4,
      name: "Camera",
      img: "/images/camera-svgrepo-com.svg",
    },
    {
      id: 5,
      name: "HeadPhones",
      img: "/images/headphones-alt-svgrepo-com.svg",
    },
    {
      id: 6,
      name: "Gaming",
      img: "/images/gaming-pad-02-svgrepo-com.svg",
    },
  ];
  return (
    <div className="store-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={35}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
        style={{
          backgroundColor: "#fff",
          paddingTop: "60px",
        }}
        breakpoints={{
          500: {
            // When screen width is ≥ 640px
            slidesPerView: 1,
          },

          720: {
            // When screen width is ≥ 640px
            slidesPerView: 3,
          },
          1024: {
            // When screen width is ≥ 1024px
            slidesPerView: 4,
          },
          1140: {
            // When screen width is ≥ 1024px
            slidesPerView: 5,
          },
        }}
      >
        {categories?.map((category) => (
          <SwiperSlide
            key={category.id}
            className="px-3 py-3 rounded 
             border border-[#7F7F7F] cursor-pointer hover:bg-[#DB4444] group"
          >
            <div className="flex flex-col gap-4 items-center  justify-center cursor-pointer">
              <div>
                <img
                  src={category.img}
                  alt=""
                  className="w-25 h-25 sm:w-25 sm:h-25 md:h-30 md:w-30  lg:h-30 lg:w-30  group-hover:invert group-hover:brightness-0"
                />
              </div>
              <div className="">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl  text-black group-hover:text-white ">
                  {category.name}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategories;
