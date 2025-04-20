import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import CarouselFlashSales from "./CarouselFlashSales";

const FlashSales = () => {
  const targetDate = "2025-05-01T00:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      console.log("timeLeft", newTime); // this logs the current value correctly
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className="py-5 mt-30">
      <SectionTitle title={"Today’s"} />
      <div className="store-container flex gap-3 flex-col items-start sm:flex-col md:flex-row lg:flex-row">
        <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-bold mr-5 md:mr-10 lg:mr-10">
          Flash Sales
        </h1>
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            {/* Days */}
            <div>
              <span className="text-[10px] font-bold">Days</span>
              <div>
                <h1 className="text-xl font-bold">
                  {formatNumber(timeLeft.days)}
                </h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText">:</div>
            {/* Hours */}
            <div>
              <span className="text-[10px] font-bold">Hours</span>
              <div>
                <h1 className="text-xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText">:</div>
            {/* Minutes */}
            <div>
              <span className="text-[10px] font-bold">Minutes</span>
              <div>
                <h1 className="text-xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </h1>
              </div>
            </div>
            <div className="text-3xl secondaryColorText">:</div>
            {/* Seconds */}
            <div>
              <span className="text-[10px] font-bold">Seconds</span>
              <div>
                <h1 className="text-xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </h1>
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
