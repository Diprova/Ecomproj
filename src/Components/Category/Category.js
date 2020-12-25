import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import AddCard from "./CategoryCard";

const Offers = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Category = ({ context }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem([...context.category]);
  }, []);
  useEffect(() => {
    if (!context.category.length) {
      context.getCategory();
    }
  }, [context.category]);

  return (
    <div className="carousel">
      <Carousel responsive={Offers}>
        {item.map((element) => (
          <AddCard key={element._id} element={element} />
        ))}
      </Carousel>
    </div>
  );
};
export default Category;
