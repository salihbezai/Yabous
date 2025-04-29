import { MdOutlineRemoveRedEye } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import { TrashIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  loadFavorites,
  removeFromWishList,
} from "../features/products/productActions";
import { Link } from "react-router-dom";
import { setAddItemToCart } from "../features/cart/cartSlice";

const Wishlist = () => {
  const { favorites, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [wishlistItems, setWishlistItems] = useState(favorites);

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      discount: "-40%",
      img: "/images/controller.png",
      isNew: false,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      discount: "",
      img: "/images/keyboard.png",
      isNew: false,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      discount: "",
      img: "/images/monitor.png",
      isNew: true,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "",
      img: "/images/chair.png",
      isNew: false,
    },
  ];

  useEffect(() => {
    // Sync wishlist items with the Redux state when favorites change
    setWishlistItems(favorites);
    console.log("changed " + favorites);
  }, [favorites]);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);
  const removeProductFromFavorites = (product) => {
    dispatch(removeFromWishList(product));
  };

  const onAddToCart = (product) => {
    dispatch(setAddItemToCart(product));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="">
      <div className="">
        <div className="store-container flex items-center justify-between py-3">
          <p className="text-xl">
            wishlist{`(${favorites ? favorites.length : 0})`}
          </p>
          <button className="button-theme bg-white shadow-gray-400 text-black py-1.5 border-1 border-black">
            Move All To Bag
          </button>
        </div>
        {wishlistItems.length > 0 ? (
          <div
            className="store-container py-[20px] place-items-center grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4  gap-8"
          >
            {wishlistItems?.map((product, index) => (
              <div key={index}>
                <div
                  className="relative flex items-center flex-col justify-end w-[250px] h-[250px] md:w-[230px] shadow-md 
                    rounded-md bg-color-bg-3 cursor-pointer "
                >
                  <Link
                    key={product.id}
                    className=""
                    to={`/product/${product.id}`}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
                    />
                  </Link>

                  {/* {product.discount.trim() !== "" ? (
                    <span className="bg-color-bg-2 text-white px-2 rounded  text-sm absolute top-3 left-1">
                      {product.price}
                    </span>
                  ) : null} */}

                  <div className="absolute top-3  right-0 flex flex-col gap-3">
                    <div className="bg-white px-1 py-1 rounded-full">
                      <TrashIcon
                        className="icon-style text-black"
                        onClick={() => removeProductFromFavorites(product)}
                      />
                    </div>
                  </div>

                  <button
                    className="button-theme shadow-gray-400
                       text-slate-100 bg-color-bg-1 w-full rounded 
                       py-1.5 flex items-center justify-center gap-3"
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingCart className="icon-style text-white" />
                    Add To Cart
                  </button>
                </div>
                <div className="w-[250px] py-3">
                  <p
                    className="font-bold text-base
                       text-black sm:text-sm md:text-base lg:text-base  xl:text-base h-[48px]"
                  >
                    <Link
                      key={product.id}
                      className=""
                      to={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="secondaryColorText font-bold">
                      $ {product.price}
                    </p>
                    {/* {product.discount.trim() !== "" ? (
                      <p className="greyColorText line-through font-bold">
                        {product.price}
                      </p>
                    ) : null} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="store-container text-gray-500 py-10 text-center">
            Your wishlist is empty.
          </p>
        )}

        {/* just for you  */}
        <div className="py-5">
          <div className="store-container flex items-center justify-between py-3">
            <p className="flex items-center gap-3">
              <div className="w-4 h-8 secondaryColorBg rounded"></div>
              <div>
                <h4 className="text-base text-black font-bold">just for you</h4>
              </div>
            </p>
            <button
              className="button-theme bg-white shadow-gray-400
             text-black py-1.5 border-1 border-black "
            >
              See All
            </button>
          </div>

          <div
            className="store-container py-[20px] place-items-center grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 lg:grid-cols-4  gap-8"
          >
            {products?.map((product, index) => (
              <div key={index}>
                <div
                  className="relative flex items-center flex-col justify-end w-[250px] h-[250px] md:w-[230px] shadow-md 
                  rounded-md bg-color-bg-3 cursor-pointer "
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
                  />
                  {product.isNew ? (
                    <span className="bg-color-bg-4 text-white px-2 rounded  text-sm absolute top-3 left-1">
                      {"New"}
                    </span>
                  ) : null}
                  {product.discount.trim() !== "" ? (
                    <span className="bg-color-bg-2 text-white px-2 rounded  text-sm absolute top-3 left-1">
                      {product.price}
                    </span>
                  ) : null}

                  <div className="absolute top-3  right-0 flex flex-col gap-3">
                    <div className="bg-white px-1 py-1 rounded-full">
                      <MdOutlineRemoveRedEye className="icon-style text-black" />
                    </div>
                  </div>

                  <button
                    className="button-theme shadow-gray-400
                     text-slate-100 bg-color-bg-1 w-full rounded py-1.5 flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="icon-style text-white" />
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
                  <div className="flex items-center gap-3 text-sm">
                    <StarRatings
                      rating={5}
                      starRatedColor="#FFAD33"
                      numberOfStars={5}
                      name="rating"
                      starDimension="14px"
                      starSpacing="5px"
                    />
                    <p className="greyColorText font-bold">(88)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
