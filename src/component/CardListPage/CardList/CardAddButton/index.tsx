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
      <St.CardAddButton onClick={moveToAddCardForm}>+</St.CardAddButton>
    </St.AddButtonSection>
  );
}

export default CardAddButton;
