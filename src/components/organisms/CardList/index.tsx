import React from 'react';
import styled from 'styled-components';
import { useCardListState } from '../../../hooks/useContextHooks';

import CardItem from '../../molecules/CardItem';

const CardList: React.FC = () => {
  const cardList = useCardListState();

  return (
    <CardPreviewListWrapper>
      {cardList.map((cardItem) => (
        <CardItem key={cardItem.id} card={cardItem} />
      ))}
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 44px;
  }
`;

export default CardList;
