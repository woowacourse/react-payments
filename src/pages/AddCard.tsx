import React, { FormEvent } from "react";
import { SetStateAction, useEffect, useState } from "react";
import Card from "../components/Card";
import CardInputForm from "../components/CardInputForm";
import Header from "../components/common/Header";
import Page from "../components/common/Page";
import { CardType } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils";

const AddCard = () => {
  const [card, setCard] = useState<CardType>({
    cardNumber: "",
    expiredDate: "",
    ownerName: "",
    cvc: "",
    password: ["", ""],
    color: "pink",
  });

  const registerCard = (e: FormEvent) => {
    // e.preventDefault();
    console.log(card);
    const cards = getLocalStorage("card");
    setLocalStorage("card", [...cards, card]);
  };

  // console.log(card);

  return (
    <Page>
      <Header title="카드 추가" isBack={true} />
      <Card
        color={card.color}
        ownerName={card.ownerName}
        expiredDate={card.expiredDate}
        cardNumber={card.cardNumber}
      />
      <CardInputForm
        card={card}
        setCard={setCard}
        onSubmit={(e: FormEvent) => registerCard(e)}
      />
    </Page>
  );
};

export default AddCard;
