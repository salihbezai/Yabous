import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
      <div className="flex gap-5 mt-15 ">
        <div>
          <div className="flex-col">
            <div className="bg-[#F5F5F5] px-2 py-2">
              <img src="/images/controller.png" alt="" className="w-20 h-20" />
            </div>
            <div className="bg-[#F5F5F5] px-2 py-2">
              <img src="/images/controller.png" alt="" className="w-20 h-20" />
            </div>
            <div className="bg-[#F5F5F5] px-2 py-2">
              <img src="/images/controller.png" alt="" className="w-20 h-20" />
            </div>
            <div className="bg-[#F5F5F5] px-2 py-2">
              <img src="/images/controller.png" alt="" className="w-20 h-20" />
            </div>
          </div>
        </div>
        <div className="flex  gap-5">
          <div className="bg-[#F5F5F5] w-full px-5 py-5">
            <img src="/images/controller.png" alt="" className="h-100 w-100" />
          </div>
          <div className="w-full flex flex-col">
            <h1>Havic HV G-92 Gamepad</h1>
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
            <div className="mb-8">
              <p className="greyColorText font-bold flex items-center">
                (150 Reviews) |{" "}
                <span className="text-[#00FF66]">{"In Stock"}</span>
              </p>
              <h1 className="mt-5 mb-5">$192.00</h1>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <hr className="font-light opacity-50" />
            <div>
              <div>
                <div className="flex items-center gap-5">
                  <div>Colours:</div>

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
                <FormControl>
                  <FormLabel>Size:</FormLabel>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
