import React, { useState } from "react";

const ProductButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrmntBtn = () => {
    if (count >= 0) {
      return setCount(count + 1);
    }
  };

  const handleDcrmntBtn = () => {
    if (count >= 1) {
      return setCount(count - 1);
    }
  };

  const addbtn = (
    <button className="addbtn" onClick={handleIncrmntBtn}>
      Add
    </button>
  );

  const cntrlbtn = (
    <div className="cntrlbtn">
      <button className="dcrmntbtn" onClick={handleDcrmntBtn}>
        -
      </button>
      <span className="spanCount">{count}</span>
      <button className="incrmntbtn" onClick={handleIncrmntBtn}>
        +
      </button>
    </div>
  );
  return <div>{!count ? addbtn : cntrlbtn}</div>;
};

export default ProductButton;