import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardInputForm from "../components/CardInputForm";
import Header from "../components/common/Header";
import Page from "../components/common/Page";
import { CardType } from "../types";

const AddCard = () => {
  const [card, setCard] = useState<CardType>({
    cardNumber: "",
    expiredDate: "",
    ownerName: "",
    cvc: "",
    password: ["", ""],
    color: "pink",
  });

  useEffect(() => {
    setCard(card);
    console.log("^^");
  }, [card, card.expiredDate]);

  console.log("card ", card);

  return (
    <Page>
      <Header title="카드 추가" isBack={true} />
      <Card
        color={card.color}
        ownerName={card.ownerName}
        expiredDate={card.expiredDate}
        cardNumber={card.cardNumber}
      />
      <CardInputForm card={card} setCard={setCard} />
    </Page>
  );
};

export default AddCard;
