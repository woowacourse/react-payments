import React from "react";

import St from "./CardDetailViewStyled";
import { CreditCard } from "../../types/card";

type CardDetailViewProps = {
  creditcard: CreditCard;
};

function CardDetailView({ creditcard }: CardDetailViewProps) {
  const { displayNumber, cardOwnerName, cardDate } = creditcard;
  return (
    <St.CreditCard>
      <St.ICDiv />
      <St.CardNumberSection>
        <St.CardNumber>{displayNumber.replaceAll("-", " ")}</St.CardNumber>
      </St.CardNumberSection>
      <St.CardInfoSection>
        <St.CardInfo>{cardOwnerName ? cardOwnerName : "NAME"}</St.CardInfo>
        <St.CardInfo>{cardDate ? cardDate : "MM/YY"}</St.CardInfo>
      </St.CardInfoSection>
    </St.CreditCard>
  );
}

export default CardDetailView;
