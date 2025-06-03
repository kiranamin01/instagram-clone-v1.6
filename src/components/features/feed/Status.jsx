import React, { useState } from "react";
import ProfilePic from "../../../assets/images/profile-pic-insta01.png";
import { BsHeart, BsSend, BsShare, BsThreeDotsVertical } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { storyData } from "../../../data/storyData";
import AdminStory from "../../../assets/images/BorivaliPic.jpg";

const Status = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showAdminStatusModal, setShowAdminStatusModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const adminStoryData = [
    {
      image: ProfilePic,
      name: "Your Story",
      storyimage: AdminStory,
    },
  ];

  const handleStatus = (index) => {
    setCurrentIndex(index);
    setShowStatusModal(true);
  };

  const [isStoryViewed, setIsStoryViewed] = useState(false);

  const handleStatusAdmin = () => {
    setShowAdminStatusModal(true);
    setIsStoryViewed(true);
  };

  return (
    <>
      <section className="insta_story fixed top-16 left-0 right-0 flex flex-nowrap overflow-auto gap-3 border-b border-gray-200 px-4 py-4 scrollbar-hide max-w-[468px] mx-auto justify-between items-center bg-[#FAFAFA] dark:bg-[#121212] dark:text-white">
        <div
          onClick={() => handleStatusAdmin()}
          className="flex flex-col items-center min-w-[66px]"
        >
          <div
            className={`w-16 h-16 rounded-full border-2 ${
              isStoryViewed ? "border-gray-400" : "border-green-600"
            } p-[2px]`}
          >
            <img
              className="w-full h-full rounded-full object-cover"
              src={ProfilePic}
              alt=""
            />
          </div>
          <span className="text-xs mt-1">Your Story</span>
        </div>

        {storyData.map((story, index) => (
          <div
            onClick={() => handleStatus(index)}
            key={index}
            className="status-modal flex flex-col items-center min-w-[66px] "
          >
            <div className="status-gradient bg-gradient-to-r from-fuchsia-600 to-amber-500 rounded-full">
              <img
                className="w-16 h-16 rounded-full p-[2px] object-cover"
                src={story.image}
                alt={`${story.name}'s story`}
              />
            </div>
            <span className="text-xs mt-1">{story.name}</span>
          </div>
        ))}
      </section>

      {showStatusModal && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-black w-full max-w-[468px] h-[100vh] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-2xl">
            <div className="status-timer"></div>
            <div className="status-profile-header flex justify-between mt-12 mx-4">
              <div className="status-profile-header-left flex justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full mx-2"
                  src={storyData[currentIndex].image}
                  alt=""
                />
                <span className="text-white">
                  {storyData[currentIndex].name}
                </span>
                <MdVerified color="white" className="mx-1" />
                <span className="text-gray-500">59m</span>
              </div>
              <div className="status-profile-header-right">
                <BsThreeDotsVertical color="white" className="text-2xl" />
              </div>
              <button
                onClick={() => setShowStatusModal(false)}
                className="absolute top-12 right-20 text-white text-2xl bg-slate-400/90 w-6 h-6 pb-2 rounded-full flex justify-center items-center"
              >
                &times;
              </button>
            </div>
            <div className="status-profile-img h-[calc(100vh-200px)] flex items-center justify-center">
              <img
                src={storyData[currentIndex].storyimage}
                alt="story"
                className="max-h-full w-full object-contain"
              />
            </div>
            <div className="status-profile-btn mx-3 flex items-center gap-4">
              <input
                className="w-full text-white border-2 border-b-gray-400 py-3 rounded-full bg-transparent text-start px-4 outline-none"
                placeholder="Message"
                type="button"
                value="Message"
              />
              <BsHeart color="white" className="text-4xl mx-2" />
              <BsSend color="white" className="text-4xl mx-2" />
            </div>
          </div>
        </div>
      )}
      {/* ADMIN STATUS */}
      {showAdminStatusModal && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-black w-full max-w-[468px] h-[100vh] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-2xl">
            <div className="status-timer"></div>
            <div className="status-profile-header flex justify-between mt-12 mx-4">
              <div className="status-profile-header-left flex justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full mx-2"
                  src={adminStoryData[0].image}
                  alt="story"
                />
                <span className="text-white">{adminStoryData[0].name}</span>
                <MdVerified color="white" className="mx-1" />
                <span className="text-gray-500">59m</span>
              </div>
              <div className="status-profile-header-right">
                <BsThreeDotsVertical color="white" className="text-2xl" />
              </div>
              <button
                onClick={() => setShowAdminStatusModal(false)}
                className="absolute top-12 right-20 text-white text-2xl bg-slate-400/90 w-6 h-6 pb-2 rounded-full flex justify-center items-center"
              >
                &times;
              </button>
            </div>
            <div className="status-profile-img h-[calc(100vh-200px)] flex items-center justify-center">
              <img
                src={adminStoryData[0].storyimage}
                alt="story"
                className="max-h-full w-full object-contain"
              />
            </div>
            <div className="status-profile-btn mx-3 flex items-center gap-4">
              <input
                className="w-full text-white border-2 border-b-gray-400 py-3 rounded-full bg-transparent text-start px-4 outline-none"
                placeholder="Message"
                type="button"
                value="Message"
              />
              <BsHeart color="white" className="text-4xl mx-2" />
              <BsSend color="white" className="text-4xl mx-2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
