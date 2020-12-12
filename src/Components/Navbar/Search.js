import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="wrap">
      <input type="search" placeholder="Search for products" />
      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};
export default Search;