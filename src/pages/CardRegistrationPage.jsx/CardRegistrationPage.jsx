import React from 'react';
import BackwardButton from '../../components/BackwardButton/BackwardButton';
import CardForm from '../../components/CardForm/CardForm';

const CardRegistrationPage = () => {
  return (
    <>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm />
    </>
  );
};

export default CardRegistrationPage;
