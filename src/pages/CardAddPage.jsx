import { useContext } from 'react';
import { CardInfoContext } from 'CardInfoContextProvider';

import Header from '../components/Header/index.tsx';
import Card from 'components/common/Card';
import PageTitle from 'components/common/PageTitle';
import Button from 'components/common/Button';

import CardInputForm from 'components/CardInputForm';
import CardNumber from 'components/CardNumber';
import CardExpirationDate from 'components/CardExpirationDate';
import CardOwner from 'components/CardOwner';
import CVC from 'components/CVC';
import Tooltip from 'components/Tooltip';
import CardPassword from 'components/CardPassword';
import PrevPageSign from 'components/PrevPageSign';

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
