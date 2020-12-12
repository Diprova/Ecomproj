import React from "react";
import "./Reviews.css";

const ProductReviews = ({ itemDetails }) => {
  const {
    unitPrice,
    images,
    unitType,
    category,
    unitStartPoint,
  } = itemDetails;

  console.log(itemDetails);
  
  return (
    <div className="reviews">
      <img src={images[0]} alt="images" />
      <div>
        <h1>{category}</h1>
        <p>
          Product MRP:{" "}
          <span className="productPrice">
            ₹{unitPrice}/{unitStartPoint}
            {unitType}
          </span>
        </p>
        <p>
          <span className="taxes">Inclusive of all taxes</span>
        </p>
        <p>
          <span className="taxes">Available In:</span>
        </p>
        <button className="cart-button">Add Cart</button>
      </div>
    </div>
  );
};

export default ProductReviews;