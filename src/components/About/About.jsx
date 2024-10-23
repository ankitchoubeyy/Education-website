import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play from "../../assets/play-icon.png";

function About() {
  return (
    <div className="myAbout my-[100px] mx-auto flex flex-col md:flex-row items-center w-[90%] justify-between">
      {/* Title for mobile devices */}
      <h3 className="text-[20px] font-semibold text-[#212EA0] uppercase md:hidden ">
        About Institute
      </h3>
      <h2 className="text-[25px] text-center font-bold text-[#000F38] my-4 mx-0 max-w-[400px] md:hidden">
        Nurturing the talent of tomorrow
      </h2>
      <div className="myAboutLeft md:basis-[40%] relative mb-3 md:mb-0">
        <img src={about} alt="" className="myAboutImg" />
        <img src={play} alt="" className="myPlayIcon" />
      </div>
      <div className="myAboutRight md:basis-[56%]">
        <h3 className="text-[16px] font-semibold text-[#212EA0] hidden md:block ">
          About Institute
        </h3>
        <h2 className="text-[35px] font-bold text-[#000F38] my-2 mx-0 max-w-[400px] hidden md:block">
          Nurturing the talent of tomorrow
        </h2>
        <p className="text-[#676767] text-justify mb-[10px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          adipisci.
        </p>

        <p className="text-[#676767] text-justify mb-[10px] leading-6">
          Lorem ipsum dolor sit amet,Provident laboriosam tempora voluptates
          amet neque, dolorem vitae consequatur officia aspernatur dicta dolor
          nihil cumque repudiandae debitis quidem adipisci.
        </p>

        <p className="text-[#676767] text-justify mb-[10px] leading-6">
          Lorem ipsum dolor dicta assumenda? Provident laboriosam tempora
          voluptates amet neque, dolorem vitae consequatur officia aspernatur
          dicta dolor nihil cumque repudiandae debitis quidem adipisci.
        </p>
      </div>
    </div>
  );
}

export default About;
