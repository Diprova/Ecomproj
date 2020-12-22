import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SearchContent from "../../PopupContents/SearchContent";
import { AppConsumer } from "../../Route/ContextApi";

const Search = ({setSearchVisibility}) => {
  return (
    <div className="wrap">
      <input
        type="search"
        placeholder="Search for products"
        onClick={()=>{setSearchVisibility(true)}}
      />

      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};
export default Search;
