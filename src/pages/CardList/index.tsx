import { useNavigate } from 'react-router-dom';

import type { CardType } from '../../type';
import Card from '../../components/Card';
import Header from '../../components/Header';
import './index.css';
import useLocalStorage from '../../hooks/useLocalStorage';

const CardListPage = () => {
  const { value: cardList } = useLocalStorage('cardList', '[]');
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
          cardList.map(({ id, cardNumber, alias, cardCompany, ...rest }: CardType) => (
            <div key={id}>
              <Card
                cardCompany={cardCompany}
                cardFirstNumber={cardNumber.first}
                cardSecondNumber={cardNumber.second}
                cardThirdNumber={cardNumber.third}
                cardFourthNumber={cardNumber.fourth}
                {...rest}
              />
              <p className="card-alias">{alias || cardCompany}</p>
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
