import React from 'react';
import './style.css';
import Form from './Form';
import Header from './Header';

export default function AddCard() {
  return (
    <div className="add-card-form__container">
      <Header />
      <Form />
    </div>
  );
}
