import React from "react";
import { FiAlignJustify } from "react-icons/fi";

const Location = ({ setLocationVisibility, context }) => {
  return (
    <div className="location" onClick={() => setLocationVisibility(true)}>
      <FiAlignJustify className="menubar" size={40}/>
      <p className="element">{context.location}</p>
    </div>
  );
};
export default Location;
