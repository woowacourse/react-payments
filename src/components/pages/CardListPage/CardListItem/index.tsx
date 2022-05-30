import React from "react";

import Card from "components/common/Card";
import { ItemContainer, ItemNickname } from "./styled";
import { CardCompany, CardDate, CardNumbers, Owner } from "types";

interface CardListItemProps {
  cardCompany: CardCompany;
  cardNumbers: CardNumbers;
  owner: Owner;
  cardDate: CardDate;
  nickname: string;
}

function CardListItem({
  cardCompany,
  cardNumbers,
  owner,
  cardDate,
  nickname,
}: CardListItemProps) {
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
