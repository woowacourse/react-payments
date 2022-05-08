import React from 'react';
import BackwardButton from '../../components/BackwardButton/BackwardButton';
import CardForm from '../../components/CardForm/CardForm';
import Header from '../../components/Header/Header';

const CardRegistrationPage = () => {
  return (
    <>
      <Header>
        <BackwardButton />
        <h2>카드 추가</h2>
      </Header>
      <CardForm />
    </>
  );
};

export default CardRegistrationPage;
