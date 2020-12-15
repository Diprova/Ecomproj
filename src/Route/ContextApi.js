import React, { Children, Component, useContext } from "react";
import Api from "../Utility/restapi";

export const AppContext = React.createContext();

const initialState = {
  cartVisibility: false,
  isAuthenticated: false,
  locationVisibility: false,
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
        this.setState({ category: [...res] });
      },
      getProduct: async () => {
        let resp = await Api.get("/api/product");
        this.setState({ products: [...resp] });
        this.setState({cart:[...resp]})
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
