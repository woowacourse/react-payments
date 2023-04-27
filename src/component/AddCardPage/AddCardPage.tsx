import React from "react";
import { useNavigate } from "react-router-dom";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import St from "./AddCardPageStyled";
import { CreditCard } from "../../types/card";
import { useCardDispatch, useCardState } from "../../hooks/useCard";

type AddCardPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardPage({ addCreditCard }: AddCardPageProps) {
  const navigate = useNavigate();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addCreditCard(creditCard);
    dispatch({ type: "RESET" });
    navigate("/");
  };

  return (
    <St.Page>
      <CardDetailHeader />
      <CardDetailView creditcard={creditCard} />
      <CardDetailForm submitCreditCard={submitCreditCard} />
    </St.Page>
  );
}

export default AddCardPage;
