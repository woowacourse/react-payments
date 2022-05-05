import React from 'react';
import styled from 'styled-components';

import Card from '../common/Card';

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemNickname = styled.p`
  margin: 0;
  padding: 8px;
`;

function CardListItem({ cardCompany, cardNumbers, owner, cardDate, nickname }) {
  return (
    <ItemContainer>
      <Card
        handleClickBox={() => {}}
        cardCompany={cardCompany}
        cardNumbers={cardNumbers}
        cardOwner={owner}
        cardDate={cardDate}
      />
      <ItemNickname>{nickname}</ItemNickname>
    </ItemContainer>
  );
}

export default React.memo(CardListItem);
