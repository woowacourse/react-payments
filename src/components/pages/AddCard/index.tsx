import React from 'react';
import styled from 'styled-components';
import CardItem from '../../molecules/CardItem';
import Header from '../../molecules/Header';
import CardForm from '../../organisms/CardForm';

const AddCard: React.FC = () => {
  return (
    <>
      <Header title="카드 추가" />
      <AddCardWrapper>
        <CardItem />
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
