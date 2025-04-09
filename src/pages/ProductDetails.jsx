import RelatedProducts from "../components/RelatedProducts";
import { HeartIcon } from "@heroicons/react/24/outline";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrReturn } from "react-icons/gr";
import { IoReturnUpBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const colors = [
    { value: "blue", colorCode: "#90caf9" },
    { value: "red", colorCode: "#f28b82" },
    { value: "green", colorCode: "#81c784" },
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    setSelectedSize(sizes[0]);
  }, []);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    console.log("the selected size is " + selectedSize);
  };

  return (
    <div className="store-container">
      <div className="flex items-center gap-3 mt-10">
        <div className="text-gray-600">Product</div>
        <div>/</div>
        <div className="text-gray-600">Gaming</div>
        <div>/</div>
        <div className="text-gray-600 font-bold">Havic HV G-92 Gamepad</div>
      </div>
      <div className="flex gap-5 mt-15 flex-col lg:flex-row py-10 ">
        <div className="flex gap-5 w-full h-full">
          <div className=" flex flex-col gap-4 h-full">
            <div className="bg-[#F5F5F5] px-7 py-3 ">
              <img
                src="/images/controller.png"
                alt=""
                className="object-contain w-30 h-30"
              />
            </div>
            <div className="bg-[#F5F5F5] px-7 py-3">
              <img
                src="/images/controller.png"
                alt=""
                className="object-contain w-30 h-30"
              />
            </div>
            <div className="bg-[#F5F5F5] px-7 py-3">
              <img
                src="/images/controller.png"
                alt=""
                className="object-contain w-30 h-30"
              />
            </div>
            <div className="bg-[#F5F5F5] px-7 py-3">
              <img
                src="/images/controller.png"
                alt=""
                className="object-contain w-30 h-30"
              />
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-full px-5 py-5 flex items-center justify-center">
            <img
              src="/images/controller.png"
              alt=""
              className="h-[400px] w-[400px]  "
            />
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <h1 className="text-3xl">Havic HV G-92 Gamepad</h1>

          <div className="mb-8">
            <div className="greyColorText font-bold flex items-center space-x-3 mt-2">
              <div className="flex items-center gap-3 text-sm ">
                <StarRatings
                  rating={5}
                  starRatedColor="#FFAD33"
                  numberOfStars={5}
                  name="rating"
                  starDimension="14px"
                  starSpacing="5px"
                />
              </div>
              <span>(150 Reviews) | </span>
              <span className="text-[#00FF66]">{"In Stock"}</span>
            </div>
            <h1 className="mt-4 mb-5 text-xl md:text-2xl">$192.00</h1>
            <p className="text-sm md:text-base ">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <hr className="font-light opacity-50" />
          <div className="mt-5">
            <div className="flex items-center gap-5 mb-2">
              <div className="font-bold">Colours:</div>

              <FormControl>
                <RadioGroup row defaultValue="blue" name="color-selection">
                  {colors.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={
                        <Radio
                          sx={{
                            color: item.colorCode,
                            "&.Mui-checked": {
                              color: item.colorCode,
                            },
                          }}
                        />
                      }
                      label=""
                      sx={{
                        ".MuiFormControlLabel-label": {
                          display: "none",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mb-2">
              <FormControl>
                <div className="font-bold">Size:</div>
                <RadioGroup
                  row
                  defaultValue="M"
                  name="size-selection"
                  sx={{ gap: 1 }}
                  onChange={handleSizeChange}
                >
                  {sizes.map((size) => (
                    <FormControlLabel
                      key={size}
                      value={size}
                      control={<Radio sx={{ display: "none" }} />}
                      label={size}
                      sx={{
                        m: 0,
                        px: 2,
                        py: 1,
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        color: selectedSize === size ? "white" : "black",
                        backgroundColor:
                          selectedSize === size ? "#DB4444" : "white",
                        transition: "0.2s",
                        "&.Mui-checked, &.MuiFormControlLabel-root.Mui-checked":
                          {
                            backgroundColor: "#DB4444",
                            color: "white",
                            borderColor: "#e74c3c",
                          },
                        "&:hover": {
                          backgroundColor: "#f4f4f4",
                        },
                        "& .MuiTypography-root": {
                          fontWeight: "bold",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <div className="flex  gap-5 mt-5 flex-col lg:flex-row">
              <div className="border-1 flex items-center w-fit h-fit">
                <button
                  className="button-theme font-bold 
                  hover:bg-[#DB4444] hover:text-white border-1 rounded-none"
                >
                  -
                </button>
                <button className="button-theme font-bold hover:bg-[#DB4444] hover:text-white border-1 rounded-none">
                  2
                </button>
                <button className="button-theme font-bold hover:bg-[#DB4444] hover:text-white border-1 rounded-none">
                  +
                </button>
              </div>
              <div className="flex items-center gap-5">
                <button className="button-theme  bg-[#DB4444] text-white">
                  Buy Now
                </button>
                <button className="button-theme w-[5px]flex ">
                  <HeartIcon className="icon-style text-black" />
                </button>
              </div>
            </div>
            <div className="border-1 mt-10">
              <div className="flex items-center gap-3 px-3 py-3">
                <div className="flex items-center">
                  <FaShippingFast className="icon-style text-black w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-bold text-base">Free Delivery</h2>
                  <p className="text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3 py-3 border-t-1">
                <div className="flex items-center">
                  <GrReturn className="icon-style text-black w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-bold text-base">Return Delivery</h2>
                  <p className="text-sm">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
