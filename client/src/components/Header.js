import React, { Component } from "react";
import logo from "../assets/Logo/Logo-instock.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header header__wrapper">
        <img className="header__img" src={logo} alt="logo" />
        <ul className="header__list">
          <li className="header__list--item active">Inventory</li>
          <li className="header__list--item">Locations</li>
        </ul>
      </header>
    );
  }
}
