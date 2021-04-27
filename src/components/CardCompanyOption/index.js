import React from 'react';
import { Dot } from '../Icon/assets';
import './style.css';

export default function CardCompanyOption({ cardCompanyKey, name, color, ...props }) {
  return (
    <button
      type="button"
      className="card-company-option"
      data-card-company-key={cardCompanyKey}
      {...props}
    >
      <Dot className="card-company-option__button" size="36px" color={color} />
      <p className="card-company-option__label">{name}</p>
    </button>
  );
}
