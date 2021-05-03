import React from 'react';
import { Icon, Header } from '../../components';
import { Link } from 'react-router-dom';
import './style.css';
import AddCardForm from './Form';

export default function AddCard() {
  return (
    <div className="add-card-form__container">
      <Header
        leftIcon={
          <Link to="/">
            <Icon.LeftArrow size="16px" color="#525252" />
          </Link>
        }
      >
        {'카드추가'}
      </Header>
      <AddCardForm />
    </div>
  );
}
