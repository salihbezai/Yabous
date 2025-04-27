import { Link } from "react-router-dom";
import CartQuantityInput from "../components/CartQuantityInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals } from "../features/cart/cartSlice";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

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
                <img src={item.images[0]} alt="" className="w-10 h-10" />
                <div>{item.title}</div>
              </div>
              <div>{item.price}</div>
              <CartQuantityInput item={item} />
              <div>{item.price * item.cartQuantity}</div>
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
               border-1 shadow-md outline-none bg-white px-3 py-2 rounded text-sm mr-4 w-full sm:w-full md:w-60  lg:w-60 xl:w-60 "
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
              <div>{cartTotalAmount}$</div>
            </div>
            <hr className="font-light opacity-16" />
            <div className="flex items-center justify-between">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <hr className="font-light opacity-16" />
            <div className="flex items-center justify-between">
              <div>Total:</div>
              <div>{cartTotalAmount}$</div>
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
