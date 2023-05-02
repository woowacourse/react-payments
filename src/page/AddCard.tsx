import CardItem from "../components/cardList/CardItem";
import Header from "../components/common/Header";
import CardForm from "../components/cardForm/CardForm";
import BrandSelectModal from "../components/modal/BrandSelectModal";
import styled from "styled-components";

import { useState } from "react";
import { Link } from "react-router-dom";
import { NewCardContext } from "../contexts/NewCardContext";

import { CardType, BrandType } from "../types/card";

export const AddCard = () => {
  const [newCard, setNewCard] = useState<CardType>({
    numbers: "",
    expiryDate: "",
    brand: undefined,
    CVC: 0,
    password: [0, 0],
  });

  const setNumbers = (numbers: string) => {
    setNewCard({ ...newCard, numbers });
  };

  const setExpiryDate = (expiryDate: string) => {
    setNewCard({ ...newCard, expiryDate });
  };

  const setBrand = (brand: BrandType) => {
    setNewCard({ ...newCard, brand });
  };

  const setCVC = (CVC: number) => {
    setNewCard({ ...newCard, CVC });
  };

  const setPassword = (password: number[]) => {
    setNewCard({ ...newCard, password });
  };

  const setOwner = (owner: string) => {
    setNewCard({ ...newCard, owner });
  };

  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOpenModalButton = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    e.preventDefault();

    openModal();
  };

  return (
    <>
      <HeaderWrapper>
        <Link to={"/"}>
          <BackButton>«</BackButton>
        </Link>
        <Header text="카드 추가" />
      </HeaderWrapper>
      <NewCardContext.Provider value={{ newCard, setNumbers, setExpiryDate, setBrand, setCVC, setPassword, setOwner }}>
        <Main>
          <CardItem card={newCard} handleClick={handleClickOpenModalButton} />
          <CardForm />
          {isModalOpen && <BrandSelectModal closeModal={closeModal} />}
        </Main>
      </NewCardContext.Provider>
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
