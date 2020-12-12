import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "../Components/ProductDetails/ProductCard";
import AddElements from "../Components/SubAdvertisingElements/AddElements";
import ProductReviews from "./ProductReviews";

const Dashboard = ({ location }) => {
  // console.log(noofitems);
  console.log(location);
  return (
    <>
     {location.state && <ProductReviews itemDetails={location.state} />} 
      <ProductCard />
      <AddElements />
    </>
  );
};

export default withRouter(Dashboard);