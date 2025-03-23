import React from "react";
import ProfilePic from "../../assets/images/profile-pic-insta01.png";
import { storyData } from "../../data/storyData";

const Status = () => {
  return (
    <section className="insta_story fixed top-16 left-0 right-0 flex flex-nowrap overflow-auto gap-3 border-b border-gray-200 px-4 py-4 scrollbar-hide max-w-[468px] mx-auto justify-between items-center bg-[#FAFAFA] dark:bg-[#121212] dark:text-white">
      <div className="flex flex-col items-center min-w-[66px]">
        <div className="w-16 h-16 rounded-full border-2 border-gray-200 p-[2px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={ProfilePic}
            alt=""
          />
        </div>
        <span className="text-xs mt-1">Your Story</span>
      </div>
      {storyData.map(({ name, image }, index) => (
        <div key={index} className="flex flex-col items-center min-w-[66px]">
          <img
            className="w-16 h-16 rounded-full border-2 border-gray-200 p-[2px]"
            src={image}
            alt={`${name}'s story`}
          />
          <span className="text-xs mt-1">{name}</span>
        </div>
      ))}
    </section>
  );
};

export default Status;
