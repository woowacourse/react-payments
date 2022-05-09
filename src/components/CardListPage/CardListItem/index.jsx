import React from 'react';

import Card from '../../common/Card';
import { ItemContainer, ItemNickname } from './style';

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
