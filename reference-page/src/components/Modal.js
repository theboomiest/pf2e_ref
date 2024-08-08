import React from 'react';
import '../styles/Modal.css';

const Modal = ({ card, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-icon">{card.icon}</div>
        <div className="modal-title">{card.title}</div>
        <div className="modal-expanded-summary">{card.expandedSummary}</div>
      </div>
    </div>
  );
};

export default Modal;
