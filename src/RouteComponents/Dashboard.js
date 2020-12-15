import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "../Components/Home/ProductDetails/ProductCard";
import Category from "../Components/Category/Category";
import ProductReviews from "./ProductReviews";

const Dashboard = ({ location, context }) => {
  return (
    <>
      {location.state && <ProductReviews itemDetails={location.state} />}
      <ProductCard context={context} />
      <Category context={context} />
    </>
  );
};

export default withRouter(Dashboard);
