import React from "react";

const HeroCategories = () => {
  return (
    <div
      className="store-container bg-black flex gap-8
     flex-col items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row px-8 py-8"
    >
      <div className="flex  flex-col gap-14">
        <div>
          <p className="text-color-4">Categories</p>
        </div>
        <div className="text-4xl text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
          <h1>Enhance Your Music Experience</h1>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center bg-white rounded-full w-15 h-15 px-6 py-6">
            <span className="font-bold text-base">23</span>
            <span className="text-[12px]">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-full w-15 h-15 px-6 py-6">
            <span className="font-bold">05</span>
            <span className="text-[12px]">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-full w-15 h-15 px-6 py-6">
            <span className="font-bold">59</span>
            <span className="text-[12px]">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-full w-15 h-15 px-6 py-6">
            <span className="font-bold">35</span>
            <span className="text-[12px]">Seconds</span>
          </div>
        </div>
        <div>
          <button
            className="button-theme mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 shadow-gray-400
               text-slate-100 bg-[#00FF66] rounded py-1.5"
          >
            Buy Now!
          </button>
        </div>
      </div>
      <div className="">
        <img src="/images/heroCategoriesImage.png" alt="" />
      </div>
    </div>
  );
};

export default HeroCategories;
