import React from "react";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import back from "../assets/back.png";
import down from "../assets/down.png";

const NewTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const redirect = useNavigate();

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden  lg:flex items-center gap-7 text-[#292929] text-[22px] font-500">
          <Link to="/my-task">All Task</Link>

          <img src={imgg} alt="profile" className="block" />
        </div>
        {!isOpen ? (
          <BiMenu
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          />
        ) : (
          <IoClose
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          />
        )}
        {isOpen && (
          <div className="absolute flex flex-col top-[93px] right-0 bg-white p-4 rounded-lg shadow-lg">
            <img
              src={imgg}
              alt="profile"
              className="w-[30px] h-[30px] mx-auto"
            />
            <Link to="/my-task">All Task</Link>
          </div>
        )}
      </nav>
      <div className="container">
        <div className="flex gap-3 mt-2 items-center font-[500] text-[20px] text-[#292929] md:text-[35px] lg:text-[45px]">
          <img
            src={back}
            alt=""
            className="w-[10px] md:w-[20px] h-[20px] md:h-[30px] cursor-pointer"
            onClick={() => redirect("/my-task")}
          />
          <h1>New Task</h1>
        </div>

        <form>
          {/* Input with integrated fieldset */}
          <div className="relative mt-5">
            <fieldset className="border-[#B8B6B6] border h-[84px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[600] text-[#9C9C9C]">
                Task Title
              </legend>
              <input
                type="text"
                placeholder="E.g Project Defense, Assignment ..."
                className="w-full h-full p-10 border-none focus:ring-0 absolute top-0 left-0 bg-transparent outline-none"
              />
            </fieldset>
          </div>

          {/* Textarea with integrated fieldset */}
          <div className="relative my-5">
            <fieldset className="border-[#B8B6B6] border h-[244px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[600] text-[#9C9C9C]">
                Description
              </legend>
              <textarea
                className="w-full h-full p-10 pb-2 border-none outline-none focus:ring-0 absolute top-0 left-0 bg-transparent resize-none"
                placeholder="Briefly describe your task..."
              ></textarea>
            </fieldset>
          </div>

          {/* Select with integrated fieldset */}
          <div className="relative mb-30">
            <fieldset className="border-[#B8B6B6] border h-[84px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[400] text-[#9C9C9C]">
                Tag
              </legend>
              <select
                defaultValue="select Tag"
                className="w-full h-full pl-[40px] pr-10 outline-none border-none focus:ring-0 absolute top-0 left-0 appearance-none bg-transparent"
              >
                <option disabled={true}>Select Tag</option>
                <option
                  value="urgent"
                  className="font-[400] text-[20px] md:text-[22px] text-[#CCCCCC] rounded-[3px]"
                >
                  Urgent
                </option>
                <option
                  value="important"
                  className="font-[400] text-[20px] md:text-[22px] text-[#CCCCCC] rounded-[3px]"
                >
                  Important
                </option>
              </select>
              <img src={down} alt="" className="absolute top-[40px] right-5" />
            </fieldset>
          </div>
          <button
            className="bg-[#974FD0] w-full rounded-[8px] h-[84px] text-[#FAF9FB] font-medium text-[25px] md:text-[35px]"
            onClick={() => {
              redirect("/my-task");
              scrollTo(0, 0);
            }}
          >
            Done
          </button>
        </form>
        <button
          onClick={() => {
            redirect("/new-task");
            scrollTo(0, 0);
          }}
          className="w-[128px] h-[32px] font-[400] text-[20px] md:[30px] underline text-[#974FD0] mt-[20px] mx-auto block cursor-pointer"
        >
          Back To Top
        </button>
      </div>
    </div>
  );
};

export default NewTask;
