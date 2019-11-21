import React, { Component } from "react";
import { Link } from "react-router-dom";
import backAr from "../../assets/Icons/SVG/Icon-back-arrow.svg";

export default class Warehouse extends Component {
  render() {
    // const warehouseInfo =
    //   this.props.warehouses &&
    //   this.props.warehouses.map(function(warehouse) {
    //     return <div></div>;
    //   });
    const warehouse = this.props.locations[0];
    return (
      <div>
        <div>
          <Link to="/locations">
            <img src={backAr} alt="go back" />
          </Link>
          <h1>{warehouse.warehouse}</h1>
        </div>
        <div>
          <div>
            <h4>Address</h4>
            <div>
              <h3>{warehouse.address}</h3>
            </div>

            <div>
              <h3>
                {warehouse.city}, {warehouse.province}
              </h3>
              <h3>
                {warehouse.postal}, {warehouse.country}
              </h3>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <h3>{warehouse.contact}</h3>
              <h3>{warehouse.title}</h3>
            </div>
            <div>
              <h3>{warehouse.phone}</h3>
              <h3>{warehouse.email}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
