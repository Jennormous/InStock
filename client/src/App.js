import React, { Component } from 'react';
import "./styles/main.css";
import Header from "./components/Header";
import Locations from "./components/Locations";

export default class App extends Component {

  
  render() {
    return (
      <div>
        <Header />
        <Locations />
      </div>
    )
  }
}