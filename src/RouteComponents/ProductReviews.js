import React, { useState,useEffect } from "react";

const ProductReviews = ({ itemId, context }) => {
  const [itemDetails, setitemDetails] = useState({});

  useEffect(() => {
    let x=context.products.find((e) => e._id === itemId);
    console.log(x);
    setitemDetails({...x});
  }, []);
  console.log(itemDetails);
  console.log(itemId,context.products[0]._id);

  // useEffect(() => {

  // }, [input])

  // const {
  //   unitPrice,
  //   images,
  //   unitType,
  //   productName,
  //   unitStartPoint,
  //   rating,
  //   description,
  //   type,
  //   _id,
  //   count,
  // } = itemDetails;

  const increment = () => {
    setitemDetails({ ...itemDetails, count: itemDetails.count + 1 });
    context.increment(_id);
    context.addToCart(_id);
    context.addTotal(_id);
  };

  const decrement = () => {
    setitemDetails({ ...itemDetails, count: itemDetails.count - 1 });
    context.decrement(_id);
    count === 1 && context.removeFromCart(_id);
    context.reduceFromTotal(_id);
  };

  const addbutton = (
    <button className="cart-button" onClick={increment}>
      Add Cart
    </button>
  );

  const controlButton = (
    <div className="cart-componentButton">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
  return (
    <div>
    {itemDetails.count && 
    <div className="reviews">
    
      <div className="item-review">
        <img src={images[0]} alt="images" />
        <div className="item-rating">
          <h6>Product Details</h6>
          <p>{type}</p>
          <p>{rating}</p>
          <p>{description}</p>
        </div>
      </div>

      <div>
        <p className="review-categoryName">{productName}</p>
        <p>
          Product MRP: <span className="productPrice">₹{unitPrice}</span>
        </p>
        <p>
          <span className="taxes">Inclusive of all taxes</span>
        </p>
        <p>
          <span className="taxes">Available In:</span>
        </p>
        <div className="quantity">
          {unitStartPoint}
          {unitType}
        </div>
        {!count ? addbutton : controlButton}
      </div>
    </div>
  }</div>
  );
};

export default ProductReviews;
