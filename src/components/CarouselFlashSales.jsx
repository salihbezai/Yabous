import React, { useEffect, useMemo } from "react";
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
import { useDispatch, useSelector } from "react-redux";

const CarouselFlashSales = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const updatedProducts = useMemo(() => {
    return products.map((product) => ({
      ...product,
      ratingCount: Math.floor(Math.random() * 200) + 1,
      discount: Math.floor(product.price - product.price * 0.2),
      discountPercent: "20%",
    }));
  }, [products]);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
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
      {updatedProducts?.slice(0, 10).map((product) => (
        <SwiperSlide key={product.id}>
          <div>
            <div
              className="relative flex items-center flex-col justify-end w-[250px] h-[250px] shadow-md 
            rounded-md bg-color-bg-3 cursor-pointer "
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
              />
              <span className="bg-color-bg-2 text-white px-2 rounded  text-sm absolute top-3 left-1">
                {product.discountPercent}
              </span>
              <div className="absolute top-3  right-0 flex flex-col gap-3">
                {/* <div
                  className="bg-white px-1 py-1 rounded-full cursor-pointer"
                  onClick={(e) => {
                    console.log("hi");
                  }}
                >
                  <HeartIcon className="icon-style text-black" />
                </div>
                <div className="bg-white px-1 py-1 rounded-full cursor-pointer ">
                  <MdOutlineRemoveRedEye className="icon-style text-black" />
                </div> */}
              </div>

              <button
                className="button-theme shadow-gray-400
               text-slate-100 bg-color-bg-1 w-full rounded py-1.5"
              >
                Add To Cart
              </button>
            </div>
            <div className="w-[250px] py-3">
              <p
                className="font-bold text-base
               text-black sm:text-sm md:text-base lg:text-base  xl:text-base h-[48px]"
              >
                {product.title}
              </p>
              <div className="flex items-center gap-4">
                <p className="secondaryColorText font-bold">
                  {product.price} $
                </p>
                <p className="greyColorText line-through font-bold">
                  {product.discount} $
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <StarRatings
                  rating={5}
                  starRatedColor="#FFAD33"
                  numberOfStars={5}
                  name="rating"
                  starDimension="14px"
                  starSpacing="5px"
                />
                <p className="greyColorText font-bold">
                  ({product.ratingCount})
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselFlashSales;
