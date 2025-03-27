import { MdOutlineRemoveRedEye } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { HeartIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";

const Featured = () => {
  const changeRating = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="py-5 mt-15">
      <SectionTitle title={"Featured"} />
      <div className="">
        <div className="store-container">
          <div className="flex flex-col  sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl  font-bold  mr-5 md:mr-10 lg:mr-10">
              New Arrival
            </h1>
          </div>
          <div className="py-[100px] grid-cols-1 grid md:grid-cols-2 gap-5">
            <div className="row-span-2 bg-color-bg-1 flex justify-end items-center relative overflow-hidden">
              <img
                src="/images/ps5-slim-goedkope-playstation_large 1.png"
                alt="image/Featured"
                className="object-contain"
              />
              <div className="w-full absolute bottom-10 flex flex-col gap-3 left-5">
                <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                  PlayStation 5
                </h1>
                <p className="text-white w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="w-fit text-white font-bold border-b-2 border-[#FAFAFA] cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end relative overflow-hidden">
              <img
                src="/images/attractive-woman-wearing-hat-posing-black-background 1.png"
                alt="image/Featured"
                className="w-full object-contain "
              />
              <div className="w-full absolute bottom-10 flex flex-col gap-3 left-5">
                <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                  Women’s Collections
                </h1>
                <p className="text-white w-[250px]">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="w-fit text-white font-bold border-b-2 border-[#FAFAFA] cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full h-full bg-color-bg-1 flex items-center justify-center px-5 py-10 relative overflow-hidden">
                <img
                  src="/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                  alt="image/Featured"
                  className="w-[200px] h-[200px] object-contain "
                />
                <div className="w-full absolute bottom-10 flex flex-col gap-3 left-5">
                  <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                    Speakers
                  </h1>
                  <p className="text-white w-[250px] md:w-[120px] ">
                    Amazon wireless speakers
                  </p>
                  <button className="w-fit text-white font-bold border-b-2 border-[#FAFAFA] cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-full h-full bg-color-bg-1 flex items-center justify-center px-5 py-10 relative overflow-hidden">
                <img
                  src="/images/652e82cd70aa6522dd785109a455904c.png"
                  alt="image/Featured"
                  className="w-[200px] h-[200px] object-contain  "
                />
                <div className="w-full absolute bottom-10 flex flex-col gap-3 left-5">
                  <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                    Perfume
                  </h1>
                  <p className="text-white w-[250px] md:w-[120px] ">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="w-fit text-white font-bold border-b-2 border-[#FAFAFA] cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
