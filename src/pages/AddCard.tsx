import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CardCompany from "../components/CardCompany";
import CardInputForm from "../components/CardInputForm";
import BottomSheet from "../components/common/BottomSheet";
import Header from "../components/common/Header";
import Page from "../components/common/Page";
import { Context } from "../context";
import { ROUTER_PATH } from "../router/path";
import { CardType } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils";
import { getEmptyCard } from "../utils/card";

const AddCard = () => {
  const navigate = useNavigate();
  const { toggleModal } = useContext(Context);
  const [newCard, setNewCard] = useState<CardType>(getEmptyCard());

  const registerCard = () => {
    const cards = getLocalStorage("card");
    setLocalStorage("card", [...cards, newCard]);
    navigate(ROUTER_PATH.NameCard);
  };

  return (
    <Page>
      <Header title="카드 추가" isBack />
      <div onClick={toggleModal}>
        <Card {...newCard} />
      </div>
      <CardInputForm
        card={newCard}
        setCard={setNewCard}
        onSubmit={registerCard}
      />
      <BottomSheet>
        <CardCompany />
      </BottomSheet>
    </Page>
  );
};

export default AddCard;
