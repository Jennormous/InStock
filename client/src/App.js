import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Product from "./components/Product";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
      </div>
    );
  }
}
