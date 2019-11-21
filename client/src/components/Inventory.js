import React, { Component } from "react";

export default class Inventory extends Component {
  render() {
    const inventory =
      this.props.warehouses &&
      this.props.warehouses.map(products => {
        return products.items.map(function(item) {
          return (
            <div>
              <h3>{item.product}</h3>
            </div>
          );
        });
      });
    return (
      <div className="inventory">
        <h1 className="texthead">Inventory</h1>
        <div>{inventory}</div>
      </div>
    );
  }

}



