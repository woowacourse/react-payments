import { useState } from "react";
import { CardItem } from "../components/cardList/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/cardForm/CardForm";
import { Link } from "react-router-dom";

export const AddCard = () => {
  const [newCard, setNewCard] = useState<CardType>({
    numbers: "",
    owner: "",
    expiryDate: "",
    color: "#333333",
    CVC: 0,
    password: [0, 0],
  });

  return (
    <>
      <HeaderWrapper>
        <Link to={"/"}>
          <BackButton> «</BackButton>
        </Link>
        <Header text="카드 추가" />
      </HeaderWrapper>
      <Main>
        <CardItem card={newCard} />
        <CardForm newCard={newCard} setNewCard={setNewCard} />
      </Main>
    </>
  );
};

const BackButton = styled.button`
  position: absolute;
  font-size: 24px;
  padding: 12px 0 0 12px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;
