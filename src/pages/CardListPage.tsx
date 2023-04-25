import { useNavigate } from 'react-router-dom';

import type { CardType } from '../type';
import Card from '../components/Card';
import Header from '../components/Header';
import './CardListPage.css';

const CardListPage = () => {
  const cardList = JSON.parse(localStorage.getItem('cardList') ?? '[]');

  const navigate = useNavigate();

  const onAddButton = () => {
    navigate('/add');
  };

  return (
    <div className="add-card-page">
      <Header>
        <h3 className="add-card-page-header-title">보유카드</h3>
      </Header>
      <div className="add-card-page-body">
        {cardList.length === 0 ? (
          <span className="empty-card-list-title">새로운 카드를 등록해주세요.</span>
        ) : (
          cardList.map((card: CardType) => (
            <li key={card.id}>
              <Card
                cardType={card.cardType}
                cardNumber={card.cardNumber}
                cardOwner={card.cardOwner}
                expired={card.expired}
              />
            </li>
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
