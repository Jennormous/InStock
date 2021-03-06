import React, { Component } from "react";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import plus from "../assets/Icons/SVG/Icon-add.svg";
import { Link } from "react-router-dom";

export default class Inventory extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const Modal = ({ handleClose, show, children }) => {
      const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

      return (
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <button onClick={handleClose}>close</button>
          </section>
        </div>
      );
    };

    const inventory =
      this.props.warehouses &&
      this.props.warehouses.map(products => {
        return products.items.map(function(item) {
          //   console.log(products);
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
                <Link
                  id="product__name"
                  className="mobiletags__subsec--tag subheader"
                  to={`/product/${item.id}`}
                >
                  <h3
                    id="product__name"
                    className="mobiletags__subsec--tag subheader"
                  >
                    {item.product}
                  </h3>
                </Link>
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
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <form action="">
              <h1>hello</h1>
              <input type="text" />
            </form>
          </Modal>
          <button
            className="input-modal-btn"
            type="button"
            onClick={this.showModal}
          >
            <img
              className="input-modal-btn--plus"
              src={plus}
              alt="add product"
            />
          </button>
          {inventory}
        </div>
      </div>
    );
  }
}
