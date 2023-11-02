import React from "react";
import { Link } from "react-scroll";
import { MdSportsGymnastics } from "react-icons/Md"; //icon import
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai"; //icon import

const Navbar = () => {
  return (
    <div className=" fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          {/*adding constraints and shading for header*/}
          <div className=" hover:text-brightColor transition-all gap-1  flex flex-row items-center cursor-pointer">
            <span>
              <MdSportsGymnastics size={32} />
              {/*  imported an icon from react icon library */}
            </span>
            <h1 className="text-xl font-semibold">Physio Labs</h1>
          </div>
          <span className=" md:hidden hover:text-brightColor">
            <AiOutlineMenu size={25} />
          </span>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {/* constraints for page buttons */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Book"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Book
            </Link>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="Reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Button title="Login" />
            {/* this button is a reused component */}
          </nav>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
