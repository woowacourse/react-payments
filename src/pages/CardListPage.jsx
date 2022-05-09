import { useContext } from 'react';
import { CardInfoContext } from 'contexts/CardInfoContextProvider';

import Header from '../components/Header/Header';
import Main from 'components/Main/Main';

import Card from 'components/common/Card/Card';
import PageTitle from 'components/common/PageTitle/PageTitle';

import { useNavigate } from 'react-router-dom';

function CardListPage() {
  const { state } = useContext(CardInfoContext);
  console.log(state);
  const cards = state.cards;

  const navigate = useNavigate();

  const handleCardAdd = () => {
    navigate('/card-add');
  };

  return (
    <div className="app">
      <Header>
        <PageTitle title="보유카드" />
      </Header>
      <Main>
        {cards.map((card) => {
          return <Card key={card.id} cardInfo={card} />;
        })}
        <Card isEmpty handleCardAdd={handleCardAdd} />
      </Main>
    </div>
  );
}

export default CardListPage;
