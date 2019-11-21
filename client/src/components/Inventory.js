import React, { Component } from "react";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";

export default class Inventory extends Component {
  render() {
    const inventory =
      this.props.warehouses &&
      this.props.warehouses.map(products => {
        return products.items.map(function(item) {
          console.log(products);
          return (
            <div className="mobiletags" key={item.id}>
              <div className="mobiletags__item">
                <p className="label">ITEM</p>
                <img
                  className="mobiletags__vertdots"
                  src={kebab}
                  alt="dots boi"
                />
              </div>
              <div id="product" className="mobiletags__subsec">
                <h3
                  id="product__name"
                  className="mobiletags__subsec--tag subheader"
                >
                  {item.product}
                </h3>
                <p
                  id="product__description"
                  className="mobiletags__subsec--value para"
                >
                  {item.description}
                </p>
              </div>
              <div id="lastorder" className="mobiletags__subsec">
                <p className="mobiletags__subsec--tag label">LAST ORDERED</p>
                <p className="mobiletags__subsec--value para">{item.ordered}</p>
              </div>
              <div id="location" className="mobiletags__subsec">
                <p className="mobiletags__subsec--tag label">LOCATION</p>
                <p className="mobiletags__subsec--value para">
                  {products.city}, {products.country}
                </p>
              </div>
              <div id="quantity" className="mobiletags__subsec">
                <p className="mobiletags__subsec--tag label">QUANTITY</p>
                <p className="mobiletags__subsec--value para">
                  {item.quantity}
                </p>
              </div>
              <div id="status" className="mobiletags__subsec">
                <p className="mobiletags__subsec--tag label">STATUS</p>
                <p className="mobiletags__subsec--value para">{item.status}</p>
              </div>
              <div className="largetags">
                <img
                  className="largetags__dots"
                  src={kebab}
                  alt="dots thingy"
                />
              </div>
            </div>
          );
        });
      });
    return (
      <div className="inventory">
        <div className="inventory__top-section">
          <h1 className="texthead inventory__top-section--title">Inventory</h1>
          <form className="inventory__inputwrap" onKeyUp>
            <input
              type="text"
              name="searchbar"
              placeholder="Search"
              className="inventory__top-section--search"
            />
          </form>
        </div>
        <div>
          <div className="largetags largetags__wrapper">
            <p className="label largetags__item">ITEM</p>
            <p className="label largetags__order">LAST ORDERED</p>
            <p className="label largetags__location">LOCATION</p>
            <p className="label largetags__quantity">QUANTITY</p>
            <p className="label largetags__status">STATUS</p>
          </div>
          {inventory}
        </div>
      </div>
    );
  }
}
