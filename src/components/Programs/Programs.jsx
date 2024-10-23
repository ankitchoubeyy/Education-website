import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";

function Programs() {
  return <div className="myPrograms flex flex-col md:flex-row md:w-[90%] my-10 mx-auto items-center justify-between">
    <div className="myProgram  ">
      <img src={program1} alt="" />
      <div className="myCaption">
        <img src={programIcon1} alt="" />
        <p>Graduation Degree</p>
      </div>
    </div>
    <div className="myProgram">
      <img src={program2} alt="" />
      <div className="myCaption">
        <img src={programIcon2} alt="" />
        <p>Master Degree</p>
      </div>
    </div>
    <div className="myProgram">
      <img src={program3} alt="" />
      <div className="myCaption">
        <img src={programIcon3} alt="" />
        <p>Post Graduation</p>
      </div>
    </div>
  </div>;
}

export default Programs;
