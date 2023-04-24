import { useState } from "react";
import { CardItem } from "../components/cardList/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/cardForm/CardForm";
import { Link } from "react-router-dom";

const initialCard = {
  id: "demoCard",
  numbers: [],
  owner: "NAME",
  expiryDate: "MM/YY",
  color: "#e07171",
  CVC: 0,
  password: [],
};

export const AddCard = () => {
  const [newCard, setNewCard] = useState<CardType>(initialCard);

  return (
    <>
      <Header text="카드 추가">
        <Link to={"/"}>
          <BackButton type="button"> «</BackButton>
        </Link>
      </Header>
      <Main>
        <CardItem card={newCard} />
        <CardForm setCardInfo={setNewCard} />
      </Main>
    </>
  );
};

const BackButton = styled.button`
  font-size: 24px;
  padding-right: 10px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;
