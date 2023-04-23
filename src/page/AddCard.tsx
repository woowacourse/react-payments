import { useState } from "react";
import { CardItem } from "../components/cardList/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/cardForm/CardForm";
import { Link } from "react-router-dom";

const initialCard = {
  numbers: [],
  owner: "",
  expiryDate: "MM/YY",
  color: "#e07171",
  CVC: 123,
  password: [0, 0],
};

export const AddCard = () => {
  const [newCard, setNewCard] = useState<CardType>(initialCard);

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
        <CardForm setCardInfo={setNewCard} />
      </Main>
    </>
  );
};

const BackButton = styled.button`
  position: absolute;
  font-size: 24px;
  padding: 13px 0 0 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;
