import React, { useState } from "react";
import PostImg from "../../assets/images/BorivaliPic.jpg";
import { BsThreeDots, BsHeartFill, BsChatLeft } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import VerifiedBadge from "../../assets/images/verified.png";
import ProfilePic from "../../assets/images/profile-pic-insta01.png";
import { galleryImages } from "../../data/galleryImages";

const ProfileGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    console.log(image);
    setSelectedImage(image);
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.classList.remove("hidden"); // Remove the `hidden` class
      modal.classList.add("flex"); // Add the `flex` class to make it visible
    }
  };

  const handleCloseModal = () => {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.classList.remove("flex"); // Remove the `flex` class
      modal.classList.add("hidden"); // Add the `hidden` class to hide it
    }
  };

  const profile = {
    image: ProfilePic,
    username: "kiranamin.img",
    location: "Borivali",
  };

  return (
    <section className="profile-gallery">
      {/* Modal */}
      <div
        onClick={handleCloseModal}
        className="hidden modal bg-black bg-opacity-80 absolute top-0 w-full h-full justify-center items-center"
      >
        <div
          className="postbox bg-[#FAFAFA] w-full max-w-[468px] h-auto max-h-[90vh] rounded-xl overflow-hidden mx-2"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <div className="post-profile border-b border-gray-200">
            <div className="insta_post_head">
              <div className="insta_post_profile_box flex justify-between items-center p-2">
                <div className="insta_post_profile_info flex items-center">
                  <div className="insta_post_profile_info_img">
                    <img
                      className="profile_pic w-8 h-8 rounded-full object-cover"
                      src={profile.image}
                      alt="profile_pic"
                    />
                  </div>
                  <div className="insta_post_profile_info_text mx-3 leading-4">
                    <div className="insta_post_profile_info_text_username flex items-center">
                      <h4 className="insta_post_profile_username font-semibold text-sm">
                        {profile.username}
                      </h4>
                      <img
                        className="w-3.5 ml-1"
                        src={VerifiedBadge}
                        alt="verified"
                      />
                    </div>
                    <h3 className="insta_post_profile_location font-[Poppins] text-xs text-gray-500">
                      {selectedImage?.location || "India"}
                    </h3>
                  </div>
                </div>
                <div className="insta_post_profile_btn cursor-pointer hover:opacity-60">
                  <BsThreeDots size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="post-image h-[468px]">
            <img
              src={selectedImage?.src || PostImg}
              className="w-full h-full object-contain bg-black"
              alt={selectedImage?.description || "Post"}
            />
          </div>

          <div className="post-btn w-full flex items-center px-4 py-4 border-t border-gray-200">
            <div className="flex gap-6 flex-1">
              <div className="flex items-center gap-2">
                <BsHeartFill className="text-2xl cursor-pointer hover:opacity-60 transition-opacity text-red-600" />
                <span className="text-sm">{selectedImage?.likeCount || 0}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsChatLeft className="text-2xl cursor-pointer hover:opacity-60 transition-opacity" />
                <span className="text-sm">
                  {selectedImage?.commentCount || 0}
                </span>
              </div>
              <RiShareForwardLine className="text-2xl cursor-pointer hover:opacity-60 transition-opacity" />
            </div>
            <BsThreeDots className="text-2xl cursor-pointer hover:opacity-60 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="profile-gallery-images grid grid-cols-3 gap-[1px] max-w-[470px] mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-[3/4]">
            <img
              onClick={() => handleOpenModal(image)}
              src={image.src}
              alt={image.description}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileGallery;
