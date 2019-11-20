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
            <div key={item.id}>
              <div className="mobiletags">
                <p className="label">ITEM</p>
                <img src={kebab} alt="dots boi" />
              </div>
              <div>
                <h3 className="subheader">{item.product}</h3>
                <p className="para">{item.description}</p>
              </div>
              <p className="label mobiletags">LAST ORDERED</p>
              <div>
                <p className="para">{item.ordered}</p>
              </div>
              <p className="label mobiletags">LOCATION</p>
              <div>
                <p className="para">
                  {products.city}, {products.country}
                </p>
              </div>
              <p className="label mobiletags">QUANTITY</p>
              <div>
                <p className="para">{item.quantity}</p>
              </div>
              <p className="label mobiletags">STATUS</p>
              <div>
                <p className="para">{item.status}</p>
              </div>
              <div className="largetags">
                <img src={kebab} alt="dots thingy" />
              </div>
            </div>
          );
        });
      });
    return (
      <div className="inventory">
        <div className="inventory__top-section">
          <h1 className="texthead inventory__top-section--title">Inventory</h1>
          <form onKeyUp>
            <input
              type="text"
              name="searchbar"
              placeholder="Search"
              className="inventory__top-section--search"
            />
          </form>
        </div>
        <div>
          <div>
            <p className="label largetags">ITEM</p>
            <p className="label largetags">LAST ORDERED</p>
            <p className="label largetags">LOCATION</p>
            <p className="label largetags">QUANTITY</p>
            <p className="label largetags">STATUS</p>
          </div>
          {inventory}
        </div>
      </div>
    );
  }
}
