import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Slide from "./Slide";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  /**
   * Shifts the testimonial slider 25% to the left (backwards).
   * If the slider is already at the start, it does nothing.
   */
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className="myTestimonials my-10 md:my-20 mx-auto px-5 md:px-20 relative">
      {/* <h1>Hello</h1> */}
      <img
        src={next_icon}
        alt=""
        className="myNextBtn bg-[#212ea0] transition delay-100"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="myBackBtn bg-[#212ea0] transition delay-500"
        onClick={slideBackward}
      />
      <div className="mySlider overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] overflow-x-hidden transition delay-500"
        >
          <Slide
            slideImg={user_1}
            slideName="Jimmy Doe"
            slideJob="Web Devloper"
            slideDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Slide
            slideImg={user_2}
            slideName="John Doe"
            slideJob="Web Devloper"
            slideDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Slide
            slideImg={user_3}
            slideName="John Doe"
            slideJob="Web Devloper"
            slideDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Slide
            slideImg={user_4}
            slideName="John Doe"
            slideJob="Web Devloper"
            slideDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
