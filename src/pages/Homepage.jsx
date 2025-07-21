import React from "react";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import bro from "../assets/bro.png";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redirect = useNavigate();

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden  lg:flex items-center gap-5 text-[#292929] text-[22px] font-500">
          <Link
            to="/login"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </Link>
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
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        )}
      </nav>
      <div className="container flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="max-w-[470px] w-full text-[25px] md:text-[35px] lg:text-[50px] font-[500] text-[#292929]">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0] ">TaskDuty</span>
          </h1>
          <p className="text-[16px] md:text-[24px] text-[#737171] max-w-[535px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>

          <button
            onClick={() => redirect("/login")}
            className="text-[#FAF9FB] bg-[#974FD0] text-[24px] w-[220px] h-[50px] cursor-pointer rounded-[8px]  "
          >
            Go to My Tasks
          </button>
        </div>

        <div>
          <img src={bro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
