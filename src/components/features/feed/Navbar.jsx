import React from "react";
import { BiCamera } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import DarkModeToggle from "../../common/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#121212] border-b dark:border-gray-700 max-w-[468px] mx-auto flex justify-between items-center px-4 py-2">
      <div className="nav-logo flex items-center space-x-4">
        <h3 className="text-2xl font-instagram text-black dark:text-white">
          Instagram
        </h3>
        <DarkModeToggle />
      </div>
      <div className="nav-btn flex space-x-6">
        <BiCamera
          size={30}
          className="hover:opacity-50 transition-opacity dark:text-white"
        />
        <RiSendPlaneFill
          size={30}
          className="hover:opacity-50 transition-opacity dark:text-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
