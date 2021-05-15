import { Card, Header } from '../../components';
import { useHistory } from 'react-router';
import { CARD_COMPANY, PATH } from '../../constants';
import './style.css';

export default function CardList({ cards }) {
  const history = useHistory();

  const onAddButtonClick = () => {
    history.push(PATH.ADD_CARD_FORM);
  };

  return (
    <>
      <Header>
        <h1 className="header__title">보유 카드</h1>
      </Header>
      <ul className="card-list__container">
        {cards?.map((card) => (
          <li className="card-list__item">
            <button
              type="button"
              className="card-list__item-button"
              aria-label={`${card.nickname} 카드 별칭 수정`}
              key={card.id}
              onClick={() => {
                history.push(`${PATH.ADD_CARD_COMPLETE}/${card.id}`);
              }}
            >
              <Card
                companyName={CARD_COMPANY[card.company].NAME}
                color={CARD_COMPANY[card.company].COLOR}
                number={card.number}
                userName={card.userName}
                expirationDate={card.expirationDate}
              />
              <p>{card.nickname}</p>
            </button>
          </li>
        ))}

        <li className="card-list__item">
          <button
            type="button"
            className="card-list__add-card-button"
            aria-label="카드 추가"
            onClick={onAddButtonClick}
          >
            +
          </button>
        </li>
      </ul>
    </>
  );
}
