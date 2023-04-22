import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";
import Style from "./CardDetailPageStyled";

import { CreditCard } from "../../types/card";

import useCardNumber from "../../hooks/useCardNumber";
import useCardDate from "../../hooks/useCardDate";
import useCardOwnerName from "../../hooks/useCardOwnerName";
import useCardCVC from "../../hooks/useCardCVC";
import useCardPassword from "../../hooks/useCardPassword";

type CardDetailPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function CardDetailPage({ addCreditCard }: CardDetailPageProps) {
  const navigate = useNavigate();
  const { cardNumberOrigin, cardNumberHidden, changeCardNumber } =
    useCardNumber();
  const { cardDate, changeCardDate } = useCardDate();
  const { cardOwnerName, changeCardOwnerName } = useCardOwnerName();
  const { cardCVC, changeCardCVC } = useCardCVC();
  const { cardPassword, changeCardPassword } = useCardPassword();

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

  const detailFromProps = {
    changeCardNumber: changeCardNumber,
    cardNumberHidden: cardNumberHidden,
    changeCardDate: changeCardDate,
    cardDate: cardDate,
    changeCardOwnerName: changeCardOwnerName,
    cardOwnerName: cardOwnerName,
    changeCardCVC: changeCardCVC,
    cardCVC: cardCVC,
    cardPassword: cardPassword,
    changeCardPassword: changeCardPassword,
    submitCreditCard: submitCreditCard,
  };

  return (
    <Style.Page>
      <CardDetailHeader />
      <CardDetailView
        cardNumberHidden={cardNumberHidden}
        cardDate={cardDate}
        cardOwnerName={cardOwnerName}
      />
      <CardDetailForm {...detailFromProps} />
    </Style.Page>
  );
}

export default CardDetailPage;
