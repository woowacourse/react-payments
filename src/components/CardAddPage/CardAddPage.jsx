import React, { useState } from 'react';

import Card from '../common/Card/Card';
import PageTitle from '../common/PageTitle/PageTitle';
import NextPageButton from '../common/NextPageButton';

import CardInputForm from './CardAddPageComponents/CardInputForm';
import CardNumber from './CardAddPageComponents/CardNumber';
import CardExpirationDate from './CardAddPageComponents/CardExpirationDate';
import CardOwner from './CardAddPageComponents/CardOwner';
import CVC from './CardAddPageComponents/CVC';
import CardPassword from './CardAddPageComponents/CardPassword';
import PrevPageButton from './CardAddPageComponents/PrevPageButton';

function CardAddPage() {
  const [cardInfo, setCardInfo] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    month: '',
    year: '',
    owner: '',
    cvc: '',
    password1: '',
    password2: '',
  });

  return (
    <div className="app">
      <PrevPageButton />
      <PageTitle title="카드추가" />
      <Card isEmpty={false} cardInfo={cardInfo} />
      <CardInputForm cardInfo={cardInfo}>
        <CardNumber cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CardExpirationDate cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CardOwner cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CVC cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CardPassword cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <NextPageButton text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
