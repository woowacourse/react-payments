import styled from 'styled-components';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { CardViewer } from './CardViewer';
import { cardDataService } from '../domains/cardDataService';

export function CardListContainer() {
  const navigate = useNavigate();
  const cardList = cardDataService.getCardList();

  return (
    <>
      {!cardList.length && <Style.Caption>새로운 카드를 등록해주세요.</Style.Caption>}
      <Style.CardListWrapper>
        {cardList.map((card) => {
          const { cardNumber, expirationDate, ownerName } = card;
          return (
            <CardViewer
              key={v4()}
              cardNumber={cardNumber}
              expirationDate={expirationDate}
              ownerName={ownerName}
            />
          );
        })}
        <Style.AddCardButton onClick={() => navigate('/register')}>+</Style.AddCardButton>
      </Style.CardListWrapper>
    </>
  );
}

const Style = {
  CardListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    width: 318px;
    min-height: 600px;
  `,

  Caption: styled.p`
    margin-bottom: 10px;

    font-size: 14px;
    text-align: center;
    color: #575757;
  `,

  AddCardButton: styled.button`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 213px;
    height: 133px;

    border-radius: 5px;
    background-color: #e5e5e5;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

    font-size: 35px;
    color: #3a3a3a;

    cursor: pointer;
  `,
};
