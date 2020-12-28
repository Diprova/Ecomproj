import React from "react";
import { useHistory } from "react-router-dom";

const AuthenticationContent = ({ setAuthenVisibility }) => {
  let history = useHistory();
  return (
    <div
      className="authentication-content"
      onClick={() => setAuthenVisibility(false)}
    >
      <button
        className="authentication-button"
        onClick={() => history.push("/register")}
      >
        Login or Sign Up
      </button>
    </div>
  );
};

export default AuthenticationContent;
