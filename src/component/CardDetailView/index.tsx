import React from "react";

import St from "./styled";

type CardDetailViewProps = {
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
};

function CardDetailView({
  cardNumberHidden,
  cardDate,
  cardOwnerName,
}: CardDetailViewProps) {
  return (
    <St.CreditCard>
      <St.ICDiv />
      <St.CardNumberSection>
        <St.CardNumber>{cardNumberHidden.replaceAll("-", " ")}</St.CardNumber>
      </St.CardNumberSection>
      <St.CardInfoSection>
        <St.CardInfo>{cardOwnerName ? cardOwnerName : "NAME"}</St.CardInfo>
        <St.CardInfo>{cardDate ? cardDate : "MM/YY"}</St.CardInfo>
      </St.CardInfoSection>
    </St.CreditCard>
  );
}

export default CardDetailView;
