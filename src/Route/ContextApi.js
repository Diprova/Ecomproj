import React, { Children, Component, useContext } from "react";
import Api from "../Utility/restapi";

export const AppContext = React.createContext();

const initialState = {
  user: {},
  category: [],
  updatedCategory: [],
  cart: [],
  products: [],
  updatedProducts: [],
  count: 0,
  total: 0,
  item: "",
};

export class ContextApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      location: "Select city",
      getCategory: async () => {
        let res = await Api.get("/api/category");
        this.setState({ category: [...res], updatedCategory: [...res] });
      },
      getProduct: async () => {
        let resp = await Api.get("/api/product");
        this.setState({ products: [...resp], updatedProducts: [...resp] });
      },
      
      getItem: (id) => {
        const selectedProduct = this.state.updatedProducts.findIndex(
          (ele) => ele._id === id
        );
        return selectedProduct;
      },

      showItem: (item) => {
        const showitem = this.state.updatedProducts.find(
          (ele) => ele.productName === item
        );
        this.setState({ item: showitem.productName });
      },

      increment: (id) => {
        const productIndex = this.state.getItem(id);
        const product = this.state.updatedProducts[productIndex];
        product.count = product.count ? product.count + 1 : 1;

        this.setState({
          updatedProducts: [
            ...this.state.updatedProducts.slice(0, productIndex),
            product,
            ...this.state.updatedProducts.slice(productIndex + 1),
          ],
        });
      },

      decrement: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          product.count = product.count ? product.count - 1 : 1;

          this.setState({
            updatedProducts: [
              ...this.state.updatedProducts.slice(0, productIndex),
              product,
              ...this.state.updatedProducts.slice(productIndex + 1),
            ],
          });
        }
      },
      addToCart: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          let cart = [...this.state.cart];
          if (product.count === 1) {
            cart.push(product);
            this.setState({ cart });
          }
        }
      },
      removeFromCart: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          const cart = this.state.cart;
          cart.pop(product);
          this.setState({ cart: cart });
        }
      },
      addTotal: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          product.total = product.count * product.unitPrice;

          this.setState({
            updatedProducts: [
              ...this.state.updatedProducts.slice(0, productIndex),
              product,
              ...this.state.updatedProducts.slice(productIndex + 1),
            ],
          });
        }
      },
      reduceFromTotal: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          product.total = product.count * product.unitPrice;

          this.setState({
            updatedProducts: [
              ...this.state.updatedProducts.slice(0, productIndex),
              product,
              ...this.state.updatedProducts.slice(productIndex + 1),
            ],
          });
        }
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
