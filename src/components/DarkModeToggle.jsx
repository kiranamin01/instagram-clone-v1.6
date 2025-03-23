import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black flex justify-center items-center space-x-2"
    >
      {isDarkMode ? (
        <MdLightMode className="mx-2" />
      ) : (
        <MdDarkMode className="mx-2" />
      )}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
