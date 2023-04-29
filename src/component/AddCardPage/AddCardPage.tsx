import React from "react";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import St from "./AddCardPageStyled";
import { useCardState } from "../../hooks/useCard";

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
