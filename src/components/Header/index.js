import React from 'react';
import './style.css';

export default function Header({ leftIcon, children }) {
  return (
    <div className="header">
      {leftIcon}
      <h1 className="header__title">{children}</h1>
    </div>
  );
}
