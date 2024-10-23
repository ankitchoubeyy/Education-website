import React from "react";
import "./Hero.css";
import Button from "../Utilities/Button";

function Hero() {
  return (
    <div className="myHero myContainer text-center flex items-center justify-center">
      <div className="max-w-[800px]">
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold">
          We ensure best <span className="text-yellow-500">education</span> for
          your children
        </h1>
        <p className=" text-center my-5 leading-8 text-[18px]">
          Our Instititue is deducatedly and continously working with your
          children to full fill their goals.
        </p>
        <Button btnTitle="Explore more" btnUrl="#" />
      </div>
    </div>
  );
}

export default Hero;
