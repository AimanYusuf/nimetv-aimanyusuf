"use client";

import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  const searchQuery = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const query = searchQuery.current.value;
    if (!query || query.trim() == "") return;

    if (e.key === "Enter") {
      return router.push(`/result/${query}`);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FiSearch className="w-4 h-4 text-gray-400" />
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        ref={searchQuery}
        onKeyDown={handleSearch}
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm rounded-md bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
