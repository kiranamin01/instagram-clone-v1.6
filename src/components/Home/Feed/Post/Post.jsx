import React, { useState, useRef } from "react";
import { BsThreeDots, BsHeart, BsHeartFill, BsChatLeft } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import ProfilePic from "../../../../assets/images/profile-pic-insta01.png";

const Post = ({
  id,
  profile,
  postImage,
  likes,
  description,
  comments,
  likedBy,
  commentData,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const heartIconRef = useRef(null);

  const likeBtn = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const doubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }

    if (heartIconRef.current) {
      heartIconRef.current.classList.remove("hidden", "scale-0", "text-white");
      heartIconRef.current.classList.add(
        "scale-100",
        "opacity-100",
        "text-red-500"
      );
      setTimeout(() => {
        heartIconRef.current?.classList.add("scale-0", "hidden");
      }, 900);
    }
  };

  // Profile Details section

  const myProfile = {
    username: "kiranamin.img",
    image: ProfilePic,
    location: "Mumbai",
  };

  const [commentsData, setCommentsData] = useState(commentData || []);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      const newComment = {
        username: myProfile.username,
        userImage: myProfile.image,
        comment: comment,
      };
      setCommentsData([...commentsData, newComment]);
      e.target.reset();
      toggleCommentBox(); // Close comment box after posting
    }
  };

  const toggleCommentBox = () => {
    setIsCommentBoxOpen(!isCommentBoxOpen);
  };

  return (
    <>
      <section className="insta_post border-b border-gray-200 pb-4 p-2">
        <div className="insta_post_head">
          <div className="insta_post_profile_box flex justify-between items-center mx-2 my-4">
            <div className="insta_post_profile_info flex items-center">
              <div className="insta_post_profile_info_img">
                <img
                  className="profile_pic w-10 rounded-full"
                  src={profile.image}
                  alt="profile_pic"
                />
              </div>

              <div className="insta_post_profile_info_text mx-2 leading-5">
                <div className="insta_post_profile_info_text_username flex items-center">
                  <h4 className="insta_post_profile_username font-semibold">
                    {profile.username}
                  </h4>
                  <MdVerified color="" className="text-blue-400" />
                </div>
                <h3 className="insta_post_profile_location font-[Poppins] text-sm">
                  {profile.location}
                </h3>
              </div>
            </div>
            <div className="insta_post_profile_btn text-[1.5rem] cursor-pointer">
              <BsThreeDots size={24} />
            </div>
          </div>
        </div>

        <div className="insta_post_image bg-black">
          <div className="insta_post_pic relative">
            <img
              onDoubleClick={doubleClick}
              className="w-full object-cover"
              src={postImage}
              alt="insta_feed_pic"
            />
            <BsHeartFill
              ref={heartIconRef}
              className={`like-btn-img-${id} hidden text-white text-6xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-80 cursor-pointer scale-0 transition-transform duration-200`}
            />
          </div>
        </div>

        <div className="insta_post_btn mx-2 mt-4">
          <div className="insta_post_status flex gap-4">
            {isLiked ? (
              <BsHeartFill
                onClick={likeBtn}
                className="text-2xl cursor-pointer hover:opacity-50 transition-opacity text-red-500"
              />
            ) : (
              <BsHeart
                onClick={likeBtn}
                className="text-2xl cursor-pointer hover:opacity-50 transition-opacity"
              />
            )}

            <BsChatLeft
              onClick={toggleCommentBox}
              className="text-2xl cursor-pointer hover:opacity-50 transition-opacity"
            />
            <RiShareForwardLine className="text-2xl cursor-pointer hover:opacity-50 transition-opacity" />
          </div>
        </div>
        <div className="insta_post_like_info mx-2 mt-2 flex flex-1">
          <h4>
            Liked by <span className="font-semibold">{likedBy}</span> and{" "}
            <span className="font-semibold">{likeCount} others</span>
          </h4>
        </div>
        <div className="insta_post_comment mx-2 mt-2 flex flex-col items-start">
          <h4>
            <span className="font-semibold">{profile.username}</span>{" "}
            {description}
          </h4>
          <h5
            onClick={toggleCommentBox}
            className="text-gray-500 mt-1 cursor-pointer"
          >
            View all {comments} comments
          </h5>
        </div>
        <div
          className={`insta_post_comment_box fixed inset-0 bg-black/50 z-50 ${
            isCommentBoxOpen ? "" : "hidden"
          }`}
        >
          <div className="comment_container bg-white dark:bg-[#121212] w-full max-w-[468px] h-[70vh] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-2xl">
            <div className="comment_header border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="font-semibold">Comments</h3>
              <button
                onClick={toggleCommentBox}
                className="text-gray-500 text-2xl"
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
                      <span className="font-semibold">{comment.username}</span>
                      <span className="text-sm text-gray-500">• 1h</span>
                    </div>
                    <span className="text-sm">{comment.comment}</span>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <button className="hover:text-gray-700">Like</button>
                      <button className="hover:text-gray-700">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleComment}
              className="absolute bottom-16 left-0 right-0 border-t border-gray-200 p-4 bg-white dark:bg-[#121212]"
            >
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="w-full bg-transparent outline-none dark:text-white"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="text-blue-500 font-semibold whitespace-nowrap hover:text-blue-600"
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

export default Post;
