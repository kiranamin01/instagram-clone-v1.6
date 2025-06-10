import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch, activeTab, onTabChange }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

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
      <section className="searchbar p-4">
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
      </section>

      <section className="searchoption">
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide text-black dark:text-white dark:bg-[#121212]">
          <button
            onClick={() => onTabChange("Photos")}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap border-2 ${
              activeTab === "Photos"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-400"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => onTabChange("Accounts")}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap border-2 ${
              activeTab === "Accounts"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-400"
            }`}
          >
            Accounts
          </button>
          <button
            onClick={() => onTabChange("Tags")}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap border-2 ${
              activeTab === "Tags"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-400"
            }`}
          >
            Tags
          </button>
          <button
            onClick={() => onTabChange("Places")}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap border-2 ${
              activeTab === "Places"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-400"
            }`}
          >
            Places
          </button>
        </div>
      </section>
    </nav>
  );
};

export default SearchBar;
