import { useContext } from 'react';
import { CardInfoContext } from 'CardInfoContextProvider';

import Header from '../components/Header/Header.tsx';
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

function CardAddPage() {
  const { state } = useContext(CardInfoContext);
  const { card } = state;

  return (
    <div className="app">
      <Header>
        <PrevPageSign />
        <PageTitle title="카드추가" />
      </Header>
      <Card isEmpty={false} cardInfo={card} />
      <CardInputForm>
        <CardNumber />
        <CardExpirationDate />
        <CardOwner />
        <CVC />
        <Tooltip />
        <CardPassword />
        <Button text="다음" />
      </CardInputForm>
    </div>
  );
}

export default CardAddPage;
