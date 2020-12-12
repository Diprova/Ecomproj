import React from "react";

const Location = ({setLocationVisibility}) => {
  return (
    <div className="location" onClick={()=>setLocationVisibility(true)}>
      <p className="element" >Select City</p>
    </div>
  );
};
export default Location;