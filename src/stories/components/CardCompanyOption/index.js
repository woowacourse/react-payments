import React from 'react';
import { Dot } from '../Icon/assets';
import './CardCompanyOption.css';

export default function CardCompanyOption({ name, color, onClick }) {
  return (
    <button type="button" className="card-company-option" onClick={onClick}>
      <Dot className="card-company-option__button" size="36px" color={color} />
      <p className="card-company-option__label">{name}</p>
    </button>
  );
}
