import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextApi } from "./Route/ContextApi";

ReactDOM.render(
  <ContextApi>
    <Router>
      <App />
    </Router>
  </ContextApi>,
  document.getElementById("root")
);
