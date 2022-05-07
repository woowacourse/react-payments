import React from 'react';
import { CardNumber, CardOwner, CardPassword, CardSecurityCode, CardShape, DueDate, TextNav } from '../components';
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
      <TextNav isAllCompleted={isAllCompleted} />
    </>
  );
}

export default CardAdd;
