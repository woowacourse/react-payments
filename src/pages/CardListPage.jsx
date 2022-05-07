import Header from '../components/Header/Header';
import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useContext } from 'react';
import { CardInfoContext } from 'App';

function CardListPage() {
  const { state } = useContext(CardInfoContext);
  const { card, cards } = state;

  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <div>
        {cards.length !== 0
          ? cards.map((card) => (
              <>
                <Card isEmpty={false} key={card.nickname} cardInfo={card} />
                <div className="nickname-text">{card.nickname}</div>
              </>
            ))
          : ''}

        <Card isEmpty cardInfo={card} />
      </div>
    </div>
  );
}

export default CardListPage;
