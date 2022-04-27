import React from 'react';

const CardCompany = ({ name, onClickCompany, theme }) => {
  return (
    <div className="modal-item-container" onClick={() => onClickCompany(name, theme)}>
      <div className="modal-item-dot" style={{ backgroundColor: theme }}></div>
      <span className="modal-item-name">{name}</span>
    </div>
  );
};

export default CardCompany;
