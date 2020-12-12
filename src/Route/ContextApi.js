import React, { Children, Component, useContext } from "react";
import Api from "../Utility/restapi";

export const AppContext = React.createContext();

const initialState = {
  cartVisibility: false,
  isAuthenticated: false,
  user: {},
  location: " ",
  category: [],
  cart: [],
  products: [],
};

export class ContextApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      location: "kolkata",
      getCategory: async () => {
        let res = await Api.get("/api/category");
        console.log("hfq,..",res);
        this.setState({ category: [...res] });
      },
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
