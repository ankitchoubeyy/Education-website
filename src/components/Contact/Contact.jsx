import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

function Contact() {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2708749e-ded1-4492-959f-352a3479b870");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="myContact my-14 md:my-20 mx-auto max-w-[90%] flex flex-col sm:flex-row items-center space-between">
      <div className="contact-col basis-[48%] text-[#676767]">
        <h3 className="text-[#000F38] font-semibold text-2xl md:text-3xl flex items-center mb-3">
          Get in Touch <img src={msg_icon} alt="" className="w-[30px] md:w-[35px] ml-3" />
        </h3>
        <p className="max-w-[450px] text-justify leading-6">
          Fill out the form and we will get back to you within 24 hours. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magni, architecto.
        </p>
        <ul>
          <li className="flex items-center my-5">
            <img src={mail_icon} alt="" className="w-[25px] mr-3" />
            Contact@gmail.com
          </li>
          <li className="flex items-center my-5">
            <img src={phone_icon} alt="" className="w-[25px] mr-3" />
            123-456-7890
          </li>
          <li className="flex items-center my-5">
            <img src={location_icon} alt="" className="w-[25px] mr-3" />
            Sector 49 Noida, <br />
            Uttar Pradesh, India
          </li>
        </ul>
      </div>

      <div className="contact-col md:basis-[48%]">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name required"
            className="md:block w-[100%] bg-[#EBECFE] p-4 border-0 outline-0 mb-3 mt-1 resize-none rounded"
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="md:block w-[100%] bg-[#EBECFE] p-4 border-0 outline-0 mb-3 mt-1 resize-none rounded"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            className="md:block w-[100%] bg-[#EBECFE] p-4 border-0 outline-0 mb-3 mt-1 resize-none rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-[#212EA0] text-white px-5 py-2 mt-2 flex items-center rounded-lg"
          >
            Submit now{" "}
            <img src={white_arrow} alt="" className="w-[20px] ml-3" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
