import { useState } from "react";
import { CardItem } from "../components/cardList/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/cardForm";
import { Link } from "react-router-dom";
import { CompanySelectModal } from "../components/companySelectModal";
import { getRandomId } from "../utils/randomId";

const defaultCard = {
  id: "",
  nickname: "",
  numbers: [],
  owner: "NAME",
  expiryDate: "MM/YY",
  color: "#e07171",
  CVC: 0,
  password: [],
  company: "",
};

export const AddCard = () => {
  const [newCard, setNewCard] = useState<CardType>({
    ...defaultCard,
    id: getRandomId(),
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header text="카드 추가">
        <Link to={"/"}>
          <BackButton type="button"> «</BackButton>
        </Link>
      </Header>
      <Main>
        <CardItem card={newCard} />
        <CardForm setCardInfo={setNewCard} newCard={newCard} />
      </Main>
      {isModalOpen && (
        <CompanySelectModal setCardInfo={setNewCard} closeModal={closeModal} />
      )}
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
