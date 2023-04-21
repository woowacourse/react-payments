import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/@common/Card/Card";
import { CardRegisterInfo } from "../../types/card.type";
import { useCardRegisterContext } from "../../context/CardRegisterContext";
import * as Styled from "./MyCardList.styles";
import { getCardList, setCardList } from "../../utils/localStorage";

export default function MyCardList() {
  const navigate = useNavigate();
  const location = useLocation();
  const cardList = getCardList();
  const { cardRegisterInfo, initCardRegisterInfo } = useCardRegisterContext();
  const [registeredCards, setRegisteredCards] = useState<CardRegisterInfo[]>(cardList);

  useEffect(() => {
    if (location.state?.isReadyForRegister) {
      setCardList([cardRegisterInfo, ...registeredCards]);
      setRegisteredCards((prev) => [cardRegisterInfo, ...prev]);
      initCardRegisterInfo();
    }

    return () => {
      window.history.replaceState({}, document.title);
    };
  }, []);

  return (
    <Styled.Root dir="column" align="center">
      {registeredCards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <Card addButton onClick={() => navigate("./registerCard")} />
    </Styled.Root>
  );
}
