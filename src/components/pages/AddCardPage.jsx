import React from 'react';
import { Link } from 'react-router-dom';
import initialCardSchema from '../../schema/cardSchema';
import BackwardButton from '../common/BackwardButton';
import CardForm from '../common/CardForm';

const AddCardPage = () => {
  return (
    <>
      <Link to="/">
        <BackwardButton showBackWard>카드 추가</BackwardButton>
      </Link>
      <CardForm cardFormSchema={initialCardSchema} />
    </>
  );
};

export default AddCardPage;
