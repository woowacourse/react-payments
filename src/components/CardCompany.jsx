import React from 'react';

const CardCompany = ({ name, onClickCompany, color }) => {
  return (
    <div className="modal-item-container" onClick={() => onClickCompany(name)}>
      <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
      <span className="modal-item-name">{name}</span>
    </div>
  );
};

export default CardCompany;
