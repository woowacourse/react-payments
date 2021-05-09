import React from 'react';
import { Dot } from '../../../../../components/Icon/assets';
import './style.css';

export default function CardCompanyOption({ name, color, ...props }) {
  return (
    <button type="button" className="card-company-option" {...props}>
      <Dot className="card-company-option__button" size="36px" color={color} />
      <p className="card-company-option__label">{name}</p>
    </button>
  );
}
