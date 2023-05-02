import React from "react";
import St from "./AddCardPageStyled";
import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";
import { useCardState } from "../../contexts/CardContext";

function AddCardPage() {
  const creditCard = useCardState();

  return (
    <St.Page>
      <CardDetailHeader />
      <CardDetailView creditcard={creditCard} />
      <CardDetailForm />
    </St.Page>
  );
}

export default AddCardPage;
