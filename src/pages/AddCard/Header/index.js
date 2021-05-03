import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../components';
import './style.css';

export default function Header() {
  return (
    <div className="add-card-header">
      <Link to="/">
        <Icon.LeftArrow size="16px" color="#525252" />
      </Link>
      <h1 className="add-card-header__title">{'카드추가'}</h1>
    </div>
  );
}
