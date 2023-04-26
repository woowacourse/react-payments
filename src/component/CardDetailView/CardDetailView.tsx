import React from "react";
import Style from "./CardDetailViewStyled";

import { PLACE_HOLDER, STRING } from "../../abstract/constants";

interface CardDetailViewProps {
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
}

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
          {cardNumberHidden.replaceAll(STRING.DASH, " ")}
        </Style.CardNumber>
      </Style.CardNumberSection>
      <Style.CardInfoSection>
        <Style.CardInfo>
          {cardOwnerName ? cardOwnerName : PLACE_HOLDER.NAME}
        </Style.CardInfo>
        <Style.CardInfo>
          {cardDate ? cardDate : PLACE_HOLDER.MM_YY}
        </Style.CardInfo>
      </Style.CardInfoSection>
    </Style.CreditCard>
  );
}

export default CardDetailView;
