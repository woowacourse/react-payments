import React from 'react';
import styled from 'styled-components';
import { useCardState } from '../context/CardContext';

import CardPreview from './CardPreview';

const CardPreviewList = () => {
  const cardList = useCardState();

  return (
    <CardPreviewListWrapper>
      {cardList.map(({ cardNumbers, cardExpirationDate, cardOwner }) => (
        <CardPreview
          cardNumbers={cardNumbers}
          cardOwner={cardOwner}
          cardExpirationDate={cardExpirationDate}
        />
      ))}
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 44px;
`;

export default CardPreviewList;
