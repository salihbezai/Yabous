import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StarRatings from "react-star-ratings";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      discount: "-40%",
      img: "/images/controller.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      discount: "",
      img: "/images/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      discount: "",
      img: "/images/monitor.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "",
      img: "/images/chair.png",
    },
  ];
  return (
    <div className="store-container">
      <div>
        <div className="flex items-center justify-between py-3">
          <p className="text-base">wishlist{`(${4})`}</p>
          <button className="button-theme secondaryColorBg shadow-gray-400 text-slate-100 py-1.5">
            View All Products
          </button>
        </div>
        <div
          className="py-[20px] place-items-center grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 lg:grid-cols-4 w-full gap-8"
        >
          {products?.map((product, index) => (
            <div key={index}>
              <div
                className="relative flex items-center flex-col justify-end w-[250px] h-[250px] shadow-md 
                  rounded-md bg-color-bg-3 cursor-pointer "
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
                />

                {product.discount.trim() !== "" ? (
                  <span className="bg-color-bg-2 text-white px-2 rounded  text-sm absolute top-3 left-1">
                    {product.price}
                  </span>
                ) : null}

                <div className="absolute top-3  right-0 flex flex-col gap-3">
                  <div className="bg-white px-1 py-1 rounded-full">
                    <TrashIcon className="icon-style text-black" />
                  </div>
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
                     text-black sm:text-sm md:text-base lg:text-base  xl:text-base"
                >
                  {product.name}
                </p>
                <div className="flex items-center gap-4">
                  <p className="secondaryColorText font-bold">
                    {product.price}
                  </p>
                  {product.discount.trim() !== "" ? (
                    <p className="greyColorText line-through font-bold">
                      {product.price}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
