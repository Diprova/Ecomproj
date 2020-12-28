import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ setSearchVisibility, context }) => {
  const onkeyup = (e) => {
    if (e.keyCode === 27) {
      setSearchVisibility(false);
    }else if(e.keyCode===40){
      context.showItem(e);
    }
  };
  console.log(context.item);
    

  return (
    <div className="wrap">
      <input
        type="search"
        placeholder={!context.item?"Search for products":context.item}
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
