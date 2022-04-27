import React, { useState } from 'react';

import Card from '../common/Card';
import PageTitle from '../common/PageTitle';
import NextPageButton from '../common/NextPageButton';

import CardInputForm from './CardAddPageComponents/CardInputForm';
import CardNumber from './CardAddPageComponents/CardNumber';
import CardExpirationDate from './CardAddPageComponents/CardExpirationDate';
import CardOwner from './CardAddPageComponents/CardOwner';
import CVC from './CardAddPageComponents/CVC';
import CardPassword from './CardAddPageComponents/CardPassword';
import PrevPageButton from './CardAddPageComponents/PrevPageButton';

function CardAddPage() {
  const [cardNumbers, setCardNumbers] = useState({
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
      <Card isEmpty={false} cardNumbers={cardNumbers} />
      <CardInputForm cardNumbers={cardNumbers}>
        <CardNumber cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <CardExpirationDate cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <CardOwner cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <CVC cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <CardPassword cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <NextPageButton text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
