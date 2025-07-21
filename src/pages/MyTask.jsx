import React from "react";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import plus from "../assets/plus.png";
import task from "../../MyTask";
import deletee from "../assets/Delete.png";
import line from "../assets/line.png";
import { axiosInstance } from "../utils/axiosInstance";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import DeleteModal from "../../components/DeleteModal";
import Empty from "../../components/Empty";

const MyTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState([]);

  const redirect = useNavigate();

  const getAllTask = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/");
      const { data } = response;
      if (response.status === 200) {
        setTask(data.tasks);
        return toast.success(data.message);
      } else {
        return toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirm) return;
    try {
      const response = await axiosInstance.delete(`/${taskId}`);
      const { data } = response;
      if (response.status === 200) {
        toast.success(data.message || "Task deleted successfully");
        await getAllTask();
      } else {
        toast.error(data.message || "Failed to delete task");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllTask();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && task.length === 0) {
    return <Empty />;
  }

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between ">
        <Link to="/home">
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
                key={item._id}
                className="h-[287px] w-full border-[0.5px] border-[#B8B6B6] rounded-[10px] p-5"
              >
                <div className="flex items-center justify-between ">
                  <h2
                    className={`${
                      item.tag === "urgent"
                        ? "text-[#F38383]"
                        : "text-[#73C3A6]"
                    } font-[400] text-[24px] `}
                  >
                    {item.tag.charAt(0).toUpperCase() + item.tag.slice(1)}
                  </h2>
                  <div className="flex items-center gap-2 lg:gap-3 ">
                    <button
                      onClick={() => {
                        redirect(`/edit-task/${item._id}`);
                        scrollTo(0, 0);
                      }}
                      className="flex items-center gap-2 px-[25px] py-[10px] text-[24px] cursor-pointer text-[#FAF9FB] bg-[#974FD0] rounded-[8px]"
                    >
                      <BiEdit size={30} color="#FAF9FB" />
                      <p className="hidden lg:block">Edit</p>
                    </button>
                    <button
                      onClick={() => deleteTask(item._id)}
                      className="flex items-center gap-2 px-[25px] py-[10px] text-[24px] cursor-pointer bg-[#FAF9FB] border border-[#974FD0] rounded-[8px]"
                    >
                      <img src={deletee} alt="" />
                      <p className="hidden lg:block">Delete</p>
                    </button>
                  </div>
                </div>
                <img src={line} alt="" className="w-full mt-4" />
                <div className=" flex flex-col gap-2">
                  <h1 className=" text-[25px] md:text-[35px] font-400 text-[#292929]">
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
