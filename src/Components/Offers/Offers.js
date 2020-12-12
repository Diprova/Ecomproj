import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Offers.css";
import maggi from "../../assets/maggi.jpg";
import aata from "../../assets/AashirvaadAata.jpg";
import tide from "../../assets/Tide.jpg";
import harpic from "../../assets/harpic.jpg";
import sanitizer from "../../assets/Sanitizer.jpeg";

const Offers = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const productDetails = [
  {
    currentPrice: "130",
    oldPrice: "139",
    image: maggi,
    quantity: "12 * 70g",
  },
  { currentPrice: "331", oldPrice: "375", image: aata, quantity: "10kg" },
  {
    currentPrice: "690",
    oldPrice: "724",
    image: tide,
    quantity: "7kg + 3kg",
  },
  {
    currentPrice: "138",
    oldPrice: "154",
    image: harpic,
    quantity: "1 litre",
  },
  {
    currentPrice: "221",
    oldPrice: "228",
    image: sanitizer,
    quantity: "500ml",
  },
];

const Slide = () => {
  return (
    <div className="offerContainer">
      <Carousel responsive={Offers}>
        {productDetails.map((item, index) => {
          return (
            <div key={index}>
              <div className="header2">
                <h6>Our Price</h6>
                <h5> ₹ {item.currentPrice}</h5>
                <h6>
                  MRP ₹<span className="oldPriceClass">{item.oldPrice}</span>
                </h6>
              </div>
              <div>
                <img
                  src={item.image}
                  alt="images"
                  className="offerContainerImage"
                />
              </div>
              <div className="footer">{item.quantity}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;