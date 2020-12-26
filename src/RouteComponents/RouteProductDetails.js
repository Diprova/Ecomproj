import React, { useState, useEffect } from "react";
import DashboardButton from "../Components/Home/ProductDetails/DashboardButton";
import { AiOutlineShop } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const RouteProductDetails = ({ context }) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  const dropdownItem = (
    <div
      className="dropdown-item"
      onClick={() => {
        setDropdownVisibility(false);
      }}
    >
      <p>{context.updatedCategory[5] && context.updatedCategory[5].title} </p>
      <p>{context.updatedCategory[6] && context.updatedCategory[6].title} </p>
      <p>{context.updatedCategory[7] && context.updatedCategory[7].title} </p>
    </div>
  );


  return (
    <div>
      <div className="category-header">
        <div className="market">
          <AiOutlineShop size={25} />
          <span>Super Store- 7 Kolka..</span>
        </div>
        <div className="item">
          <span>
            {context.updatedCategory[0] && context.updatedCategory[0].title}{" "}
          </span>
          <span>
            {context.updatedCategory[1] && context.updatedCategory[1].title}{" "}
          </span>
          <span>
            {context.updatedCategory[2] && context.updatedCategory[2].title}{" "}
          </span>
          <span>
            {context.updatedCategory[3] && context.updatedCategory[3].title}{" "}
          </span>
          <span>
            {context.updatedCategory[4] && context.updatedCategory[4].title}{" "}
          </span>

          <span
            onClick={() => {
              setDropdownVisibility(!dropdownVisibility);
            }}
          >
            More <MdKeyboardArrowDown size={15} className="down-Arrow" />
          </span>
        </div>
      </div>
      {dropdownVisibility && (
        <div
          onClick={() => {
            setDropdownVisibility(false);
          }}
        >
          {dropdownItem}
        </div>
      )}
      <div className="product-slot">
        <div className="category">
          <p>Fruites & Veggies</p>
          <p>Vegetables</p>
          <p>Fruits</p>
        </div>
        <div className="product-curtain">
        <h4>Fruits & Veggies</h4>
        <div className="product-card">
          {product.map((item) => {
            return (
              <div key={item._id} className="dashboardCard-content">
                <div
                  onClick={() =>
                    history.push({ pathname: "/dashboard", state: { ...item } })
                  }
                >
                  <img src={item.images[0]} alt="image" />
                  <ul style={{ listStyleType: "none", color: "#534e52" }}>
                    <li>
                      <h6>{item.productName}</h6>
                    </li>
                    <li> ₹ {item.unitPrice}</li>
                    <li>
                      {item.unitStartPoint}
                      {item.unitType}
                    </li>
                  </ul>
                </div>
                <span>
                  <DashboardButton item={item} context={context} />
                </span>
              </div>
            
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteProductDetails;
