import React from "react";
import "./Title.css";

function Title({ title, subTitle }) {
  return (
    <div className="text-center md:my-8">
      <p className="text-2xl font-bold uppercase mt-3 md:mt-4 mb-2 text-[#212EA0]">
        {subTitle}
      </p>
      <h2 className="text-3xl font-bold normal-case mt-1 text-[#000F38]">
        {title}
      </h2>
    </div>
  );
}

export default Title;
