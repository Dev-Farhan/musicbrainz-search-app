import React from "react";
import { FaSearch } from "react-icons/fa";


const Searchbar = ({ query, setQuery, onSearch,title }) => {

  return (
    <div className="w-full max-w-7xl  mt-10">
      <h1 className="text-3xl font-semibold mb-4">Search {title}</h1>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-l-lg focus:outline-none "
        />
        <div className='border p-2.5 border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 transition' onClick={() => onSearch(query)}>
        <FaSearch className=" text-xl text-gray-600 "   />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
