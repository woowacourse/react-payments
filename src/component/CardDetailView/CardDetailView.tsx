import React from "react";

import Style from "./CardDetailViewStyled";

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
    <Style.CreditCard>
      <Style.ICDiv />
      <Style.CardNumberSection>
        <Style.CardNumber>
          {cardNumberHidden.replaceAll("-", " ")}
        </Style.CardNumber>
      </Style.CardNumberSection>
      <Style.CardInfoSection>
        <Style.CardInfo>
          {cardOwnerName ? cardOwnerName : "NAME"}
        </Style.CardInfo>
        <Style.CardInfo>{cardDate ? cardDate : "MM/YY"}</Style.CardInfo>
      </Style.CardInfoSection>
    </Style.CreditCard>
  );
}

export default CardDetailView;
