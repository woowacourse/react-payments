import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardRegisterInfo } from "../../types/card.type";
import { useCardRegisterContext } from "../../context/CardRegisterContext";
import * as Styled from "./MyCardList.styles";
import AddCardButton from "../../components/pages/CardList/AddCardButton/AddCardButton";
import CardContent from "../../components/pages/CardList/CardContent/CardContent";

export default function MyCardList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardRegisterInfo, initCardRegisterInfo } = useCardRegisterContext();
  const [registeredCards, setRegisteredCards] = useState<CardRegisterInfo[]>(
    JSON.parse(localStorage.getItem("CardList") ?? "[]")
  );

  useEffect(() => {
    if (location.state?.isReadyForRegister) {
      localStorage.setItem(
        "CardList",
        JSON.stringify([cardRegisterInfo, ...registeredCards])
      );
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
        <CardContent key={index} {...card} />
      ))}
      <AddCardButton onClick={() => navigate("./registerCard")} />
    </Styled.Root>
  );
}
