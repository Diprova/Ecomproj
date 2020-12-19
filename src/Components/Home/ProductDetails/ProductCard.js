import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "../home.css";
import { useHistory } from "react-router-dom";

const ProductCard = ({ context }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  let history = useHistory();
  return (
    <div className="product-details">
      <div className="product-link">
        <h2>Fruits & Veggies</h2>
        <button
          className="see-all-btn"
          onClick={() => history.push({ pathname: "/routeProductDetails" })}
        >
          See all
        </button>
      </div>
      <div className="productCard">
        {product.map((item) => {
          return <Cards key={item._id} item={item} context={context} />;
        })}
      </div>
    </div>
  );
};
export default ProductCard;
