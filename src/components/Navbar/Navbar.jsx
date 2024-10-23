import React, { useEffect } from "react";
import "./Navbar.css";
import "../../index.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import Button from "../Utilities/Button";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = React.useState(false);
  function toggleMenu () {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav
      className={`myContainer ${
        sticky ? "darkNav" : ""
      } w-full text-white flex justify-between items-center fixed top-0 left-0 py-5 z-10`}
    >
      <img src={logo} alt="logo" className="w-[140px] md:w-[180px] px-3" />
      <ul className={`md:flex gap-16  justify-center font-primary items-center md:px-5 ${mobileMenu ? '' : 'hide-mobile-menu'}` }>
        <li>
          <Link to="myHero" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="myPrograms" spy={true} smooth={true} offset={-230} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="myAbout" spy={true} smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="myInstitute" spy={true} smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="myTestimonials"
            spy={true}
            smooth={true}
            offset={-280}
            duration={500}
          >
            Our Students
          </Link>
        </li>
        <li className="">
        <Link
            to="myContact"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
        >
          <Button btnTitle="Contact" btnUrl="#" />
          </Link>
        </li>
      </ul>
      <img src={menu_icon} onClick={toggleMenu} alt="" className="sm:hidden cursor-pointer w-[40px]" />
    </nav>
  );
}

export default Navbar;
