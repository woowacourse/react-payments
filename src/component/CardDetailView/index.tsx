import React, { useState, useEffect } from "react";

import St from "./styled";

function CardDetailView() {
  return (
    <St.CreditCard>
      <St.ICDiv />
      <St.CardNumberSection>
        <St.CardNumber>1234</St.CardNumber>
        <St.CardNumber>5678</St.CardNumber>
        <St.CardNumber>••••</St.CardNumber>
        <St.CardNumber>••••</St.CardNumber>
      </St.CardNumberSection>
      <St.CardInfoSection>
        <St.CardInfo>SUN</St.CardInfo>
        <St.CardInfo>04/21</St.CardInfo>
      </St.CardInfoSection>
    </St.CreditCard>
  );
}

export default CardDetailView;
