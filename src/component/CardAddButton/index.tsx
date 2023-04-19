import React from "react";
import St from "./styled";

function CardAddButton() {
  return (
    <St.AddButtonSection>
      <St.Title>새로운 카드를 등록해주세요.</St.Title>
      <St.CardAddButton>+</St.CardAddButton>
    </St.AddButtonSection>
  );
}

export default CardAddButton;
