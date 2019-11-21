import React, { Component } from "react";
import { Link } from "react-router-dom";
import backAr from "../../assets/Icons/SVG/Icon-back-arrow.svg";

export default class Warehouse extends Component {
  render() {
    const warehouseInfo =
      this.props.warehouses &&
      this.props.warehouses.map(function(warehouse) {
        return <div></div>;
      });

    return (
      <div>
        <div>
          <Link to="/locations">
            <img src={backAr} alt="go back" />
          </Link>
          <h1>{this.props.warehouses[0].warehouse}</h1>
        </div>
        <div>{warehouseInfo}</div>
      </div>
    );
  }
}
