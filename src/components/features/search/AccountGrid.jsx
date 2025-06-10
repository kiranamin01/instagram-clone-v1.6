import React, { useState } from "react";
import UserProfilePic from "../../../assets/images/profile-pics/viratkholi.jpg";
import GoVerified from "../../../assets/icons/verified.png";
import { userProfileData } from "../../../data/userProfileData";
import ConvertNtoS from "../../../utils/ConvertNtoS";

const AccountGrid = ({ searchQuery }) => {
  const [visibleProfiles, setVisibleProfiles] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const filteredUsers = userProfileData.filter((user) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      user.instagram_id.toLowerCase().includes(query) ||
      user.user_name.toLowerCase().includes(query)
    );
  });

  const showMoreProfile = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    setVisibleProfiles((prevCount) => prevCount + 10);
    setIsLoading(false);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-4 p-4">
        {filteredUsers.length === 0 && searchQuery ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No results found for "{searchQuery}"
            </p>
          </div>
        ) : (
          <>
            {filteredUsers.slice(0, visibleProfiles).map((user) => (
              <div
                key={user.instagram_id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <img
                  src={UserProfilePic}
                  alt="profile-pic"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm dark:text-white flex items-center">
                    {user.instagram_id}

                    <img
                      src={GoVerified}
                      alt="verified-badge"
                      className="w-3 h-3 ml-1"
                    />
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.user_name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    <ConvertNtoS num={user.followers_count} /> followers
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center my-4">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
            {visibleProfiles < filteredUsers.length && (
              <div className="flex justify-center">
                <button
                  onClick={showMoreProfile}
                  disabled={isLoading}
                  className="px-4 py-2 rounded font-semibold text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Loading..." : "Show More"}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default AccountGrid;
