import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/product/${this.props.match.params.id}`)
      .then(result => {
        console.log(result.data);
        this.setState({ products: result.data }, () =>
          console.log(this.state.products)
        );
      });
  }

  render(props) {
    console.log(this.props.match.params.id);
    return (
      <div className="product__wrapper">
        <div className="product__headwrap">
          <img
            className="product__backicon"
            src={require("../../assets/Icons/SVG/Icon-back-arrow.svg")}
          />
          <h1 className="product__name texthead">
            {this.state.products.product}
          </h1>
        </div>
        <button className="product__stock">In Stock</button>
        <div className="product__textcontainer">
          <div className="product__description">
            <h3 className="product__texthead label">ITEM DESCRIPTION</h3>
            <p className="product__textbody para">
              {this.state.products.description}
            </p>
          </div>
          <div className="product__notdescription">
            <div className="product__textwrap">
              <h3 className="product__texthead label">ORDERED BY</h3>
              <p className="product__textbody para">
                {this.state.products.orderedBy}
              </p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">REFERENCE NUMBER</h3>
              <p className="product__textbody para">
                {this.state.products.reference}
              </p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LAST ORDERED</h3>
              <p className="product__textbody para">
                {this.state.products.ordered}
              </p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LOCATION</h3>
              <p className="product__textbody para">
                {this.state.products.location}
              </p>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">QUANTITY</h3>
              <p className="product__textbody para">
                {this.state.products.quantity}
              </p>
            </div>
            <div className="product__categories">
              <h3 className="product__texthead label">CATEGORIES</h3>
              <p className="product__catbody para">
                {this.state.products.categories}
              </p>
            </div>
          </div>
        </div>
        <button className="product__edit">EDIT</button>
      </div>
    );
  }
}
