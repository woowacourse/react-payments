import Header from '../components/Header/Header';
import Main from 'components/Main/Main';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';
import Button from 'components/common/Button/Button';

import CardInfoInputForm from 'components/CardInfoInputForm/CardInfoInputForm';
import CardNumber from 'components/CardNumber/CardNumber';
import CardExpirationDate from 'components/CardExpirationDate/CardExpirationDate';
import CardOwner from 'components/CardOwner/CardOwner';
import CVC from 'components/CVC/CVC';
import Tooltip from 'components/Tooltip/Tooltip';
import CardPassword from 'components/CardPassword/CardPassword';
import PrevPageSign from 'components/PrevPageSign/PrevPageSign';

function CardAddPage() {
  return (
    <div className="app">
      <Header>
        <PrevPageSign />
        <PageTitle title="카드추가" />
      </Header>
      <Main>
        <Card isEmpty={false} />
        <CardInfoInputForm>
          <CardNumber />
          <CardExpirationDate />
          <CardOwner />
          <CVC />
          <Tooltip />
          <CardPassword />
          <Button text="다음" />
        </CardInfoInputForm>
      </Main>
    </div>
  );
}

export default CardAddPage;
