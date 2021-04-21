import React from 'react';
import './modal.css';

export default function Modal({ contents }) {
  //TODO: modal Dimmed Click 추가
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-inner">{contents}</div>
    </div>
  );
}
