import React, { useState, useEffect, useRef } from "react";
// import PostImg from "../../assets/images/BorivaliPic.jpg";
import { BsThreeDots, BsHeartFill, BsChatLeft } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import VerifiedBadge from "../../../assets/images/verified.png";
import ProfilePic from "../../../assets/images/profile-pic-insta01.png";
import { profileData } from "../../../data/profileData";

const LazyImage = ({ src, alt, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800"
      onClick={onClick}
    >
      {isInView && (
        <>
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isLoaded ? "hidden" : ""
            }`}
          >
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover cursor-pointer transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

const ProfileGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const galleryRef = useRef(null);

  const profile = {
    username: "kiranamin.img",
    image: ProfilePic,
    location: "Borivali",
  };

  useEffect(() => {
    const loadInitialImages = () => {
      setVisibleImages(profileData.slice(0, 9));
    };

    const handleScroll = () => {
      if (!galleryRef.current) return;

      const rect = galleryRef.current.getBoundingClientRect();
      const isBottom = rect.bottom <= window.innerHeight + 100;

      if (isBottom && visibleImages.length < profileData.length) {
        const nextBatch = profileData.slice(
          visibleImages.length,
          visibleImages.length + 6
        );
        setVisibleImages((prev) => [...prev, ...nextBatch]);
      }
    };

    loadInitialImages();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleImages.length]);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setCommentsData(image.commentData || []);
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  const handleCloseModal = () => {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }
  };

  const handleProfileComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      const newComment = {
        username: profile.username,
        userImage: profile.image,
        comment: comment,
      };
      setCommentsData([...commentsData, newComment]);
      e.target.reset();
      toggleCommentBox();
    }
  };

  const toggleCommentBox = () => {
    setIsCommentBoxOpen(!isCommentBoxOpen);
  };

  return (
    <>
      <section className="profile-gallery">
        {/* Modal */}
        <div
          onClick={handleCloseModal}
          className="hidden modal bg-black bg-opacity-80 fixed inset-0 z-50 justify-center items-center"
        >
          <div
            className="postbox bg-[#FAFAFA] dark:bg-[#262626] fixed top-20 w-full max-w-[468px] h-[700px] rounded-xl overflow-hidden mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="post-profile border-b border-gray-200 dark:border-gray-700">
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
                        <h4 className="insta_post_profile_username font-semibold text-sm dark:text-white">
                          {profile.username}
                        </h4>
                        <img
                          className="w-3.5 ml-1"
                          src={VerifiedBadge}
                          alt="verified"
                        />
                      </div>
                      <h3 className="insta_post_profile_location font-[Poppins] text-xs text-gray-500 dark:text-gray-400">
                        {selectedImage?.location || "India"}
                      </h3>
                    </div>
                  </div>
                  <div className="insta_post_profile_btn cursor-pointer hover:opacity-60 dark:text-white">
                    <BsThreeDots size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="post-image h-[585px] relative bg-black flex items-center justify-center">
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.description || "Post"}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>

            <div className="post-btn w-full flex items-center px-4 h-[70px] border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-6 flex-1">
                <div className="flex items-center gap-2">
                  <BsHeartFill className="text-2xl cursor-pointer hover:opacity-60 transition-opacity text-red-600" />
                  <span className="text-sm dark:text-white">
                    {selectedImage?.likeCount || 0}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2"
                  onClick={toggleCommentBox}
                >
                  <BsChatLeft className="text-2xl cursor-pointer hover:opacity-60 transition-opacity dark:text-white" />
                  <span className="text-sm dark:text-white">
                    {selectedImage?.commentCount || 0}
                  </span>
                </div>
                <RiShareForwardLine className="text-2xl cursor-pointer hover:opacity-60 transition-opacity dark:text-white" />
              </div>
              <BsThreeDots className="text-2xl cursor-pointer hover:opacity-60 transition-opacity dark:text-white" />
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className="profile-gallery-images grid grid-cols-3 gap-[1px] max-w-[470px] mx-auto mb-12"
        >
          {visibleImages.map((image, index) => (
            <LazyImage
              key={index}
              src={image.src}
              alt={image.description}
              onClick={() => handleOpenModal(image)}
            />
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section className="insta_post-comment">
        <div
          className={`insta_post_comment_box fixed inset-0 bg-black/50 z-50 ${
            isCommentBoxOpen ? "" : "hidden"
          }`}
        >
          <div className="comment_container bg-white dark:bg-[#262626] w-full max-w-[468px] h-[70vh] absolute bottom-16 left-1/2 -translate-x-1/2 rounded-2xl">
            <div className="comment_header border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
              <h3 className="font-semibold dark:text-white">Comments</h3>
              <button
                onClick={toggleCommentBox}
                className="text-gray-500 dark:text-gray-400 text-2xl hover:text-gray-700 dark:hover:text-gray-200"
              >
                &times;
              </button>
            </div>

            <div className="comments_list h-[calc(70vh-8rem)] overflow-y-auto p-4 pb-20">
              {commentsData.map((comment, index) => (
                <div key={index} className="flex items-start gap-2 mb-4">
                  <img
                    src={comment.userImage}
                    alt={comment.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold dark:text-white">
                        {comment.username}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        • 1h
                      </span>
                    </div>
                    <span className="text-sm dark:text-gray-200">
                      {comment.comment}
                    </span>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <button className="hover:text-gray-700 dark:hover:text-gray-200">
                        Like
                      </button>
                      <button className="hover:text-gray-700 dark:hover:text-gray-200">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleProfileComment}
              className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-[#262626]"
            >
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="w-full bg-transparent outline-none dark:text-white dark:placeholder-gray-400"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="text-blue-500 font-semibold whitespace-nowrap hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileGallery;
