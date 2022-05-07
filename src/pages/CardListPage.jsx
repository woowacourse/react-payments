import { useContext } from 'react';
import { CardInfoContext } from 'App';

import Header from '../components/Header/Header';
import Main from 'components/Main/Main';

import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';

function CardListPage() {
  const { state } = useContext(CardInfoContext);

  const cards = state.cards;

  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <Main>
        {cards.map((card) => {
          return <Card key={card.id} cardInfo={card} />;
        })}
        <Card isEmpty />
      </Main>
    </div>
  );
}

export default CardListPage;
