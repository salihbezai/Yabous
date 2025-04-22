import { getSingleProductById } from "../features/products/productActions";
import RelatedProducts from "../components/RelatedProducts";
import { HeartIcon } from "@heroicons/react/24/outline";
import { South } from "@mui/icons-material";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrReturn } from "react-icons/gr";
import { IoReturnUpBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const { product, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colors = [
    { value: "blue", colorCode: "#90caf9" },
    { value: "red", colorCode: "#f28b82" },
    { value: "green", colorCode: "#81c784" },
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    setSelectedSize(sizes[0]);
  }, []);

  useEffect(() => {
    dispatch(getSingleProductById(id));
  }, [dispatch, id]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const updatedProduct = useMemo(() => {
    return {
      ...product,
      ratingCount: Math.floor(Math.random() * 200) + 1,
    };
  });
  console.log("the product " + product && product);

  if (loading) return <LoadingSpinner />;
  if (!product) return <NotFound />;
  return (
    <div className="store-container">
      <div className="flex items-center gap-3 mt-10">
        <div className="text-gray-600">Product</div>
        <div>/</div>
        <div className="text-gray-600">{product && product.category.name}</div>
        <div>/</div>
        <div className="text-gray-600 font-bold">
          {updatedProduct && updatedProduct.title}
        </div>
      </div>
      <div className="flex gap-5 mt-15 flex-col lg:flex-row py-10 ">
        <div className="flex gap-5 w-full h-full">
          <div className=" flex flex-col gap-4 h-full">
            {updatedProduct &&
              updatedProduct.images.map((url) => (
                <div className="bg-[#F5F5F5] px-7 py-3 ">
                  <img src={url} alt="" className="object-contain w-30 h-30" />
                </div>
              ))}
          </div>

          <div className="bg-[#F5F5F5] w-full px-5 py-5 flex items-center justify-center">
            <img
              src={updatedProduct.images[0]}
              alt=""
              className="h-[400px] w-[400px]  "
            />
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <h1 className="text-3xl">{updatedProduct && updatedProduct.title}</h1>

          <div className="mb-8">
            <div className="greyColorText font-bold flex items-center space-x-3 mt-2">
              <div className="flex items-center gap-3 text-sm ">
                <StarRatings
                  rating={Math.floor(Math.random() * 5) + 1}
                  starRatedColor="#FFAD33"
                  numberOfStars={5}
                  name="rating"
                  starDimension="14px"
                  starSpacing="5px"
                />
              </div>
              <span>({updatedProduct.ratingCount} Reviews) | </span>
              <span className="text-[#00FF66]">{"In Stock"}</span>
            </div>
            <h1 className="mt-4 mb-5 text-xl md:text-2xl">
              ${updatedProduct.price}
            </h1>
            <p className="text-sm md:text-base ">
              {updatedProduct.description}
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
      <RelatedProducts categoryId={product.category.id} />
    </div>
  );
};

export default ProductDetails;
