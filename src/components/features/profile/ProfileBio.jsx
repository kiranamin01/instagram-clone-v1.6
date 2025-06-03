import React, { useState } from "react";
import ProfilePic from "../../../assets/images/profile-pic-insta01.png";

const ProfileBio = () => {
  const [followersNo, setFollowersNo] = useState(999);
  const [followingNo, setFollowingNo] = useState(111);

  const handleFollowersNo = () => {
    setFollowersNo(followersNo + 1);
  };

  const handleFollowingNo = () => {
    setFollowingNo(followingNo + 1);
  };

  return (
    <section
      className="profile-bio p-4 flex flex-col border-b bg-[#FAFAFA]
    dark:bg-[#121212] dark:border-gray-800"
    >
      <div className="profile-bio-info flex items-center dark:text-white">
        <div className="w-24 h-22 rounded-full overflow-hidden mb-2">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-around w-full mb-4">
          <div>
            <div className="text-center font-semibold">15</div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Posts
            </div>
          </div>
          <div>
            <div
              onDoubleClick={handleFollowersNo}
              className="followers-no text-center font-semibold hover:cursor-pointer "
            >
              {followersNo}
            </div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Followers
            </div>
          </div>
          <div>
            <div
              onDoubleClick={handleFollowingNo}
              className="followings-no text-center font-semibold hover:cursor-pointer"
            >
              {followingNo}
            </div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Following
            </div>
          </div>
        </div>
      </div>
      <div className="profile-bio-info-text text-start dark:text-white">
        <div className="font-semibold">Kiran Amin</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Digital Web designer
          <span className="text-blue-600">@akstyleworld</span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Everything is designed.
        </div>
      </div>
      <button className="mt-4 px-6 py-2 rounded-lg w-full border border-gray-200 font-semibold dark:bg-[#121212] dark:text-white">
        Edit Profile
      </button>
    </section>
  );
};

export default ProfileBio;
