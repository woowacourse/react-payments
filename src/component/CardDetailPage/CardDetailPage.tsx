import React from "react";
import { useNavigate } from "react-router-dom";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import St from "./CardDetailPageStyled";
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
  const { originNumber, displayNumber, changeCardNumber } = useCardNumber();
  const { cardDate, changeCardDate } = useCardDate();
  const { cardOwnerName, changeCardOwnerName } = useCardOwnerName();
  const { cardCVC, changeCardCVC } = useCardCVC();
  const { cardPassword, changeCardPassword } = useCardPassword();
  const navigate = useNavigate();

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
        displayNumber={displayNumber}
        cardDate={cardDate}
        cardOwnerName={cardOwnerName}
      />
      <CardDetailForm
        changeCardNumber={changeCardNumber}
        displayNumber={displayNumber}
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
