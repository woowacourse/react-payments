import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/@common/Card/Card";
import * as Styled from "./MyCardList.styles";
import { useMyCardList } from "../../hooks/card/card";
import { generateCardNumber } from "../../utils/card";

export default function MyCardList() {
  const navigate = useNavigate();
  const { registeredCards } = useMyCardList();

  return (
    <Styled.Root dir="column" align="center">
      {registeredCards.map((card, index) => (
        <Card key={generateCardNumber(card.cardNumber)} {...card} />
      ))}
      <Card addButton onClick={() => navigate("./registerCard")} />
    </Styled.Root>
  );
}
