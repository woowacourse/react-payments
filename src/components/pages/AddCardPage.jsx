import React from 'react';
import { Link } from 'react-router-dom';
import initialCardSchema from '../../schema/cardSchema';
import { PATH } from '../../utils/constants';
import BackwardButton from '../common/BackwardButton';
import CardForm from '../common/CardForm';

const AddCardPage = () => {
  return (
    <>
      <Link to={PATH.HOME}>
        <BackwardButton showBackWard>카드 추가</BackwardButton>
      </Link>
      <CardForm cardFormSchema={initialCardSchema} />
    </>
  );
};

export default AddCardPage;
