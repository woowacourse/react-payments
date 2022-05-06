import { useContext } from 'react';
import { CardInfoContext } from 'App';

import Header from '../components/Header/Header';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';

function CardListPage() {
  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <Card isEmpty />
    </div>
  );
}

export default CardListPage;
