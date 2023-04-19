import { useState } from "react";
import { CardItem } from "../components/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/CardForm";

export const AddCard = () => {
  const [cardInfo, setCardInfo] = useState<CardType>({
    numbers: "",
    owner: "",
    expiryDate: "MM/YY",
    color: "#333333",
    CVC: 123,
    password: [1, 2],
  });

  return (
    <>
      <Header text="카드 추가" />
      <Main>
        <CardItem card={cardInfo} />
        <CardForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px;
`;
