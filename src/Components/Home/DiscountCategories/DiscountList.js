import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DiscountCard from "./DiscountCard";
import { MdKeyboardArrowUp } from "react-icons/md";

const DiscountList = ({ item }) => {
  const [btnState, setbtnState] = useState(true);
  const { images, productName, description } = item;
  console.log(item);

  const handleClickOn = () => {
    return setbtnState(!btnState);
  };

  return (
    <div className="discountlistContainer">
      <div
        className={btnState ? "discountList inactive" : "discountList active"}
      >
        <img src={images[0]} alt="images" />
        <div className="listDetails">
          <p>{productName}</p>
          <p>{description}</p>
        </div>
      </div>
      <div
        className={btnState ? "listbtn inactive" : "listbtn active"}
        onClick={handleClickOn}
      >
        {btnState ? (
          <MdKeyboardArrowDown size={35} />
        ) : (
          <MdKeyboardArrowUp size={35} />
        )}
        </div>
        {btnState ? null : <DiscountCard />}
      </div>
  );
};
export default DiscountList;
