import React, { useState } from "react";
import SearchBar from "../components/features/search/SearchBar";
import ImageGrid from "../components/features/search/ImageGrid";
import AccountGrid from "../components/features/search/AccountGrid";
import PlaceGrid from "../components/features/search/PlaceGrid";
import TagGrid from "../components/features/search/TagGrid";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Photos");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-[468px] mx-auto bg-white min-h-screen pb-16 dark:bg-[#121212] overflow-y-auto scrollbar-hide">
      <SearchBar
        onSearch={handleSearch}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="mt-28">
        {activeTab === "Photos" && <ImageGrid searchQuery={searchTerm} />}
        {activeTab === "Accounts" && <AccountGrid searchQuery={searchTerm} />}
        {activeTab === "Tags" && <TagGrid searchQuery={searchTerm} />}
        {activeTab === "Places" && <PlaceGrid searchQuery={searchTerm} />}
      </div>
    </div>
  );
};

export default Search;
