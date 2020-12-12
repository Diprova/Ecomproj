import React from "react";
import CodeUse from "../CodeAdvertisement/CodeUse";
import DiscountProducts from "../DiscountCategories/DiscountProducts";
import EyeCatcher from "./EyeCatcher";
import Slide from "../Offers/Offers";
import ProductCard from "../ProductDetails/ProductCard";
import Category from "../Category/Category";

const Home = ({context}) => {
  console.log("huegqyGF",context);
  return (
    <>
      <Category context={context} />
      <EyeCatcher />
      <Slide />
      <ProductCard />
      <CodeUse />
      <DiscountProducts />
    </>
  );
};

export default Home;