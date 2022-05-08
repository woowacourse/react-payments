import React from 'react';
import styled from 'styled-components';
import { CardShape } from '../components';
import useCardState from '../hooks/useCardState';

function CardList() {
  const { cards } = useCardState();

  return (
    <div>
      {cards.map((card, index) => {
        const { number, ownerName, dueDate, company, name } = card;
        return (
          <S.CardItem key={ownerName + index}>
            <CardShape
              type="USER_CARD"
              company={company}
              cardNumber={number}
              cardOwnerName={ownerName}
              dueDate={dueDate}
            />
            <S.CardNameBox>
              <S.CardNameParagraph>{name}</S.CardNameParagraph>
            </S.CardNameBox>
          </S.CardItem>
        );
      })}
      <CardShape type="ADD" />
    </div>
  );
}

export default React.memo(CardList);

const CardItem = styled.div`
  margin: 50px 0;
`;

const CardNameBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const CardNameParagraph = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

const S = {
  CardItem,
  CardNameBox,
  CardNameParagraph,
};
