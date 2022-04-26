import React from 'react';
import Card from './components/Card';
import PageTitle from './components/PageTitle';

function CardAddition() {
  return (
    <>
      <PageTitle hasPrevButton={true} title="카드 추가" />
      <Card />
      {/* <CardNumber />
      <CardExpiration />
      <CardOwner />
      <CardCvc />
      <CardPassword />
      <NextButton /> */}
    </>
  );
}

export default CardAddition;
