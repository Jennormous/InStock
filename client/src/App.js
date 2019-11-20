import React, { Component } from 'react';
import "./styles/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";

export default class App extends Component {

  
  render() {
    return (
      <div>
        <Header />
        <Inventory warehouses={this.state.warehouses} />
        <Locations locations={this.state.locations} />
      </div>
    )
  }
}