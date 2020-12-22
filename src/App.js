import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <PrimaryRoute />
      <Footer />
    </div>
  );
};
export default App;
