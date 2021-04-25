import React from 'react';
import './modal.css';

export default function Modal({ onCloseModal, children }) {
  const onDimmedClick = (event) => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onDimmedClick}>
      <div className="modal-inner">{children}</div>
    </div>
  );
}
