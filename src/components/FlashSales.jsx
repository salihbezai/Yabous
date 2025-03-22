import React from "react";
import SectionTitle from "./SectionTitle";
import CarouselFlashSales from "./CarouselFlashSales";

const FlashSales = () => {
  return (
    <div className="py-5 mt-30">
      <SectionTitle title={"Today’s"} />
      <div className="store-container flex items-center gap-3">
        <h1 className="text-3xl font-bold mr-10">Flash Sales</h1>
        <div className="flex items-center">
          <div className="flex  items-center gap-2">
            <div className="">
              <span className="text-[10px] font-bold">Days</span>
              <div className="">
                <h1 className="text-xl font-bold">03</h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText rounded">:</div>
            <div>
              <span className="text-[10px] font-bold">Hours</span>
              <div className="">
                <h1 className="text-xl font-bold">23</h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText rounded">:</div>
            <div>
              <span className="text-[10px] font-bold">Minutes</span>
              <div className="">
                <h1 className="text-xl font-bold">19</h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText rounded">:</div>
            <div>
              <span className="text-[10px] font-bold">Seconds</span>
              <div className="">
                <h1 className="text-xl font-bold">56</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselFlashSales />
      <div className="w-full flex justify-center mt-2 mb-2">
        <button className="button-theme secondaryColorBg shadow-gray-400 text-slate-100 py-1.5">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
