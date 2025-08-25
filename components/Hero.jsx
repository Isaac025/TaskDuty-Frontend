import React from "react";
import bro from "../src/assets/bro.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

const Hero = () => {
  const redirect = useNavigate();
  const { user, token } = useAppContext();

  const handleGetTask = () => {
    if (user || token) {
      redirect("/my-task");
    } else {
      redirect("/login");
    }
  };

  return (
    <div className="container flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 items-center lg:justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="max-w-[470px] w-full text-[25px] md:text-[35px] lg:text-[50px] font-[500] text-[#292929]">
          Manage your Tasks on <span className="text-[#974FD0] ">TaskDuty</span>
        </h1>
        <p className="text-[16px] md:text-[24px] text-[#737171] max-w-[535px] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>

        <button
          onClick={handleGetTask}
          className="text-[#FAF9FB] bg-[#974FD0] text-[24px] w-[220px] h-[50px] cursor-pointer rounded-[8px]  "
        >
          Go to My Tasks
        </button>
      </div>

      <div>
        <img src={bro} alt="" />
      </div>
    </div>
  );
};

export default Hero;
