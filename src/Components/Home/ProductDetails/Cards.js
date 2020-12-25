import React,{useEffect} from "react";
import ProductButton from "./ProductButton";
import { useHistory } from "react-router-dom";

const Cards = ({ item, context }) => {
  const { productName, images, unitPrice, unitType, unitStartPoint } = item;
  let history = useHistory();
useEffect(()=>{
  item.count
},[])
  useEffect(()=>{
     item.count
  },[item.count])

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

        <ProductButton context={context} item={item} />
      </div>
      <div className="emergency-update">v</div>
    </div>
  );
};
export default Cards;
