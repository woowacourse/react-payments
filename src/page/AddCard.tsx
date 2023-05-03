import CardItem from "../components/cardList/CardItem";
import Header from "../components/common/Header";
import CardForm from "../components/cardForm/CardForm";
import BrandSelectModal from "../components/modal/BrandSelectModal";
import styled from "styled-components";

import { useState } from "react";
import { Link } from "react-router-dom";
import { NewCardContext } from "../contexts/NewCardContext";

import { useNewCard } from "../hook/useNewCard";

export const AddCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { newCard, setNumbers, setExpiryDate, setBrand, setOwner, setCVC, setPassword } = useNewCard();

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
