import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const Checkout = () => {
  const [selectedValue, setSelectedValue] = useState("credit");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const cart = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      quantity: 1,
      price: 120,
      discount: "-40%",
      img: "/images/controller.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      quantity: 1,
      price: 960,
      discount: "-35%",
      img: "/images/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      quantity: 1,
      price: 300,
      discount: "-30%",
      img: "/images/monitor.png",
    },
  ];
  return (
    <div className="store-container">
      <div className="flex items-center gap-3">
        <div className="text-gray-600">Account</div>
        <div>/</div>
        <div className="text-gray-600">My Account</div>
        <div className="text-gray-600">Product</div>
        <div>/</div>
        <div className="text-gray-600">View Cart</div>
        <div>/</div>
        <div>CheckOut</div>
      </div>
      <div>
        <h1 className="text-xl mt-8 mb-8">Billing Details</h1>
      </div>
      <div className="flex items-center gap-5 py-5 flex-col md:flex-col lg:flex-row">
        <div className="w-full md:w-full lg:w-1/2 xl:W-1/2">
          <div>
            <div className="flex flex-col">
              <label for="first-name" className="greyColorText">
                First Name*
              </label>
              <input
                id="first-name"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="company-name" className="greyColorText">
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="street-address" className="greyColorText">
                Street Address*
              </label>
              <input
                id="street-address"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="appartment" className="greyColorText">
                Apartment, floor, etc. (optional)
              </label>
              <input
                id="appartment"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="town" className="greyColorText">
                Town/City*
              </label>
              <input
                id="town"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="phone-number" className="greyColorText">
                Phone Number*
              </label>
              <input
                id="phone-number"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <label for="email" className="greyColorText">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-[80%] mt-5 mb-3"
              />
            </div>
            <div className="flex items-center">
              <Checkbox></Checkbox>
              <p>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-1/2 xl:W-1/2 gap-8 ">
          <div className="flex items-center flex-col">
            {cart?.map((item, index) => (
              <div className="w-full flex items-center justify-between  bg-white rounded-md mt-5">
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="" className="w-10 h-10" />
                  <div>{item.name}</div>
                </div>
                <div>{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>subtotal:</div>
              <div>{1000}$</div>
            </div>
            <hr className="font-light opacity-16" />
            <div className="flex items-center justify-between">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <hr className="font-light opacity-16" />
            <div className="flex items-center justify-between">
              <div>Total:</div>
              <div>1000$</div>
            </div>
          </div>
          <div>
            <div>
              <FormControl className="w-full">
                <RadioGroup value={selectedValue} onChange={handleChange}>
                  <div className="flex items-start flex-col md:flex-col md:items-start lg:flex-row lg:items-center lg:justify-between w-full gap-2">
                    <FormControlLabel
                      value="Bank"
                      control={<Radio />}
                      label="Bank"
                    />
                    <div className="flex items-center gap-2">
                      <img src="/images/Bkash.png" alt="" />
                      <img src="/images/Visa.png" alt="" />
                      <img src="/images/Mastercard.png" alt="" />
                      <img src="/images/Nagad.png" alt="" />
                    </div>
                  </div>
                  <FormControlLabel
                    value="Cash on delivery"
                    control={<Radio />}
                    label="Cash on delivery"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3 mt-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="text-black sm:text-sm md:text-base lg:text-base xl:text-lg
               border-1 shadow-md outline-none bg-white px-3 py-2 rounded text-sm mr-4 w-full sm:w-full md:w-60  lg:w-60 xl:w-60 "
              />
              <div className="flex items-center justify-start sm:justify-start md:justify-start lg:justify-center xl:justify-center">
                <button className="button-theme secondaryColorBg text-white py-3  w-60   ">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="flex items-center mt-5 justify-center sm:justify-center md:justify-start">
              <button className="button-theme secondaryColorBg text-white py-3  w-60   ">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
