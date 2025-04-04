import React from "react";

import { logout } from "../../utils/auth";

const ProfileNav = () => {
  return (
    <nav
      className="sticky top-0 flex justify-between items-center p-4 border-b bg-[#FAFAFA]
    dark:bg-[#121212] dark:border-gray-800 dark:text-white"
    >
      <div className="text-xs font-semibold">
        <button
          onClick={logout}
          className="w-full px-2 py-1 text-red-500 font-semibold border border-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          Log Out
        </button>
      </div>
      <div className="text-xl font-bold">
        <span className="mr-2">kiranamin.img</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};

export default ProfileNav;
