import { useContext } from 'react';
import { CardInfoContext } from 'App';

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
import CardName from 'components/CardName/CardName';
import { PAGES } from 'constants';

function CardAddPage() {
  const { state, page } = useContext(CardInfoContext);

  // const { inputValid } = state;

  return (
    <div className={`app ${page === PAGES.NAME ? 'flex-column-center' : ''}`}>
      {page !== PAGES.NAME ? (
        <>
          <Header>
            <PrevPageSign />
            <PageTitle title="카드추가" />
          </Header>
          <Card isEmpty={false} />
          <CardInputForm>
            <CardNumber />
            <CardExpirationDate />
            <CardOwner />
            <CVC />
            <Tooltip />
            <CardPassword />
            <Button text="다음" />
          </CardInputForm>
        </>
      ) : (
        <>
          <Header>
            <PageTitle title="카드등록이 완료되었습니다."></PageTitle>
          </Header>
          <Card />
          <CardInputForm>
            <CardName />
            <Button text="확인" />
          </CardInputForm>
        </>
      )}
    </div>
  );
}

export default CardAddPage;
