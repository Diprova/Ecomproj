import React from "react";
import { useHistory } from "react-router-dom";
import { RiLayoutRight2Line } from "react-icons/ri";

const AuthenticationContent = ({ setAuthenVisibility }) => {
  let history = useHistory();
  return (
    <div
      className="authentication-content"
      onClick={() => setAuthenVisibility(false)}
    >
    <div>
      <button
        className="authentication-button"
        onClick={() => history.push("/register")}
      >
        Login or Sign Up
      </button>
      </div>
      <div>
      <p onClick={()=>window.scroll(0,300)}><RiLayoutRight2Line/><span>Offers</span></p>
      </div>
      
    </div>
  );
};

export default AuthenticationContent;
