import React, { Component } from "react";
import { Link } from "react-router-dom";
import backAr from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";

export default class Warehouse extends Component {
  render() {
    const warehouse = this.props.locations[0];
    return (
      <div className="warehouse">
        <div className="warehouse__subheader">
          <Link className="warehouse__subheader--link" to="/locations">
            <img src={backAr} alt="go back" />
          </Link>
          <h1 className="warehouse__subheader--title">{warehouse.warehouse}</h1>
        </div>
        <div className="warehouse__info">
          <div className="warehouse__address">
            <h4 className="label">Address</h4>
            <div className="warehouse__address--street">
              <h4 className="para">{warehouse.address}</h4>
            </div>

            <div className="warehouse__address--other">
              <h4 className="para">
                {warehouse.city}, {warehouse.province}
              </h4>
              <h4 className="para">
                {warehouse.postal}, {warehouse.country}
              </h4>
            </div>
          </div>
          <div className="warehouse__contact">
            <h4 className="label">Contact</h4>
            <div className="warehouse__contact--name">
              <h4 className="para">{warehouse.contact}</h4>
              <h4 className="para">{warehouse.title}</h4>
            </div>
            <div className="warehouse__contact-info">
              <h4 className="para">{warehouse.phone}</h4>
              <h4 className="para">{warehouse.email}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
