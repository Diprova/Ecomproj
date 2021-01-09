import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchContent = ({ products, setSearchVisibility, searchVisibility }) => {
  const showHideClassName = searchVisibility
    ? "modal display-block"
    : "modal display-none";

  let history = useHistory();

  console.log(products);
  
  let product3 = products.find(
    (obj) => obj.productName === "Pachabale Banana"
  );

  const mousehover = (e) => {
    context.showItem(e);
  };

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        setSearchVisibility(false);
      }}
    >
      <div className="search-content container">
        <div className="trending-template">TRENDING</div>
        {products.map((element, index) => {
          return (
            <div
              className="search-productContent"
              onMouseOver={(e) => mousehover(element.productName)}
              onClick={() =>
                history.push({ pathname: "/dashboard", state: { ...element } })
              }
              onMouseLeave={null}
              key={index}
            >
              <img src={element.images[0]} alt="img" className="search-img" />
              <span className="search-productName">{element.productName}</span>
            </div>
          );
        })}
        <div className="trending-template">FREQUENT SEARCHES</div>
        <div className="search-productContent">
          <img src={product3.images[0]} alt="img" className="search-img" />
          <span className="search-productName">{product3.productName}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
