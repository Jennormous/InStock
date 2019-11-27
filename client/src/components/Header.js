import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logo-instock.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header header__wrapper">
        <img className="header__img" src={logo} alt="logo" />
        <ul className="header__list">
          <Link className="header__list--item" to="/">
            <li>Inventory</li>{" "}
          </Link>
          <Link to="/locations">
            <li className="header__list--item">Locations</li>
          </Link>
        </ul>
      </header>
    );
  }
}
