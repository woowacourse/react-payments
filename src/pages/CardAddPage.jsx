import { useState } from 'react';

import Header from '../components/Header/Header';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';
import Button from 'components/common/Button/Button';

import CardInputForm from 'components/CardInputForm/CardInputForm';
import CardNumber from 'components/CardNumber/CardNumber';
import CardExpirationDate from 'components/CardExpirationDate/CardExpirationDate';
import CardOwner from 'components/CardOwner/CardOwner';
import CVC from 'components/CVC/CVC';
import Tooltip from 'components/Tooltip/Tooltip';
import CardPassword from 'components/CardPassword/CardPassword';
import PrevPageSign from 'components/PrevPageSign/PrevPageSign';

function CardAddPage({ setPage, page }) {
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
      <Header>
        <PrevPageSign setPage={setPage} />
        <PageTitle title="카드추가" />
      </Header>
      <Card isEmpty={false} cardInfo={cardInfo} />
      <CardInputForm cardInfo={cardInfo}>
        <CardNumber cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CardExpirationDate cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CardOwner cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <CVC cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <Tooltip />
        <CardPassword cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <Button text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
