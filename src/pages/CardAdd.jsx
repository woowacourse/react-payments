import React from 'react';
import { CardNumber, CardOwner, CardPassword, CardSecurityCode, CardShape, DueDate, Footer } from '../components';
import useCardState from '../hooks/useCardState';

function CardAdd() {
  const state = useCardState();

  const isAllCompleted = Object.values(state.isAllCompleted).every(ok => ok);
  return (
    <>
      <CardShape />
      <CardNumber />
      <DueDate />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
      <Footer isAllCompleted={isAllCompleted} />
    </>
  );
}

export default CardAdd;
