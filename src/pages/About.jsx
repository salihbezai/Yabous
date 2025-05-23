import {
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Instagram, LinkedIn, Storefront, Twitter } from "@mui/icons-material";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Services from "../components/Services.jsx";
const About = () => {
  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "/images/tom cruise.png",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "/images/Emma watson.png",
    },
    {
      name: "Osmane Reda",
      role: "Product Manager",
      image: "/images/will smith.png",
    },
    {
      name: "Achraf Bezai",
      role: "UX Designer",
      image: "/images/aurelia-dubois.png",
    },
  ];

  return (
    <div className="store-container space-y-5">
      <div className="flex items-center gap-3 mt-10">
        <div className="text-gray-600">Home</div>
        <div>/</div>
        <div className="text-gray-600 font-bold">About</div>
      </div>
      <div className="flex lg:items-center gap-5 flex-col md:flex-col lg:flex-row mt-10 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-10">Our Story</h1>
          <p className="max-w-xl text-lg leading-relaxed">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="max-w-xl mt-8 text-lg leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full lg:w-1/2  ">
          <img
            src="/images/africanfemales.png"
            alt="africans females"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className="py-[100px] place-items-center grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 lg:grid-cols-4 w-full gap-8"
      >
        <div
          className="flex flex-col items-center w-full max-w-[280px] h-full  px-3 py-3 rounded 
             border border-[#7F7F7F] cursor-pointer hover:bg-[#DB4444] group mx-auto"
        >
          <div className=" flex justify-center items-center bg-[#C1C1C1] w-35 h-35 rounded-full">
            <div className=" flex justify-center items-center bg-black w-30 h-30 rounded-full group-hover:bg-white">
              <BuildingStorefrontIcon
                className="text-white w-15 h-15 sm:w-15 sm:h-15 md:h-20 md:w-20  
               lg:h-20 lg:w-20  group-hover:invert group-hover:bg-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h2
              className="text-xl text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 
             text-black font-bold group-hover:text-white "
            >
              10.5k
            </h2>
            <div className="text-base text-center px-2 py-3   text-black group-hover:text-white ">
              Sallers active our site
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-full max-w-[280px] h-full px-3 py-3 rounded 
             border border-[#7F7F7F] cursor-pointer hover:bg-[#DB4444] group mx-auto"
        >
          <div className=" flex justify-center items-center bg-[#C1C1C1] w-35 h-35 rounded-full">
            <div className=" flex justify-center items-center bg-black w-30 h-30 rounded-full group-hover:bg-white">
              <CurrencyDollarIcon
                className="text-white w-15 h-15 sm:w-15 sm:h-15 md:h-20 md:w-20  
               lg:h-20 lg:w-20  group-hover:invert group-hover:bg-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h2
              className="text-xl text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 
             text-black font-bold group-hover:text-white "
            >
              33k
            </h2>
            <div className="text-base text-center px-2 py-3   text-black group-hover:text-white ">
              Mopnthly Produduct Sale
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-full max-w-[280px] h-full px-3 py-3 rounded 
             border border-[#7F7F7F] cursor-pointer hover:bg-[#DB4444] group mx-auto"
        >
          <div className=" flex justify-center items-center bg-[#C1C1C1] w-35 h-35 rounded-full">
            <div className=" flex justify-center items-center bg-black w-30 h-30 rounded-full group-hover:bg-white">
              <ShoppingBagIcon
                className="text-white w-15 h-15 sm:w-15 sm:h-15 md:h-20 md:w-20  
               lg:h-20 lg:w-20  group-hover:invert group-hover:bg-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h2
              className="text-xl text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 
             text-black font-bold group-hover:text-white "
            >
              45.5k
            </h2>
            <div className="text-base text-center px-2 py-3   text-black group-hover:text-white ">
              Customer active in our site
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-full max-w-[280px] h-full px-3 py-3 rounded 
             border border-[#7F7F7F] cursor-pointer hover:bg-[#DB4444] group mx-auto"
        >
          <div className=" flex justify-center items-center bg-[#C1C1C1] w-35 h-35 rounded-full">
            <div className=" flex justify-center items-center bg-black w-30 h-30 rounded-full group-hover:bg-white">
              <ShoppingBagIcon
                className="text-white w-15 h-15 sm:w-15 sm:h-15 md:h-20 md:w-20  
               lg:h-20 lg:w-20  group-hover:invert group-hover:bg-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h2
              className="text-xl text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 
             text-black font-bold group-hover:text-white "
            >
              25k
            </h2>
            <div className="text-base text-center px-2 py-3  leading-snug  text-black group-hover:text-white ">
              Annual gross sale on our site
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={250}
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
            slidesPerView: 3,
          },
          1140: {
            // When screen width is ≥ 1024px
            slidesPerView: 3,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="px-3 py-3 cursor-pointer">
            <div className="w-[320px] h-[460px] flex flex-col">
              <div className="bg-[#F5F5F5] h-[280px] flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[240px] w-auto object-contain"
                />
              </div>
              <div className="flex-1 py-3 px-4 space-y-2 flex flex-col">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    {member.name}
                  </h2>
                  <p className="text-gray-600">{member.role}</p>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Twitter />
                  <Instagram />
                  <LinkedIn />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Services />
    </div>
  );
};

export default About;
