import React, { Component } from "react";
import arRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Locations extends Component {
  render() {
    const locationInfo =
      this.props.locations &&
      this.props.locations.map(function(location) {
        return (
          <div className="locations">
            <div className="locations__loc">
              <div className="locations__loc--text">
                <h3 className="subheader">{location.warehouse}</h3>
                <h4 className="para">{location.location}</h4>
              </div>
              <img className="locations__loc--img" src={arRight} />
            </div>
            <div className="locations__person">
              <h3 className="para">{location.contact}</h3>
              <h3 className="para">{location.title}</h3>
            </div>
            <div className="locations__contact">
              <h3 className="para">{location.phone}</h3>
              <h3 className="para">{location.email}</h3>
            </div>
            <div className="locations__cat">
              <h3 className="para">{location.categories}</h3>
            </div>
          </div>
        );
      });

    return (
      <div className="locations">
        <div className="locations__top-section">
          <h1 className="locations__top-section--title texthead">Locations</h1>
          <form onKeyUp>
            <input
              type="text"
              name="searchbar"
              placeholder="Search"
              className="locations__top-section--search"
            />
          </form>
        </div>
        {locationInfo}
      </div>
    );
  }
}
