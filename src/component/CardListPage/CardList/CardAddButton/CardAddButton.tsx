import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CardAddButtonStyled";

function CardAddButton() {
  const navigate = useNavigate();

  const moveToAddCardForm = () => {
    navigate("/addCardForm");
  };

  return (
    <Style.AddButtonSection>
      <Style.CardAddButton onClick={moveToAddCardForm}>+</Style.CardAddButton>
    </Style.AddButtonSection>
  );
}

export default CardAddButton;
