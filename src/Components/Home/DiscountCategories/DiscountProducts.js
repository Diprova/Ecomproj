import React, { useState, useEffect } from "react";
import DiscountList from "./DiscountList";

const DiscountProducts = ({context}) => {
  const [discountPrdct, setDiscoutPrdct] = useState([]);


  useEffect(() => {
    setDiscoutPrdct([...context.category]);
  }, []);
  useEffect(() => {
    if (!context.category.length) {
      context.getCategory();
    }
  }, [context.category]);


  return (
    <div>
    <h1>Best Offers on Products</h1>
      {discountPrdct.map((item1) => {
        return <DiscountList key={item1._id} item={item1} />;
      })}
    </div>
  );
};
export default DiscountProducts;