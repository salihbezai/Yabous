import { Link } from "react-router-dom";
import CartQuantityInput from "../components/CartQuantityInput";
import { useState } from "react";

const Cart = () => {
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
  const [cartItems, setCartItems] = useState(cart);

  const updateQuantity = (id, newQte) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQte } : item
      )
    );
    console.log(cartItems);
  };

  return (
    <div className="store-container">
      <div className="flex items-center gap-3">
        <div className="text-gray-600">Home</div>
        <div>/</div>
        <div>Cart</div>
      </div>
      <div>
        <div className="flex items-center justify-between shadow-md p-4 bg-white rounded-md mt-10">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="mt-15">
          {cartItems?.map((item, index) => (
            <div className="flex items-center justify-between shadow-md p-4 bg-white rounded-md mt-5">
              <div className="flex items-center gap-3">
                <img src={item.img} alt="" className="w-10 h-10" />
                <div>{item.name}</div>
              </div>
              <div>{item.price}</div>
              <CartQuantityInput
                value={item.quantity}
                onChange={(newQte) => updateQuantity(item.id, newQte)}
              />
              <div>{item.price * item.quantity}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 mb-3 flex items-center justify-center ">
          <Link to="/">
            <button className="button-theme py-4 px-8 border-1">
              Return To Shop
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-between mt-20 mb-20">
        <div className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="text-black sm:text-sm md:text-base lg:text-base xl:text-lg
               border-1 shadow-md outline-none bg-white px-1 py-2 rounded text-sm mr-4 w-full sm:w-full md:w-60  lg:w-60 xl:w-60 "
          />
          <div className="flex items-center justify-center">
            <button className="button-theme secondaryColorBg text-white py-3  w-60   ">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 border-2 py-3 px-3">
          <div>
            <h1 className="text-base font-bold">Cart Total</h1>
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
          <div className="flex justify-center items-center">
            <button className="button-theme w-60 secondaryColorBg text-white py-3">
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
