import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-10 max-w-[468px] mx-auto dark:bg-[#121212] text-white">
      <div className="p-4">
        <div className="relative">
          <BsSearch className="absolute left-3 top-3 text-black dark:text-white" />

          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none text-semibold
            dark:bg-gray-600 dark:text-white"
          />
        </div>
      </div>

      <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide text-black dark:text-white dark:bg-[#121212]">
        <button className="px-3 py-1.5 bg-gray-200 rounded-full text-sm whitespace-nowrap border-b border-gray-100 border-2 dark:bg-gray-400">
          Top
        </button>
        <button className="px-3 py-1.5 bg-gray-200 rounded-full text-sm whitespace-nowrap border-b border-gray-100 border-2 dark:bg-gray-400">
          Accounts
        </button>
        <button className="px-3 py-1.5 bg-gray-200 rounded-full text-sm whitespace-nowrap border-b border-gray-100 border-2 dark:bg-gray-400">
          Tags
        </button>
        <button className="px-3 py-1.5 bg-gray-200 rounded-full text-sm whitespace-nowrap border-b border-gray-100 border-2 dark:bg-gray-400">
          Places
        </button>
      </div>
    </nav>
  );
};

export default SearchBar;
