import React, { useContext } from 'react';
import Card from './components/Card';
import PageTitle from './components/PageTitle';
import styled from 'styled-components';
import CardNumber from './components/CardNumber';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardCvc from './components/CardCvc';
import CardPassword from './components/CardPassword';
import MoveButton from './components/MoveButton';
import CardContext from './CardContext';

const CardAdditionContainer = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

function CardAddition() {
  const { cardNumber, cardExpiration, cardOwner, cardCvc, cardPassword } = useContext(CardContext);

  console.log(cardNumber, cardExpiration, cardOwner, cardCvc, cardPassword);

  return (
    <CardAdditionContainer>
      <PageTitle hasPrevButton={true} title="카드 추가" />
      <Card cardNumber={cardNumber} cardExpiration={cardExpiration} cardOwner={cardOwner} />
      <CardNumber />
      <CardExpiration />
      <CardOwner />
      <CardCvc />
      <CardPassword />
      <MoveButton disabled={true}>다음</MoveButton>
    </CardAdditionContainer>
  );
}

export default CardAddition;
