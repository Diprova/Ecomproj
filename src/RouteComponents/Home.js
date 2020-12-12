import React from "react";
import CodeUse from "../Components/CodeAdvertisement/CodeUse";
import DiscountProducts from "../Components/DiscountCategories/DiscountProducts";
import EyeCatcher from "../Components/EyeCatcher/EyeCatcher";
import Slide from "../Components/Offers/Offers";
import ProductCard from "../Components/ProductDetails/ProductCard";
import AddElements from "../Components/SubAdvertisingElements/AddElements";

const Home = () => {
  return (
    <>
      <AddElements />
      <EyeCatcher />
      <Slide />
      <ProductCard />
      <CodeUse />
      <DiscountProducts />
    </>
  );
};

export default Home;