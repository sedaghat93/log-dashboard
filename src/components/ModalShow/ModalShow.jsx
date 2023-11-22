import React, { useState } from "react";
import ReactDom from "react-dom";
import "./ModalShow.css";

function ModalShow({ open, onClose, children }) {
  //   const [showModal, setShowModal] = useState(false);

  if (!open) return null;
  return ReactDom.createPortal(
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
        {children}
         
          <button onClick={onClose} className="btn-modal">
            close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ModalShow;
