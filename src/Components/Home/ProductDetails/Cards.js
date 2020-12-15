import React from "react";
import ProductButton from "./ProductButton";
import { useHistory } from "react-router-dom";
// import Dashboard from "../../RouteComponents/Dashboard";

const Cards = ({ item }) => {
  const { productName, images, unitPrice, unitType, unitStartPoint } = item;

  let history = useHistory();

  return (
    <div className="cards">
      <div className="cardsContent">
        <img
          src={images[0]}
          alt="images"
          onClick={() =>
            history.push({ pathname: "/dashboard", state: { ...item } })
          }
        />

        <ul style={{ listStyleType: "none", color: "#534e52" }}>
          <li>
            <h6>{productName}</h6>
          </li>
          <li> ₹ {unitPrice}</li>
          <li>
            {unitStartPoint}
            {unitType}
          </li>
        </ul>
      </div>
      <ProductButton />
    </div>
  );
};
export default Cards;