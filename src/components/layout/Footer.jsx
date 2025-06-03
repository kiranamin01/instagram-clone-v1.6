import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProfilePic from "../../assets/images/profile-pic-insta01.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-[468px] mx-auto dark:bg-[#121212] dark:text-white">
      <div className="flex justify-around items-center py-3">
        <Link to="/">
          <AiFillHome
            size={28}
            className="hover:opacity-50 transition-opacity"
          />
        </Link>
        <Link to="/search">
          <BiSearch size={28} className="hover:opacity-50 transition-opacity" />
        </Link>
        <Link to="/upload">
          <BsPlusSquare
            size={25}
            className="hover:opacity-50 transition-opacity"
          />
        </Link>
        <Link to="/liked">
          <FaRegHeart
            size={25}
            className="hover:opacity-50 transition-opacity"
          />
        </Link>
        <Link to="/profile">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-7 h-7 rounded-full object-cover hover:opacity-50 transition-opacity"
          />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
