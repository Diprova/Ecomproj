import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SearchContent from "../../PopupContents/SearchContent";
import { AppConsumer } from "../../Route/ContextApi";

const Search = ({ setSearchVisibility }) => {
  const onkeyup = (e) => {
    if (e.keyCode === 27) {
      setSearchVisibility(false);
    }
  };
  return (
    <div className="wrap">
      <input
        type="search"
        placeholder="Search for products"
        onClick={() => {
          setSearchVisibility(true);
        }}
        onKeyUp={(e) => onkeyup(e)}
      />

      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};
export default Search;
