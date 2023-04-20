import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./styled";

function CardAddButton() {
  const navigate = useNavigate();

  const moveToAddCardForm = () => {
    navigate("/addCardForm");
  };

  return (
    <St.AddButtonSection>
      <St.Title>새로운 카드를 등록해주세요.</St.Title>
      <St.CardAddButton onClick={moveToAddCardForm}>+</St.CardAddButton>
    </St.AddButtonSection>
  );
}

export default CardAddButton;
