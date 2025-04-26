import { MdOutlineRemoveRedEye } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { HeartIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productActions.js";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>No Products Found !</p>;
  return (
    <div className="py-5 mt-15">
      <SectionTitle title={"Our Products"} />
      <div>
        <div className="store-container">
          <div className="flex flex-col  sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl  font-bold  mr-5 md:mr-10 lg:mr-10">
              Explore Our Products
            </h1>
          </div>

          <div
            className="py-[100px] place-items-center grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 lg:grid-cols-4 w-full gap-10"
          >
            {products?.slice(0, 8).map((product) => (
              <div key={product.id} className="relative">
                <div
                  className="relative flex items-center flex-col justify-center   shadow-md 
            rounded-md bg-color-bg-3 cursor-pointer min-w-[300px] max-w-[310px] min-h-[320px] max-h-[420px] sm:min-w-[300px] sm:max-w-[320px] sm:min-h-[350px] sm:max-h-[420px]
             md:min-w-[200px] md:max-w-[230px] md:min-h-[250px] md:max-h-[280px]"
                >
                  <Link
                    key={product.id}
                    className=""
                    to={`/product/${product.id}`}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className=" w-70 h-70 sm:w-70 sm:h-70 
                     md:w-40 md:h-40  lg:w-40 lg:h-40 object-contain
                      hover:scale-110 transition-all  ease-in-out"
                    />
                  </Link>

                  {/* {product.isNew ? (
                    <span className="bg-color-bg-4 text-white px-2 rounded  text-sm absolute top-3 left-1">
                      {"New"}
                    </span>
                  ) : null} */}
                  <div className="absolute top-3  right-0 flex flex-col gap-3">
                    <div className="bg-white px-1 py-1 rounded-full">
                      <HeartIcon className="icon-style text-black" />
                    </div>
                    <div className="bg-white px-1 py-1 rounded-full">
                      <MdOutlineRemoveRedEye className="icon-style text-black" />
                    </div>
                  </div>
                </div>
                <Link
                  key={product.id}
                  className=""
                  to={`/product/${product.id}`}
                >
                  <div className="w-[250px] py-3">
                    <p
                      className="font-bold text-base text-black
                   sm:text-sm md:text-[14px]lg:text-[14px]xl:text-[14px]"
                    >
                      {product.title}
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="secondaryColorText font-bold">
                        {product.price + " $"}
                      </p>
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
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              className="button-theme mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 shadow-gray-400
               text-slate-100 bg-[#DB4444] rounded py-1.5"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
