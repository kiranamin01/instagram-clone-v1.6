import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaImage, FaSpinner } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "motion/react";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [activeTab, setActiveTab] = useState("post");

  const [postData, setPostData] = useState({
    imageFile: null,
    caption: "",
    location: "",
  });

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostData({ ...postData, imageFile: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login first");
      }

      // First upload image to cloud storage
      const formData = new FormData();
      formData.append("image", postData.imageFile);

      const imageUploadResponse = await fetch(
        "http://localhost:5000/api/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const imageData = await imageUploadResponse.json();
      if (!imageUploadResponse.ok) throw new Error(imageData.message);

      // Then create post with image URL
      const createPostResponse = await fetch(
        "http://localhost:5000/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            imageUrl: imageData.url,
            caption: postData.caption,
            location: postData.location,
          }),
        }
      );

      const postResult = await createPostResponse.json();
      if (!createPostResponse.ok) throw new Error(postResult.message);

      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="bg-white dark:bg-[#262626] rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center p-1 space-x-1">
            {["post", "story", "reel"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#262626] rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Create New Post
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload Section */}
              <div className="space-y-2">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    preview
                      ? "border-blue-500"
                      : "border-gray-300 dark:border-gray-600"
                  } hover:border-blue-500 dark:hover:border-blue-500`}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto max-h-96 rounded-lg"
                    />
                  ) : (
                    <div className="space-y-4">
                      <FaImage className="w-12 h-12 mx-auto text-gray-400" />
                      <div>
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          Drag and drop or click to upload
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Supported formats: JPG, PNG, GIF
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Caption Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Caption
                </label>
                <textarea
                  value={postData.caption}
                  onChange={(e) =>
                    setPostData({ ...postData, caption: e.target.value })
                  }
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-[#363636] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2 placeholder:p-3"
                  placeholder="Write a caption..."
                />
              </div>

              {/* Location Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Location
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 py-3 pl-3 flex items-center pointer-events-none">
                    <MdLocationOn className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={postData.location}
                    onChange={(e) =>
                      setPostData({ ...postData, location: e.target.value })
                    }
                    className="block w-full py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-[#363636] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Add location"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!postData.imageFile || isLoading}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isLoading || !postData.imageFile
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Posting...
                    </>
                  ) : (
                    "Share Post"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;
