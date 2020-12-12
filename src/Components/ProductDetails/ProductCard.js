import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./ProductDetails.css";
import Api from "../../Utility/restapi";
import {useHistory} from "react-router-dom";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    let res = await Api.get("/api/product");
    console.log(res);
    setProduct(res);
  };

  let history = useHistory();

  return (
    <div className="product-details">
    <div className="product-link">
      <h2>Fruits & Veggies</h2>
      <button className="see-all-btn" onClick={()=>history.push({pathname:"/routeProductDetails"})}>See all</button>
      </div>
      <div className="productCard">
        {product.map((item, index) => {
          return <Cards key={index} item={item} />;
        })}
      </div>
    
    </div>
  );
};
export default ProductCard;
