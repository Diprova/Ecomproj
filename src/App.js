import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";
import Cartcontent from "./Components/Navbar/Cartcontent";
import LocationContent from "./Components/Navbar/LocationContent";
import AuthenticationContent from "./Components/Navbar/AuthenticationContent";

const App = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [authenVisibility,setAuthenVisibility]=useState(false);

  return (
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
        />
      )}
      {authenVisibility && <AuthenticationContent setAuthenVisibility={setAuthenVisibility}/>}
      <PrimaryRoute cartVisibility={cartVisibility} />
      <Footer />
    </div>
  );
};
export default App;
