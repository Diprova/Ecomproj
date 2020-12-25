import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import PrimaryRoute from "./Route/PrimaryRoute";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <PrimaryRoute />
      <Footer />
    </>
  );
};
export default App;
