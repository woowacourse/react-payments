import React, { useState } from 'react';

import Card from '../common/Card';
import PageTitle from '../common/PageTitle';
import NextPageButton from '../common/NextPageButton';

import CardNumber from './CardAddPageComponents/CardNumber';
import CardExpirationDate from './CardAddPageComponents/CardExpirationDate';
import CardOwner from './CardAddPageComponents/CardOwner';
import CVC from './CardAddPageComponents/CVC';
import CardPassword from './CardAddPageComponents/CardPassword';
import PrevPageButton from './CardAddPageComponents/PrevPageButton';

function CardAddPage(props) {
  const [cardNumbers, setCardNumbers] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    month: '',
    year: '',
    owner: '',
    cvc: '',
  });

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <div className="app">
      <PrevPageButton />
      <PageTitle title="카드추가" />
      <Card isEmpty={false} cardNumbers={cardNumbers} />
      {/* 카드 번호  */}
      <CardNumber cardNumbers={cardNumbers} onChange={handleOnChange} />
      {/* 만료일 */}
      <CardExpirationDate cardNumbers={cardNumbers} onChange={handleOnChange} />
      {/* 카드 소유자 이름 */}
      <CardOwner cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      {/* 보안 코드  */}
      <CVC />
      {/* 카드 비밀번호 */}
      <CardPassword />
      {/* 다음 버튼  */}
      <NextPageButton />
    </div>
  );
}

export default CardAddPage;
