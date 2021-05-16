import { useHistory } from 'react-router';
import { Card, Header } from '../../components';
import { CARD_COMPANY, PATH } from '../../constants';

export default function CardList({ cards }) {
  const history = useHistory();

  const goAddCardForm = () => {
    history.push(PATH.ADD_CARD_FORM);
  };

  const goEditCardNickname = (id) => () => {
    history.push(`${PATH.EDIT_CARD_NICKNAME}/${id}`);
  };

  return (
    <>
      <Header>
        <h1 className="header__title">보유 카드</h1>
      </Header>
      <ul className="contents d-flex flex-col items-center overflow-y">
        {cards?.map((card) => (
          <li
            role="button"
            aria-label={`${card.nickname} 카드 별칭 수정`}
            className="d-flex flex-col justify-center items-center mb-5"
            key={card.id}
            onClick={goEditCardNickname(card.id)}
          >
            <Card
              companyName={CARD_COMPANY[card.company].NAME}
              color={CARD_COMPANY[card.company].COLOR}
              number={card.number}
              userName={card.userName}
              expirationDate={card.expirationDate}
            />
            <p className="font-weight-700 font-color-gray-500">{card.nickname}</p>
          </li>
        ))}

        <li role="button" aria-label="카드 추가" onClick={goAddCardForm}>
          <div className="card bg-color-gray-100 shadow d-flex flex-col justify-center items-center">
            <span className="text-xxl">+</span>
          </div>
        </li>
      </ul>
    </>
  );
}
