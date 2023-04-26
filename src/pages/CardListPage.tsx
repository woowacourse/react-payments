import { useNavigate } from 'react-router-dom';

import type { CardType } from '../type';
import Card from '../components/Card';
import Header from '../components/Header';
import './CardListPage.css';
import { fetchLocalStorage } from '../utils/applicationUtil';

const CardListPage = () => {
  const cardList = fetchLocalStorage('cardList', '[]');
  const navigate = useNavigate();

  const onAddButton = () => {
    navigate('/add');
  };

  return (
    <div className="card-list-page">
      <Header>
        <h3 className="card-list-page-header-title">보유카드</h3>
      </Header>
      <div className="card-list-page-body">
        {cardList.length === 0 ? (
          <span className="empty-card-list-title">새로운 카드를 등록해주세요.</span>
        ) : (
          cardList.map((card: CardType) => (
            <Card
              key={card.id}
              cardType={card.cardType}
              cardNumber={card.cardNumber}
              cardOwner={card.cardOwner}
              expireMonth={card.expireMonth}
              expireYear={card.expireYear}
            />
          ))
        )}
        <button className="add-card-button" onClick={onAddButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default CardListPage;
