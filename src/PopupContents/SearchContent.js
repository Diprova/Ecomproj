import React, { useState, useEffect } from "react";

const SearchContent = ({ context, setSearchVisibility }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  let product3 = context.updatedProducts.find(
    (obj) => obj.productName === "Pachabale Banana"
  );

  const mousehover = (e) => {
    context.showItem(e);
  };
 

  return (
    <div
      className="search-content"
      onClick={() => {
        setSearchVisibility(false);
      }}
    >
      <div className="trending-template">TRENDING</div>
      {product.map((element, index) => {
        return (
          <div
            className="search-productContent"
            onMouseOver={(e) => mousehover(element.productName)}
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
  );
};

export default SearchContent;
