import React from 'react';
import styled from 'styled-components';

import Message from '../../atomics/Message';
import { useCardListState } from '../../context/CardPaymentContext';
import { VStack } from '../../layout/flexbox';

import CardItem from '../../molecules/CardItem';

const CardList: React.FC = () => {
  const cardList = useCardListState();

  return (
    <CardPreviewListWrapper>
      {cardList.map((cardItem) => (
        <CardItemWrapper key={cardItem.id}>
          <CardItem key={cardItem.id} card={cardItem} />
          <Message fontWeight={700} fontSize="14px" lineHeight="16px" color="#575757" opacity={0.9}>
            {cardItem.nickName}
          </Message>
        </CardItemWrapper>
      ))}
    </CardPreviewListWrapper>
  );
};

const CardItemWrapper = styled.div`
  ${VStack}
  align-items: center;

  div + span {
    margin-top: 12px;
  }
`;

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 44px;
  }
`;

export default CardList;
