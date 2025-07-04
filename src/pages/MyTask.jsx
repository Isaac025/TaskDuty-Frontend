import React from "react";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import plus from "../assets/plus.png";
import task from "../../MyTask";
import editIcon from "../assets/edit.png";
import deletee from "../assets/delete.png";
import line from "../assets/line.png";

const MyTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const redirect = useNavigate();

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden  lg:flex items-center gap-5 text-[#292929] text-[22px] font-500">
          <Link to="/new-task">New Task</Link>

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
            <Link to="/new-task">New Task</Link>
          </div>
        )}
      </nav>
      <div className="container">
        <div className="flex flex-row justify-between items-center mb-3 md:mb-5">
          <h1 className="text-[#292929] font-[500] text-[25px] md:text-[35px] lg:text-[50px]">
            My Tasks
          </h1>
          <button
            onClick={() => redirect("/new-task")}
            className="flex items-center gap-2 text-[#974FD0] text-[16px] md:text-[24px] font-[500] cursor-pointer "
          >
            <img src={plus} alt="" />
            <p className="">Add New Task</p>
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {task.map((item) => {
            return (
              <div
                key={item.id}
                className="h-[287px] w-full border-[0.5px] border-[#B8B6B6] rounded-[10px] p-5"
              >
                <div className="flex items-center justify-between ">
                  <h2
                    className={`${
                      item.status === "Urgent"
                        ? "text-[#F38383]"
                        : "text-[#73C3A6]"
                    } font-[400] text-[24px] `}
                  >
                    {item.status}
                  </h2>
                  <div className="flex items-center gap-2 lg:gap-3 ">
                    <button
                      onClick={() => {
                        redirect("/edit-task");
                        scrollTo(0, 0);
                      }}
                      className="flex items-center gap-2 px-[25px] py-[10px] text-[24px] cursor-pointer text-[#FAF9FB] bg-[#974FD0] rounded-[8px]"
                    >
                      <img src={editIcon} alt="" />
                      <p className="hidden lg:block">Edit</p>
                    </button>
                    <button className="flex items-center gap-2 px-[25px] py-[10px] text-[24px] cursor-pointer bg-[#FAF9FB] border border-[#974FD0] rounded-[8px]">
                      <img src={deletee} alt="" />
                      <p className="hidden lg:block">Delete</p>
                    </button>
                  </div>
                </div>
                <img src={line} alt="" className="w-full mt-4" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[25px] md:text-[35px] font-400 text-[#292929]">
                    {item.title}
                  </h1>
                  <p className="font-[400] text-[16px] md:text-[24px] text-[#737171] tracking-[0%] leading-[100%]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            redirect("/my-task");
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

export default MyTask;
