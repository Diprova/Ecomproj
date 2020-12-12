import React from "react";
import {  Route, Switch } from "react-router";
import Dashboard from "../RouteComponents/Dashboard";
import Home from "../RouteComponents/Home";
import RouteProductDetails from "../RouteComponents/RouteProductDetails";
import "./Route.css";

const PrimaryRoute = ({cartVisibility}) => {
  return (
    <div className={cartVisibility && "opacity"}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/routeProductDetails" component={RouteProductDetails}/>
      </Switch>
    </div>
  );
};

export default PrimaryRoute;