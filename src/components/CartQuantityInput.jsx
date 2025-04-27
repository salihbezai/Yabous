import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
} from "../features/cart/cartSlice";
import React, { useEffect, useState } from "react";

const CartQuantityInput = ({ item }) => {
  const [quantity, setQuantity] = useState(item.cartQuantity);
  const dispatch = useDispatch();

  const increase = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
  };

  const onIncreaseItemQty = () => {
    dispatch(setIncreaseItemQTY(item));
    setQuantity(item.cartQuantity + 1);
  };

  const onDecreaseItemQty = () => {
    if (item.cartQuantity > 1) {
      dispatch(setDecreaseItemQTY(item));
      setQuantity(item.cartQuantity - 1);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex items-center border rounded px-3 py-1 w-20 gap-3">
      <span className="text-lg font-medium">
        {String(quantity).padStart(2, "0")}
      </span>
      <div className="flex flex-col ml-2">
        <button className="text-xs cursor-pointer" onClick={onIncreaseItemQty}>
          ▲
        </button>
        <button className="text-xs cursor-pointer" onClick={onDecreaseItemQty}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default CartQuantityInput;
