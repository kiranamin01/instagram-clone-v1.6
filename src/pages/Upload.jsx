import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgEnter } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcAddImage } from "react-icons/fc";
import { IoLink } from "react-icons/io5";
import { postsData } from "../data/postsData";

const Upload = () => {
  const [postData, setPostData] = useState({
    profileImage: "",
    username: "",
    location: "",
    postImage: "",
    description: "",
  });

  const handleInputChange = (e, field) => {
    setPostData({
      ...postData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      profile: {
        username: postData.username,
        image: postData.profileImage,
        location: postData.location,
      },
      postImage: postData.postImage,
      likes: 0,
      description: postData.description,
      comments: 0,
      likedBy: "user.name",
      commentData: [],
    };

    // Add to postsData array
    postsData.unshift(newPost);
    console.log("Updated postsData:", postsData);

    // Reset form
    setPostData({
      profileImage: "",
      username: "",
      location: "",
      postImage: "",
      description: "",
    });

    // Optional: Show success message
    alert("Post created successfully!");
  };

  return (
    <div>
      <nav className="upload-nav bg-[#FAFAFA] dark:bg-[#121212] rounded-lg py-2">
        <h2 className="text-2xl text-center font-[Poppins] dark:text-white">
          Generate New Post
        </h2>
        <div className="upload-container flex justify-center">
          <div className="upload-option flex justify-between items-center m-3 bg-white dark:bg-[#262626] border-2 dark:border-gray-700 py-1 px-4 rounded-xl w-[80%]">
            <button className="uppercase font-medium py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
              Post
            </button>
            <button className="uppercase font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">
              Story
            </button>
            <button className="uppercase font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">
              Reel
            </button>
            <button className="uppercase font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">
              Profile
            </button>
          </div>
        </div>
      </nav>

      <div className="upload-main flex justify-center border-2 border-bg-gray-100 dark:border-gray-700">
        <div className="upload-main-container w-full bg-[#FAFAFA] dark:bg-[#121212] rounded-lg p-4 flex flex-col justify-center items-center">
          <div className="upload-main-container-header flex justify-between items-center">
            <h2 className="text-2xl font-[Poppins] dark:text-white">
              Create Post
            </h2>
          </div>
          <div className="upload-main-container-body w-full max-w-2xl">
            <div className="upload-main-container-body-input">
              <div className="upload-post-input flex items-center gap-5 my-5">
                <div className="upload-post-img w-14 h-14 rounded-full bg-slate-300 dark:bg-gray-700 flex justify-center items-center">
                  <IoLink className="text-4xl m-3 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  value={postData.profileImage}
                  onChange={(e) => handleInputChange(e, "profileImage")}
                  placeholder="Add Profile Image Link"
                  className="flex-1 border-2 border-gray-600 dark:border-gray-500 rounded-lg p-2 pr-8 bg-transparent dark:text-white dark:placeholder-gray-400"
                />
                <CgEnter className="text-4xl dark:text-gray-400" />
              </div>

              <div className="upload-post-input flex items-center gap-5 my-5">
                <div className="upload-post-img w-14 h-14 rounded-full bg-slate-300 dark:bg-gray-700 flex justify-center items-center">
                  <FaUserCircle className="text-4xl m-3 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  value={postData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                  placeholder="Add Profile Username"
                  className="flex-1 border-2 border-gray-600 dark:border-gray-500 rounded-lg p-2 pr-8 bg-transparent dark:text-white dark:placeholder-gray-400"
                />
                <CgEnter className="text-4xl dark:text-gray-400" />
              </div>

              <div className="upload-post-input flex items-center gap-5 my-5">
                <div className="upload-post-img w-14 h-14 rounded-full bg-slate-300 dark:bg-gray-700 flex justify-center items-center">
                  <FaLocationDot className="text-4xl m-3 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  value={postData.location}
                  onChange={(e) => handleInputChange(e, "location")}
                  placeholder="Add Post Location"
                  className="flex-1 border-2 border-gray-600 dark:border-gray-500 rounded-lg p-2 pr-8 bg-transparent dark:text-white dark:placeholder-gray-400"
                />
                <CgEnter className="text-4xl dark:text-gray-400" />
              </div>

              <div className="upload-post-img">
                <div className="upload-post-img-box bg-slate-300 dark:bg-gray-700 flex flex-col justify-center items-center rounded-md mt-10 p-4">
                  <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-300 mt-5">
                    POST IMAGE
                  </h2>
                  <FcAddImage className="text-6xl my-12" />
                  <input
                    type="text"
                    value={postData.postImage}
                    onChange={(e) => handleInputChange(e, "postImage")}
                    placeholder="Add Post Image Link"
                    className="w-full border-2 border-gray-600 dark:border-gray-500 rounded-lg p-2 bg-transparent dark:text-white dark:placeholder-gray-400 bg-yellow-50"
                  />
                  <button className="upload-post-img-btn bg-green-600 py-2 px-6 mt-6 mb-4 rounded-md text-white text-[Poppins] text-xl font-bold hover:bg-green-700 transition-all">
                    UPLOAD
                  </button>
                </div>
              </div>

              <div className="my-10">
                <label className="text-gray-700 dark:text-gray-300 text-lg mb-2 block">
                  Description:
                  <input
                    type="text"
                    value={postData.description}
                    onChange={(e) => handleInputChange(e, "description")}
                    placeholder="Write a caption..."
                    className="w-full border-2 border-gray-600 dark:border-gray-500 rounded-lg p-4 mt-2 bg-transparent dark:text-white dark:placeholder-gray-400 min-h-[150px]"
                  />
                </label>
              </div>

              <div className="flex justify-center w-full mb-14">
                <button
                  onClick={handleSubmit}
                  className="upload-post-btn bg-green-600 py-3 px-8 rounded-md text-white text-[Poppins] text-xl font-bold hover:bg-green-700 transition-all"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
