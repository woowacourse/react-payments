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

  const changeCompany = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header text="카드 추가">
        <Link to={"/"}>
          <BackButton type="button"> «</BackButton>
        </Link>
      </Header>
      <Main>
        <CardWrapper onClick={changeCompany}>
          <GuideText>카드를 클릭해 카드사를 변경할 수 있습니다.</GuideText>
          <CardItem card={newCard} />
        </CardWrapper>
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

  padding: 10px 28px;
`;

const CardWrapper = styled.div`
  height: 150px;
`;

const GuideText = styled.div`
  color: grey;
  margin-bottom: 10px;
`;
