import React from 'react';
import { Dot } from '../Icon/assets';
import './style.css';

export default function Option({ name, color = '#e5e5e5', ...props }) {
  return (
    <button type="button" className="option" aria-label={`${name} 선택 옵션`} {...props}>
      <Dot className="option__button" size="36px" color={color} />
      <p className="option__label">{name}</p>
    </button>
  );
}
