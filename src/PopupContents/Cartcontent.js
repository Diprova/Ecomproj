import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CartComponent from "./CartComponent";

const Cartcontent = ({ setCartVisibility, cartVisibility, context }) => {
  const cart = context.cart;
  return (
    <>
      <div className="cart-content">
        <button
          className="cartcontent-button"
          onClick={() => setCartVisibility(false)}
        >
          My Cart
          <AiOutlineArrowRight />
        </button>
        <div className="cart-total">
          <h3>Cart Total: {cart.reduce((n, { total }) => n + total, 0)}</h3>
          <p>Delivery Charges:  ₹ 49</p>
          <div>Subtotal : {cart.reduce((n, { total }) => n + total +49, 0)}</div>
        </div>

        <CartComponent context={context} />
        <button
          className="shopping-button"
          onClick={() => setCartVisibility(false)}
        >
          Start Shopping
        </button>
      </div>
    </>
  );
};

export default Cartcontent;
