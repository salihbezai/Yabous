import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="store-container flex items-center gap-3 py-1">
      <div className="w-4 h-8 secondaryColorBg rounded"></div>
      <div>
        <h4 className="secondaryColorText font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default SectionTitle;
