import { useState } from "react";
import { CardItem } from "../components/cardList/CardItem";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import styled from "styled-components";
import { CardForm } from "../components/cardForm";
import { Link } from "react-router-dom";
import { CompanySelectModal } from "../components/companySelectModal";
import { getRandomId } from "../utils/randomId";
import { useModal } from "../hook/useModal";
import { PAGE } from "../constant/routePath";

const defaultCard = {
  name: "",
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
    id: getRandomId(),
    ...defaultCard,
  });
  const { isModalOpen, closeModal, openModal } = useModal(true);

  return (
    <>
      <Header text="카드 추가">
        <Link to={PAGE.home}>
          <BackButton type="button"> «</BackButton>
        </Link>
      </Header>
      <Main>
        <CardWrapper onClick={openModal}>
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
