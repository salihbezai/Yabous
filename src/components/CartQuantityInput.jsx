import React, { useState } from "react";

const CartQuantityInput = ({ value, onChange }) => {
  const [quantity, setQuantity] = useState(value);
  const increase = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onChange(newValue);
  };

  const decrease = () => {
    const newValue = Math.max(quantity - 1, 1);
    setQuantity(newValue);
    onChange(newValue);
  };
  return (
    <div className="flex items-center border rounded px-3 py-1 w-20 gap-3">
      <span className="text-lg font-medium">
        {String(quantity).padStart(2, "0")}
      </span>
      <div className="flex flex-col ml-2">
        <button className="text-xs cursor-pointer" onClick={increase}>
          ▲
        </button>
        <button className="text-xs cursor-pointer" onClick={decrease}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default CartQuantityInput;
