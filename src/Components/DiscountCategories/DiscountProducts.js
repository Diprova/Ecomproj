import React, { useState, useEffect } from "react";
import DiscountList from "./DiscountList";
import "./Discount.css";
import Api from "../../Utility/restapi";

const DiscountProducts = () => {
  const [discountPrdct, setDiscoutPrdct] = useState([]);

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    let res = await Api.get("/api/category");
    console.log(res);
    setDiscoutPrdct(res);
  };


  return (
    <div>
      {discountPrdct.map((item1) => {
        return <DiscountList key={item1._id} item={item1} />;
      })}
    </div>
  );
};
export default DiscountProducts;