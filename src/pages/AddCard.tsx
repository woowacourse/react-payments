import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CardInputForm from "../components/CardInputForm";
import Header from "../components/common/Header";
import Page from "../components/common/Page";
import { ROUTER_PATH } from "../router/path";
import { CardType } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils";
import { getEmptyCard } from "../utils/card";

const AddCard = () => {
  const navigate = useNavigate();
  const [newCard, setNewCard] = useState<CardType>(getEmptyCard());

  const registerCard = () => {
    const cards = getLocalStorage("card");
    setLocalStorage("card", [...cards, newCard]);
    navigate(ROUTER_PATH.MyCard);
  };

  return (
    <Page>
      <Header title="카드 추가" isBack />
      <Card {...newCard} />
      <CardInputForm
        card={newCard}
        setCard={setNewCard}
        onSubmit={registerCard}
      />
    </Page>
  );
};

export default AddCard;
