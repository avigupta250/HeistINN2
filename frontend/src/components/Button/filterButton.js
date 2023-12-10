
import React from "react";
// import { Link } from "react-router-dom";

const filterButton = () => {
  return (
    <a href={linkto}>
      <div
        className={`text-center flex p-3 text-[13px] sm:text-[16px] px-6 py- rounded-full h-[30px] border-gray-300 border-[1px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-gray-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </a>
  );
};

export default filterButton;
