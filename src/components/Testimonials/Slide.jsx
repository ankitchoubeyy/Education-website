import React from "react";
import "./Slide.css";

function Slide({ slideImg, slideName, slideJob, slideDesc }) {
  return (
    <li className="list-none w-[50%] md:p-5">
      <div className="mySlide">
        <div className="flex justify-between items-center mb-5 text-[15px]">
          <img
            src={slideImg}
            alt=""
            className="w-[50px] md:w-16 rounded-[50%] mr-2.5 border-2 md:border-4 border-[#212ea0]"
          />
          <div className="">
            <h3 className="mb-1 text-[10px] md:text-[20px]">{slideName}</h3>
            <span>{slideJob}</span>
          </div>
        </div>
        <p className="text-justify text-[10px] md:text-[15px]">{slideDesc}</p>
      </div>
    </li>
  );
}

export default Slide;
