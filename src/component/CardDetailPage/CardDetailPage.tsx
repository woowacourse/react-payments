import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import Style from "./CardDetailPageStyled";
import { CreditCard } from "../../types/card";

type CardDetailPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function CardDetailPage({ addCreditCard }: CardDetailPageProps) {
  const [cardNumberOrigin, setCardNumberOrigin] = useState("");
  const [cardNumberHidden, setCardNumberHidden] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardPassword, setCardPassword] = useState<[string, string]>(["", ""]);
  const navigate = useNavigate();

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value.replace(/[^\d•]/g, "").slice(0, 16); // 16자리 이상은 자르기

    //오리진 저장
    if (cardNumberOrigin.length > 8) {
      // 별 표시 출력과 관련된 로직
      if (cardNumberOrigin.length < cardNumber.length) {
        // 추가시
        setCardNumberOrigin(cardNumberOrigin + cardNumber.slice(-1));
      }

      if (cardNumberOrigin.length > cardNumber.length) {
        // 제거시
        setCardNumberOrigin(cardNumberOrigin.slice(0, -1));
      }
    }

    if (cardNumberOrigin.length <= 8) {
      setCardNumberOrigin(cardNumber);
    }

    //히든 저장
    const hiddenNumber =
      cardNumber.length > 8
        ? cardNumber.slice(0, 8) + "•".repeat(cardNumber.length - 8)
        : cardNumber;
    const showNumber = hiddenNumber.match(/.{1,4}/g);
    const resultNumber = showNumber ? showNumber.join("-") : "";

    setCardNumberHidden(resultNumber);
  };

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
    console.log(cardPassword);
  };

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    const newCard: CreditCard = {
      cardNumberOrigin,
      cardNumberHidden,
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
    <Style.Page>
      <CardDetailHeader />
      <CardDetailView
        cardNumberHidden={cardNumberHidden}
        cardDate={cardDate}
        cardOwnerName={cardOwnerName}
      />
      <CardDetailForm
        changeCardNumber={changeCardNumber}
        cardNumberHidden={cardNumberHidden}
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
    </Style.Page>
  );
}

export default CardDetailPage;
