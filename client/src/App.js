import React, { Component } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";
import Warehouse from "./components/locations/Warehouse";
import ProductSum from "./components/inventory/ProductSum";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ProductEdit from "./components/inventory/ProductEdit";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouses: [],
      locations: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/location").then(result => {
      console.log(result);
      this.setState({ locations: result.data });
    });
    axios.get("http://localhost:5000/warehouse").then(result => {
      console.log(result);
      this.setState({ warehouses: result.data });
    });
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route
            path="/"
            exact
            render={props => <Inventory warehouses={this.state.warehouses} />}
          />

          <Route
            path="/locations"
            render={props => (
              <Locations
                locations={this.state.locations}
                warehouses={this.state.warehouses}
              />
            )}
          />

          <Route
            path="/warehouse"

            render={props => (
              <Warehouse
                locations={this.state.locations}
                warehouses={this.state.warehouses}
              />
            )}
          />

          <Route
            path="/product/:id"
            render={props => (
              <ProductSum data={this.state.products} {...props} />
            )}
          />

          <Route
            path="/product/edit"
            render={props => (
              <ProductEdit data={this.state.products} {...props} />
            )}

          />
        </Switch>
      </div>
    );
  }
}
