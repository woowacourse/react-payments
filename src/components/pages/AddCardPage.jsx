import React from 'react';
import initialCardSchema from '../../schema/cardSchema';
import BackwardButton from '../common/BackwardButton';
import CardForm from '../common/CardForm';

const AddCardPage = () => {
  return (
    <>
      <BackwardButton>카드 추가</BackwardButton>
      <CardForm cardFormSchema={initialCardSchema} />
    </>
  );
};

export default AddCardPage;
