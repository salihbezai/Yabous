import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="store-container">
      <div className="">
        <div className="flex items-center gap-3 mt-10">
          <div className="text-gray-600">Home</div>
          <div>/</div>
          <div className="text-gray-600 font-bold">404 Error</div>
        </div>
        <div className="flex flex-col items-center gap-15 py-15">
          <div>
            <h1 className="text-5xl md:text-8xl text-center ">404 Not Found</h1>
          </div>

          <div>
            <p className="text-xl text-center">
              Your visited page not found. You may go home page.
            </p>
          </div>
          <div className="w-full flex justify-center mt-2 mb-2">
            <Link to="/">
              <button className="button-theme secondaryColorBg shadow-gray-400 text-slate-100 py-1.5">
                Back to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
