import React from "react";
import logo from "../src/assets/Group2.png";
import imgg from "../src/assets/Ellipse1.png";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between ">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden  lg:flex items-center gap-5 text-[#292929] text-[22px] font-500">
          <Link to="/new-task">New Task</Link>
          <Link to="/my-task">All Tasks</Link>
          <img src={imgg} alt="profile" className="block" />
        </div>
        {!isOpen ? (
          <BiMenu
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer"
          />
        ) : (
          <IoClose
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer"
          />
        )}
        {isOpen && (
          <div className="absolute flex flex-col top-[93px] right-0 bg-white p-4 rounded-lg shadow-lg">
            <img
              src={imgg}
              alt="profile"
              className="w-[30px] h-[30px] mx-auto"
            />
            <Link to="/new-task">New Task</Link>
            <Link to="/my-task">All Tasks</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
