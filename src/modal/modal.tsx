import React from 'react';

import "./modal.scss"

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <p>Your transaction is now in process</p>
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };

  export default Modal;
