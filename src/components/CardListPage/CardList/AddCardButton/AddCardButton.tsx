import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./AddCardButtonStyled";

function CardAddButton() {
  const navigate = useNavigate();

  const moveToAddCardPage = () => {
    navigate("addCard");
  };

  return (
    <St.AddButtonSection>
      <St.CardAddButton onClick={moveToAddCardPage}>+</St.CardAddButton>
    </St.AddButtonSection>
  );
}

export default CardAddButton;
