import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import DiscountCard from "./DiscountCard";
import { BsArrowUp } from "react-icons/bs";

const DiscountList = ({ item }) => {
  const [btnState, setbtnState] = useState(true);
  const { image, title } = item;

  const handleClickOn = () => {
    return setbtnState(!btnState);
  };

  return (
    <div className="discountlistContainer">
      <div className="discountList">
        <img src={image} alt="images" />
        <div className="listDetails">
          <p>{title}</p>
        </div>
      </div>
      <div className="listbtn" onClick={handleClickOn}>
        {btnState ? <BsArrowDown size={21} /> : <BsArrowUp size={21} />}
      </div>
      {btnState ? null : <DiscountCard />}
    </div>
  );
};
export default DiscountList;
