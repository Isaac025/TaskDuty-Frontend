import React from "react";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import back from "../assets/back.png";
import down from "../assets/down.png";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tag: yup.string().required("Tag is required"),
});

const EditTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const redirect = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   const fetchTask = async () => {
  //     try {
  //       const response = await axiosInstance.get(`/${id}`);
  //       reset(response.data.task); // Pre-fill the form with existing data
  //     } catch (error) {
  //       toast.error("Failed to load task data");
  //       redirect("/my-task");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchTask();
  // }, [id, reset, redirect]);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.patch(`/${id}`, formData);
      const { data } = response;

      toast.success(data.message || "Task updated successfully!");
      reset();
      redirect("/my-task");
      window.scrollTo(0, 0);
      return data.task;
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 400) {
          toast.error(
            error.response.data.message || "Please fill all the fields"
          );
        } else if (error.response.status === 404) {
          toast.error(error.response.data.message || "Task not found");
        } else {
          toast.error(error.response.data.message || "Something went wrong");
        }
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  //     </div>
  //   );
  // }

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
          <h1>Edit Task</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input with integrated fieldset */}
          <div className="relative mt-5">
            <fieldset className="border-[#B8B6B6] border h-[84px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[600] text-[#9C9C9C]">
                Task Title
              </legend>
              <input
                type="text"
                {...register("title")}
                placeholder="Project Completion"
                className="w-full h-full p-10 border-none focus:ring-0 absolute top-0 left-0 bg-transparent outline-none"
              />
            </fieldset>
            <p className={`${errors ? "text-red-500" : ""}`}>
              {errors?.title?.message}
            </p>
          </div>

          {/* Textarea with integrated fieldset */}
          <div className="relative my-5">
            <fieldset className="border-[#B8B6B6] border h-[244px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[600] text-[#9C9C9C]">
                Description
              </legend>
              <textarea
                {...register("description")}
                className="w-full h-full p-10 pb-2 border-none outline-none focus:ring-0 absolute top-0 left-0 bg-transparent resize-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam."
              ></textarea>
            </fieldset>
            <p className={`${errors ? "text-red-500" : ""}`}>
              {errors?.description?.message}
            </p>
          </div>

          {/* Select with integrated fieldset */}
          <div className="relative mb-30">
            <fieldset className="border-[#B8B6B6] border h-[84px] rounded-[5px]">
              <legend className="ml-4 px-2 text-[20px] font-[400] text-[#9C9C9C]">
                Tag
              </legend>
              <select
                {...register("tag")}
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
            <p className={`${errors ? "text-red-500" : ""}`}>
              {errors?.tag?.message}
            </p>
          </div>
          <button className="bg-[#974FD0] w-full rounded-[8px] h-[84px] cursor-pointer text-[#FAF9FB] font-medium text-[25px] md:text-[35px]">
            {isSubmitting ? "Submitting..." : "Done"}
          </button>
        </form>
        <button className="w-[128px] h-[32px] font-[400] text-[20px] md:[30px] underline text-[#974FD0] mt-[20px] mx-auto block cursor-pointer">
          Back To Top
        </button>
      </div>
    </div>
  );
};

export default EditTask;
