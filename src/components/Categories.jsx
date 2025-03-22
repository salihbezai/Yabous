import React from "react";
import SectionTitle from "./SectionTitle";
import CarouselCategories from "./CarouselCategories";

const Categories = () => {
  return (
    <div className="py-5 mt-15">
      <SectionTitle title={"Categories"} />
      <div>
        <div className="store-container">
          <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl  font-bold  mr-5 md:mr-10 lg:mr-10">
            Browse By Category
          </h1>
        </div>
        <CarouselCategories />
      </div>
    </div>
  );
};

export default Categories;
