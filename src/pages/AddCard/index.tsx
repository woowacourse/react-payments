import React from 'react';
import styled from 'styled-components';
import { useCardPaymentState } from '../../hooks/useContextHooks';
import CardItem from '../../components/molecules/CardItem';
import Header from '../../components/molecules/Header';
import CardForm from '../../components/organisms/CardForm';
import AddCardModal from '../../components/templates/AddCardModal';

const AddCard: React.FC = () => {
  const card = useCardPaymentState();

  return (
    <>
      <Header title="카드 추가" />
      <AddCardWrapper>
        <CardItem card={card} />
        <CardForm />
        <AddCardModal />
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
