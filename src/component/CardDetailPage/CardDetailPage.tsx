import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import St from "./CardDetailPageStyled";
import { CreditCard } from "../../types/card";
import useCardNumber from "../../hooks/useCardNumber";

type CardDetailPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function CardDetailPage({ addCreditCard }: CardDetailPageProps) {
  const { originNumber, displayNumber, changeCardNumber } = useCardNumber();
  const [cardDate, setCardDate] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardPassword, setCardPassword] = useState<[string, string]>(["", ""]);
  const navigate = useNavigate();

  const changeCardDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value.replace(/[^\d]/g, "").slice(0, 4);

    const expirationDate = dateString.match(/.{1,2}/g);
    const resultDate = expirationDate ? expirationDate.join("/") : "";

    setCardDate(resultDate);
  };

  const changeCardOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCardOwnerName(name);
  };

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = e.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setCardCVC(cvc);
  };

  const changeCardPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const password = e.currentTarget.value.replace(/[^\d]/g, "").slice(0, 1);
    const inputID = e.currentTarget.id;

    if (inputID === "first") {
      setCardPassword([password, cardPassword[1]]);
    }

    if (inputID === "second") {
      setCardPassword([cardPassword[0], password]);
    }
  };

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    const newCard: CreditCard = {
      originNumber,
      displayNumber,
      cardDate,
      cardOwnerName,
      cardCVC,
      cardPassword,
    };

    e.preventDefault();
    navigate("/");
    addCreditCard(newCard);
  };

  return (
    <St.Page>
      <CardDetailHeader />
      <CardDetailView
        cardNumberHidden={displayNumber}
        cardDate={cardDate}
        cardOwnerName={cardOwnerName}
      />
      <CardDetailForm
        changeCardNumber={changeCardNumber}
        cardNumberHidden={displayNumber}
        changeCardDate={changeCardDate}
        cardDate={cardDate}
        changeCardOwnerName={changeCardOwnerName}
        cardOwnerName={cardOwnerName}
        changeCardCVC={changeCardCVC}
        cardCVC={cardCVC}
        cardPassword={cardPassword}
        changeCardPassword={changeCardPassword}
        submitCreditCard={submitCreditCard}
      />
    </St.Page>
  );
}

export default CardDetailPage;
