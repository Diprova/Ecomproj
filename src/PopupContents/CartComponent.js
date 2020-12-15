import React, { useState, useEffect } from "react";
import grofers from "../assets/grofersLogo.png";
import "../App.css";

const CartComponent = ({ context }) => {
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setItem([...context.cart]);
  }, []);
  useEffect(() => {
    if (!context.cart.length) {
      context.getProduct();
    }
  }, [context.cart]);
  console.log(item);

  return (
    <div>
      {item.map((element, i) => {
        return(<div className="cart-component" key={i}>
          <div className="cart-componentContent">
            <img src={element.images[0]} alt="img" />
            <h4>{element.productName}</h4>
          </div>
          <div className="cart-componentButton">
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
          </div>
        </div>);
      })}
    </div>
  );
};

export default CartComponent;
