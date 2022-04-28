import React, { useState } from 'react';

import Card from '../common/Card/Card';
import PageTitle from '../common/PageTitle/PageTitle';
import NextPageButton from '../common/NextPageButton/NextPageButton';

import CardInputForm from './CardAddPageComponents/CardInputForm/CardInputForm';
import CardNumber from './CardAddPageComponents/CardNumber/CardNumber';
import CardExpirationDate from './CardAddPageComponents/CardExpirationDate/CardExpirationDate';
import CardOwner from './CardAddPageComponents/CardOwner/CardOwner';
import CVC from './CardAddPageComponents/CVC/CVC';
import Tooltip from './CardAddPageComponents/Tooltip/Tooltip';
import CardPassword from './CardAddPageComponents/CardPassword/CardPassword';
import PrevPageButton from './CardAddPageComponents/PrevPageButton/PrevPageButton';

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
        <Tooltip />
        <CardPassword cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <NextPageButton text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
