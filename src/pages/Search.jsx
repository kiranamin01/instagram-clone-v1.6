import React, { useState } from "react";
import SearchBar from "../components/features/search/SearchBar";
import ImageGrid from "../components/features/search/ImageGrid";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <>
      <div className="max-w-[468px] mx-auto bg-white min-h-screen pb-16 dark:bg-[#121212] overflow-y-auto scrollbar-hide">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-32">
          <ImageGrid searchQuery={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default Search;
