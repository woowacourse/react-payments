import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CardAddButtonStyled";

import { NAVIGATE } from "../../../../abstract/constants";

function CardAddButton() {
  const navigate = useNavigate();

  const moveToAddCardForm = () => {
    navigate(NAVIGATE.ADD_CARD_FORM);
  };

  return (
    <Style.AddButtonSection>
      <Style.CardAddButton onClick={moveToAddCardForm}>+</Style.CardAddButton>
    </Style.AddButtonSection>
  );
}

export default CardAddButton;
