import React from 'react';
import Card from './components/Card';
import PageTitle from './components/PageTitle';
import styled from 'styled-components';
import CardNumber from './components/CardNumber';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardCvc from './components/CardCvc';
import CardPassword from './components/CardPassword';
import MoveButton from './components/MoveButton';

const CardAdditionContainer = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

function CardAddition() {
  return (
    <CardAdditionContainer>
      <PageTitle hasPrevButton={true} title="카드 추가" />
      <Card />
      <CardNumber />
      <CardExpiration />
      <CardOwner />
      <CardCvc />
      <CardPassword />
      <MoveButton />
    </CardAdditionContainer>
  );
}

export default CardAddition;
