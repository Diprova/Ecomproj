import React, { useState } from "react";
import Logo from "./Logo";
import Location from "./Location";
import Search from "./Search";
import LocationContent from "../../PopupContents/LocationContent";
import Cartcontent from "../../PopupContents/Cartcontent";
import AuthenticationContent from "../../PopupContents/AuthenticationContent";
import SearchContent from "../../PopupContents/SearchContent";
import Authentication from "./Authentication";
import MyCart from "./MyCart";
import "../../App.css";
import { AppConsumer } from "../../Route/ContextApi";
import Categories from "./Categories";

const Header = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [authenVisibility, setAuthenVisibility] = useState(false);

  return (
    <AppConsumer>
      {(context) => (
        <div className="header">
          <Logo />

          <Location
            setLocationVisibility={setLocationVisibility}
            context={context}
          />
          {locationVisibility && (
            <LocationContent
              setLocationVisibility={setLocationVisibility}
              context={context}
            />
          )}

          <Search setSearchVisibility={setSearchVisibility} context={context} />
          {searchVisibility && (
            <SearchContent
              context={context}
              setSearchVisibility={setSearchVisibility}
            />
          )}

          <Authentication setAuthenVisibility={setAuthenVisibility} />
          {authenVisibility && (
            <AuthenticationContent setAuthenVisibility={setAuthenVisibility} />
          )}

          <MyCart setCartVisibility={setCartVisibility} />
          {cartVisibility && (
            <Cartcontent
              setCartVisibility={setCartVisibility}
              context={context}
            />
          )}

          <Categories />
        </div>
      )}
    </AppConsumer>
  );
};
export default Header;
