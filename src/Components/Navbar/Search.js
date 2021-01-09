import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import SearchContent from "../../PopupContents/SearchContent";

const Search = ({ context }) => {
  const [keyPress, setKeyPress] = useState(false);
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState([]);
  let history = useHistory();

  useEffect(() => {
    setProduct([...context.products]);
    console.log("product",product);
    console.log("Contextproduct",context.products);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);



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
      if (e.keyCode === 13) {
        const item = product.find(
          (elemnt) => elemnt.productName === product[index].productName
        );
        history.push({ pathname: "/dashboard", state: { ...item } });
      }
    }
  };

  const onkeyup = (e) => {
    if (e.keyCode === 27) {
    }
  };

  return (
    <div className="wrap">
      <div className="category-btn">
        <button>Categories</button>
      </div>
      <input
        type="search"
        placeholder={!context.item ? "Search for products" : context.item}
        value={keyPress && !product.length ? product[index].productName : ""}
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
