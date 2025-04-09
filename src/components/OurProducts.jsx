import { MdOutlineRemoveRedEye } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { HeartIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productActions.js";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productsa = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      img: "/images/71RdoeXxtrL 1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "GCANON EOS DSLR Camera",
      price: "$360",
      img: "/images/eos-250d-03-500x500 1.png",
      isNew: false,
    },
    {
      id: 3,
      name: "ideapad-gaming-3i-01-500x500 1",
      price: "$700",
      img: "/images/ideapad-gaming-3i-01-500x500 1.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Curology Product Set ",
      price: "$500",
      img: "/images/curology-j7pKVQrTUsM-unsplash 1.png",
      isNew: false,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      img: "/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
      isNew: true,
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1150",
      img: "/images/Copa_Sense 1.png",
      isNew: false,
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      img: "/images/GP11_PRD3 1.png",
      isNew: true,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      img: "/images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
      isNew: false,
    },
  ];

  if (loading) return <p>Loading...</p>;
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
  md:grid-cols-3 lg:grid-cols-4 w-full gap-8"
          >
            {products?.slice(0, 8).map((product) => (
              <div key={product.id} className="relative">
                <div
                  className="relative flex items-center flex-col justify-center   shadow-md 
            rounded-md bg-color-bg-3 cursor-pointer min-w-[300px] max-w-[310px] min-h-[320px] max-h-[420px] sm:min-w-[300px] sm:max-w-[320px] sm:min-h-[350px] sm:max-h-[420px]
             md:min-w-[200px] md:max-w-[230px] md:min-h-[250px] md:max-h-[280px]"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className=" w-70 h-70 sm:w-70 sm:h-70  md:w-40 md:h-40  lg:w-40 lg:h-40 object-contain hover:scale-120 transition-all  ease-in-out"
                  />

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
                <div className="w-[250px] py-3">
                  <p
                    className="font-bold text-base text-black
                   sm:text-sm md:text-base lg:text-base  xl:text-[14px]"
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
