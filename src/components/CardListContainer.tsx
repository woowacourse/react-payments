import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardViewer } from './CardViewer';
import { cardDataService } from '../domains/cardDataService';

export function CardListContainer() {
  const navigate = useNavigate();
  const cardList = cardDataService.getCardList();

  return (
    <>
      {!cardList.length && <Style.Caption>새로운 카드를 등록해주세요.</Style.Caption>}
      <Style.CardListContainer>
        {cardList.map((card) => {
          return (
            <Fragment key={card.id}>
              <CardViewer card={card} />
              <Style.CardAlias>{card.cardAlias}</Style.CardAlias>
            </Fragment>
          );
        })}
        <Style.AddCardButton aria-label='카드 추가' onClick={() => navigate('/register')}>
          <span aria-hidden='true'>+</span>
        </Style.AddCardButton>
      </Style.CardListContainer>
    </>
  );
}

const Style = {
  CardListContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 318px;
    min-height: 600px;
  `,

  Caption: styled.p`
    margin-bottom: 10px;

    font-size: 14px;
    text-align: center;
    color: #575757;
  `,

  CardAlias: styled.p`
    margin-top: 10px;
    margin-bottom: 35px;

    font-size: 14px;
    font-weight: bold;
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
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.01);
    }
  `,
};
