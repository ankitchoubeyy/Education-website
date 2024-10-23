import React from "react";

function Button({ btnUrl, btnTitle, bgColor = "white", textColor = "black" }) {
  return (
    <>
      <button
        className={`py-2 px-5 text-lg border-0 outline-0 rounded-[30px]`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <a href={btnUrl}>{btnTitle}</a>
      </button>
    </>
  );
}

export default Button;
