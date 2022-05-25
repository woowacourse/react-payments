import React from "react";

import Card from "components/common/Card";
import { ItemContainer, ItemNickname } from "./style";

function CardListItem({ cardCompany, cardNumbers, owner, cardDate, nickname }) {
  return (
    <ItemContainer>
      <Card
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
