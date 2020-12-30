import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Search = ({ setSearchVisibility, context }) => {
  const [keyPress, setKeyPress] = useState(false);
  const [index, setIndex] = useState(0);
  const products = context.updatedProducts;
  let history = useHistory();

  const keydown = (e) => {
    if (e.keyCode === 40) {
      setKeyPress(true);
      if (index >= 0 && index <= 6) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else if (e.keyCode === 38) {
      if (index >= 1 && index <= 7) {
        setIndex(index - 1);
      } else {
        setKeyPress(false);
      }
    } else {
      setSearchVisibility(false);
      if (e.keyCode === 13) {
        const item = products.find(
          (elemnt) => elemnt.productName === products[index].productName
        );
        history.push({ pathname: "/dashboard", state: { ...item } });
      }
    }
  };

  const keyEnter = (e) => {};

  const onkeyup = (e) => {
    if (e.keyCode === 27) {
      setSearchVisibility(false);
    }
  };

  return (
    <div className="wrap">
      <input
        type="search"
        placeholder={!context.item ? "Search for products" : context.item}
        value={keyPress ? products[index].productName : ""}
        onClick={() => {
          setSearchVisibility(true);
        }}
        onKeyUp={(e) => onkeyup(e)}
        onKeyDown={(e) => keydown(e)}
        onKeyPress={(e) => keyEnter(e)}
      />

      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};
export default Search;
