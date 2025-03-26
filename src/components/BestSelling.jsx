import { MdOutlineRemoveRedEye } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { HeartIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: "$120",
      img: "/images/Frame 605.png",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "$960",
      img: "/images/Frame 606.png",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "$370",
      img: "/images/Frame 610.png",
    },
    {
      id: 4,
      name: "Frame 612",
      price: "$375",
      img: "/images/Frame 612.png",
    },
  ];

  const changeRating = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="py-5 mt-15">
      <SectionTitle title={"This Month"} />
      <div>
        <div className="store-container">
          <div className="flex flex-col  sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl  font-bold  mr-5 md:mr-10 lg:mr-10">
              Best Selling Products
            </h1>
            <button
              className="button-theme mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 shadow-gray-400
               text-slate-100 bg-[#DB4444] rounded py-1.5"
            >
              View All
            </button>
          </div>

          <div
            className="py-[100px] place-items-center grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 lg:grid-cols-4 w-full gap-8"
          >
            {products.map((product) => (
              <div key={product.id} className="">
                <div
                  className="relative flex items-center flex-col justify-center   shadow-md 
            rounded-md bg-color-bg-3 cursor-pointer  min-w-[200px] max-w-[230px] min-h-[250px] max-h-[280px]"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-40 h-40 object-contain hover:scale-120 transition-all  ease-in-out"
                  />

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
                    className="font-bold text-base
                   text-black sm:text-sm md:text-base lg:text-base  xl:text-base"
                  >
                    {product.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="secondaryColorText font-bold">
                      {product.price}
                    </p>
                    <p className="greyColorText line-through font-bold">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <StarRatings
                      rating={5}
                      starRatedColor="#FFAD33"
                      changeRating={changeRating}
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

export default BestSelling;
