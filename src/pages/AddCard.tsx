import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalDispatchContext } from "../context";
import { ROUTER_PATH } from "../router/path";
import { getLocalStorage, setLocalStorage } from "../utils";
import {
  Page,
  Header,
  Card,
  CardInputForm,
  BottomSheet,
  CardCompany,
} from "../components";
import { useCard } from "../hooks";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, setNewCard, setPassword] = useCard();
  const { toggleModal } = useContext(ModalDispatchContext);

  useEffect(() => {
    toggleModal();
  }, []);

  const handleFormSubmited = () => {
    const cards = getLocalStorage("card");
    setLocalStorage("card", [...cards, card]);
    navigate(ROUTER_PATH.NameCard);
  };

  const handleCardCompanyChanged = (newCardCompany: string) => {
    setNewCard("cardCompany", newCardCompany);
  };

  return (
    <Page>
      <Header title="카드 추가" isBack />
      <div onClick={toggleModal}>
        <Card {...card} />
      </div>
      <CardInputForm
        card={card}
        setNewCard={setNewCard}
        setPassword={setPassword}
        onSubmit={handleFormSubmited}
      />
      <BottomSheet>
        <CardCompany onChange={handleCardCompanyChanged} />
      </BottomSheet>
    </Page>
  );
};

export default AddCard;
