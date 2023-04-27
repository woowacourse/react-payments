import React from "react";

import St from "./CardDetailViewStyled";
import { CreditCard } from "../../types/card";

type CardDetailViewProps = {
  creditcard: CreditCard;
};

function CardDetailView({ creditcard }: CardDetailViewProps) {
  const { displayNumber, cardOwnerName, cardDate } = creditcard;

  const splitNumber = displayNumber.split("-");

  return (
    <St.CreditCard>
      <St.ICDiv />
      <St.CardNumberSection>
        <St.CardNumber>{splitNumber[0]}</St.CardNumber>
        <St.CardNumber>{splitNumber[1]}</St.CardNumber>
        <St.MaskedNumber>{splitNumber[2]}</St.MaskedNumber>
        <St.MaskedNumber>{splitNumber[3]}</St.MaskedNumber>
      </St.CardNumberSection>

      <St.CardInfoSection>
        <St.CardInfo>{cardOwnerName ? cardOwnerName : "NAME"}</St.CardInfo>
        <St.CardInfo>{cardDate ? cardDate : "MM/YY"}</St.CardInfo>
      </St.CardInfoSection>
    </St.CreditCard>
  );
}

export default CardDetailView;
