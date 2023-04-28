import { useNavigate } from 'react-router-dom';

import type { CardType } from '../../type';
import Card from '../../components/Card';
import Header from '../../components/Header';
import './index.css';
import { fetchLocalStorage } from '../../utils/applicationUtil';

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
            <div key={card.id}>
              <Card
                cardType={card.cardType}
                cardFirstNumber={card.cardNumber.first}
                cardSecondNumber={card.cardNumber.second}
                cardThirdNumber={card.cardNumber.third}
                cardFourthNumber={card.cardNumber.fourth}
                cardOwner={card.cardOwner}
                expireMonth={card.expireMonth}
                expireYear={card.expireYear}
              />
              <p className="card-alias">{card.alias || card.cardType}</p>
            </div>
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
