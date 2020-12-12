import React from "react";
import Logo from "./Logo";
import Location from "./Location";
import Search from "./Search";
import Authentication from "./Authentication";
import MyCart from "./MyCart";
import "./Header.css";

const Header = ({setCartVisibility,cartVisibility,setLocationVisibility,setAuthenVisibility}) => {
  return (
    <div className={cartVisibility?"header opacity":"header"}>
      <Logo />

      <Location setLocationVisibility={setLocationVisibility}/>

      <Search />

      <Authentication setAuthenVisibility={setAuthenVisibility}/>

      <MyCart setCartVisibility={setCartVisibility} />
    </div>
  );
};
export default Header;