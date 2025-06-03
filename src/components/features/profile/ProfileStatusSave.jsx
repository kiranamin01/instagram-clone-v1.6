import React from "react";

const ProfileStatusSave = () => {
  return (
    <section className="profile-status-save bg-[#FAFAFA] p-4 flex space-x-4 overflow-x-auto border-b dark:bg-[#121212] dark:text-white">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="text-xs mt-1">New</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-gray-300">
          <img
            src="https://images.unsplash.com/photo-1489942986787-cded4ecf962e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Friends Story"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-xs mt-1">Friends</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-gray-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Sport Story"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-xs mt-1">Sport</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-gray-300">
          <img
            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
            alt="Design Story"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-xs mt-1">Design</div>
      </div>
    </section>
  );
};

export default ProfileStatusSave;
