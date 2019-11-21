import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="product__wrapper">
        <div className="product__headwrap">
          <img
            className="product__backicon"
            src={require("../assets/Icons/SVG/Icon-back-arrow.svg")}
          />
          <h1 className="product__name texthead">Product Name</h1>
        </div>
        <button className="product__stock">In Stock</button>
        <div className="product__textcontainer">
          <div className="product__description">
            <h3 className="product__texthead label">ITEM DESCRIPTION</h3>
            <p className="product__textbody para">
              Here is a more detailed summary of the product name, it’s uses,
              industries and possible attributes that could be used to describe
              the product.
            </p>
          </div>
          <div className="product__notdescription">
            <div className="product__textwrap">
              <h3 className="product__texthead label">ORDERED BY</h3>
              <p className="product__textbody para">Mark Saunders</p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">REFERENCE NUMBER</h3>
              <p className="product__textbody para">JK2020FD7811201</p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LAST ORDERED</h3>
              <p className="product__textbody para">5/24/2018</p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LOCATION</h3>
              <p className="product__textbody para">Toronto, CAN</p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">QUANTITY</h3>
              <p className="product__textbody para">12000</p>
            </div>
            <div className="product__categories">
              <h3 className="product__texthead label">CATEGORIES</h3>
              <p className="product__catbody para">
                Industrial, Automotive, Heavy, Mechanical, Engineering,
                Transportation, Sales
              </p>
            </div>
          </div>
        </div>
        <button className="product__edit">EDIT</button>
      </div>
    );
  }
}
