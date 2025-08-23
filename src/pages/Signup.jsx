import React from "react";
import bro from "../assets/bro.png";
import logo from "../assets/Group2.png";
import imgg from "../assets/Ellipse1.png";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";
import { PiWarningCircle } from "react-icons/pi";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .matches(/^(?!.*@[^,]*,)/, "Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should not be less than 6 characters")
    .required("Password is required"),
  phoneNumber: yup.string().matches().required("Phone number is required"),
});

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/user/register", { ...data });
      const { data: mydata } = response;
      if (response.status === 201) {
        toast.success(mydata.message);
        redirect("/login");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
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
          </div>
        )}
      </nav>
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div>
          <img src={bro} alt="" />
        </div>
        <div className="flex items-center justify-center max-w-[500px]  mt-[30px] w-full">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="bg-[#f3f1f1] p-10 rounded-md shadow-md"
          >
            <label htmlFor="fullName" className="labell">
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="fullName"
              className="w-full p-2 rounded-md border-2 border-gray-400 mb-3 mt-2"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName.message}</p>
            )}
            <label htmlFor="email" className="labell">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="w-full p-2 rounded-md border-2 border-gray-400 mb-3 mt-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
            <label htmlFor="password" className="labell">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="w-full p-2 rounded-md border-2 border-gray-400 mb-3 mt-2"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <label htmlFor="phoneNumber" className="labell">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-2 rounded-md border-2 border-gray-400 mb-3 mt-2"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber.message}</p>
            )}
            <button
              disabled={isSubmitting}
              className="bg-[#974FD0] text-white rounded-md w-full h-[50px] text-[20px] md:text-[22px] my-2 cursor-pointer"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
            {errorMessage && (
              <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
                <PiWarningCircle size={22} />
                <p>{errorMessage}</p>
              </div>
            )}
            <p className="text-center text-[#292929] text-[18px]">
              Already have an account{" "}
              <a href="/login" className="text-[#974FD0] underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
