import { useLocation, useParams } from "react-router-dom";
import ProfileGallery from "../../components/features/profile/ProfileGallery";
import ProfileNav from "../../components/features/profile/ProfileNav";
import ProfileBio from "../../components/features/profile/ProfileBio";
import ProfileStatusSave from "../../components/features/profile/ProfileStatusSave";
import { userProfileData } from "../../data/userProfileData";
import { useState, useEffect } from "react";
import ConvertNtoS from "../../utils/ConvertNtoS";

const SearchProfile = () => {
  const { instagram_id } = useParams();
  const location = useLocation();
  const [selectedUser, setSelectedUser] = useState(null);

  const [isFollowed, setIsFollowed] = useState(false);

  const handlefollowbtn = () => {
    const followbtn = document.querySelector(".followbtn");
    followbtn.classList.toggle("unfollowingbtn");
    followbtn.classList.toggle("followingbtn");

    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    // If user data is passed through navigation state, use it
    if (location.state?.userData) {
      setSelectedUser(location.state.userData);
    } else if (instagram_id) {
      // Otherwise, find user by instagram_id
      const user = userProfileData.find(
        (user) => user.instagram_id === instagram_id
      );
      setSelectedUser(user || userProfileData[0]); // Fallback to first user if not found
    } else {
      setSelectedUser(userProfileData[0]); // Default to first user
    }
  }, [instagram_id, location.state]);

  if (!selectedUser) return null;

  return (
    <section className="max-w-[470px] mx-auto bg-white min-h-screen overflow-y-auto scrollbar-hide dark:bg-[#121212]">
      <ProfileNav selectedUser={selectedUser} />
      <section className="profile-bio p-4 flex flex-col border-b bg-[#FAFAFA] dark:bg-[#121212] dark:border-gray-800">
        <div className="profile-bio-info flex items-center dark:text-white">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <img
              src={selectedUser.user_profile_pic}
              alt={`${selectedUser.user_name}'s Profile Picture`}
              className="object-cover"
            />
          </div>
          <div className="flex justify-around w-full mb-4">
            <div>
              <div className="text-center font-semibold">
                {selectedUser.user_posts.length}
              </div>
              <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                Posts
              </div>
            </div>
            <div>
              <div className="text-center font-semibold">
                <ConvertNtoS num={selectedUser.followers_count} />
              </div>
              <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                Followers
              </div>
            </div>
            <div>
              <div className="text-center font-semibold">
                {selectedUser.following_count}
              </div>
              <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                Following
              </div>
            </div>
          </div>
        </div>
        <div className="profile-bio-info-text text-start dark:text-white">
          <div className="font-semibold">{selectedUser.user_name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {selectedUser.user_bio}
          </div>
        </div>
        <div className="flex gap-2 mt-4 text-sm">
          <button
            onClick={handlefollowbtn}
            className="followbtn unfollowingbtn"
          >
            {isFollowed ? "Following" : "Follow"}
          </button>
          <button className="flex-1 px-6 py-2 rounded-lg border border-gray-200 font-semibold hover:bg-gray-50 transition dark:bg-[#121212] dark:text-white dark:hover:bg-[#1c1c1c] dark:border-gray-800">
            Message
          </button>
        </div>
      </section>
      <ProfileStatusSave />
      <ProfileGallery posts={selectedUser.user_posts} />
    </section>
  );
};

export default SearchProfile;
