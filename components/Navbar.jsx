import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import logo from "../src/assets/Group2.png";
import imgg from "../src/assets/Ellipse1.png";
import { useAppContext } from "../hooks/useAppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="border-b-[0.5px] border-b-[#B8B6B6] h-[93px]">
      <nav className="container flex items-center justify-between relative px-4 lg:px-0">
        {/* Logo */}
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {!user ? (
          <div className="hidden lg:flex items-center gap-5 text-[#292929] text-[22px] font-medium">
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
            <img src={imgg} alt="profile" className="w-10 h-10" />
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-5 text-[#292929] text-[22px] font-medium">
            <Link to="/new-task">New Task</Link>
            <Link to="/my-task">All Tasks</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Logout
            </button>
            <img src={imgg} alt="profile" className="w-10 h-10" />
          </div>
        )}

        {/* Mobile Menu Icon */}
        {!isOpen ? (
          <BiMenu
            size={30}
            onClick={() => setIsOpen(true)}
            className="lg:hidden cursor-pointer"
          />
        ) : (
          <IoClose
            size={30}
            onClick={() => setIsOpen(false)}
            className="lg:hidden cursor-pointer"
          />
        )}

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[93px] right-4 bg-white p-4 rounded-lg shadow-lg z-50 flex flex-col gap-3 text-[#292929] text-[18px]">
            <img src={imgg} alt="profile" className="w-10 h-10 mx-auto mb-2" />
            {!user ? (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link to="/sign-up" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/new-task" onClick={() => setIsOpen(false)}>
                  New Task
                </Link>
                <Link to="/my-task" onClick={() => setIsOpen(false)}>
                  All Tasks
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
