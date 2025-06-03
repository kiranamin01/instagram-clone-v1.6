import React from "react";
import ProfileGallery from "../components/features/profile/ProfileGallery";
import ProfileNav from "../components/features/profile/ProfileNav";
import ProfileBio from "../components/features/profile/ProfileBio";
import ProfileStatusSave from "../components/features/profile/ProfileStatusSave";

const Profile = () => {
  return (
    <div className="max-w-[470px] mx-auto bg-white min-h-screen overflow-y-auto scrollbar-hide">
      <ProfileNav />
      <ProfileBio />
      <ProfileStatusSave />

      <section className="bg-[#FAFAFA] flex border-b dark:bg-[#121212]">
        <button className="w-1/2 p-3 border-r dark:bg-[#121212] dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button className="w-1/2 p-3 dark:bg-[#121212] dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M10 20l-4-4 4-4m0 0l-4 4m4-4l4 4"
            />
          </svg>
        </button>
      </section>

      <ProfileGallery />
    </div>
  );
};

export default Profile;
