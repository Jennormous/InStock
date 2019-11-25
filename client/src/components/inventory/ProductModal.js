import React from "react";

export default function ProductModal() {
  console.log("button clicked");
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
  return <Modal />;
}
