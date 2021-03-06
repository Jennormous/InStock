import React, { Component } from "react";
import axios from "axios";

export default class ProductEdit extends Component {
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
      <form className="product__wrapper">
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
            <label className="product__texthead label">ITEM DESCRIPTION</label>
            <input
              type="text"
              className="product__input para"
              value={this.state.products.description}
            />
          </div>
          <div className="product__notdescription">
            <div className="product__textwrap">
              <h3 className="product__texthead label">ORDERED BY</h3>
              <input type="text" className="product__input para">
                {this.state.products.orderedBy}
              </input>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">REFERENCE NUMBER</h3>
              <input type="text" className="product__input para">
                {this.state.products.reference}
              </input>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LAST ORDERED</h3>
              <input type="text" className="product__input para">
                {this.state.products.ordered}
              </input>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">LOCATION</h3>
              <input type="text" className="product__input para">
                {this.state.products.location}
              </input>
            </div>
            <div className="product__textwrap">
              <h3 className="product__texthead label">QUANTITY</h3>
              <input type="text" className="product__input para">
                {this.state.products.quantity}
              </input>
            </div>
            <div className="product__categories">
              <h3 className="product__texthead label">CATEGORIES</h3>
              <input type="text" className="product__catbody para">
                {this.state.products.categories}
              </input>
            </div>
          </div>
        </div>
        <button className="product__edit">SAVE</button>
      </form>
    );
  }
}
