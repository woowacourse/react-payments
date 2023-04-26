import React from 'react';
import styled from 'styled-components';
import { useCardPaymentState } from '../../../hooks/useContextHooks';
import CardItem from '../../molecules/CardItem';
import Header from '../../molecules/Header';
import CardForm from '../../organisms/CardForm';

const AddCard: React.FC = () => {
  const card = useCardPaymentState();

  return (
    <>
      <Header title="카드 추가" />
      <AddCardWrapper>
        <CardItem card={card} />
        <CardForm />
      </AddCardWrapper>
    </>
  );
};

const AddCardWrapper = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  div + form {
    margin-top: 20px;
  }
`;

export default AddCard;
