import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";
import Cartcontent from "./PopupContents/Cartcontent";
import LocationContent from "./PopupContents/LocationContent";
import AuthenticationContent from "./PopupContents/AuthenticationContent";
import { AppConsumer } from "./Route/ContextApi";

const App = () => {

  
  const [cartVisibility, setCartVisibility] = useState(false);
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [authenVisibility,setAuthenVisibility]=useState(false);

  return (
    <AppConsumer>
    {(context)=>(
    <div>
      <Header
        setCartVisibility={setCartVisibility}
        cartVisibility={cartVisibility}
        setLocationVisibility={setLocationVisibility}
        setAuthenVisibility={setAuthenVisibility}
      />
      {locationVisibility && <LocationContent setLocationVisibility={setLocationVisibility} />}
      {cartVisibility && (
        <Cartcontent
          setCartVisibility={setCartVisibility}
          cartVisibility={cartVisibility}
          context={context}
        />
      )}
      {authenVisibility && <AuthenticationContent setAuthenVisibility={setAuthenVisibility}/>}
      <PrimaryRoute cartVisibility={cartVisibility} />
      <Footer />
    </div>
    )}
    </AppConsumer>
  );
};
export default App;
