import React from "react";
import Style from "./CardDetailPageStyled";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import { CreditCard } from "../../types/card";

import { CardDetailProvider } from "../../context/CardDetailContext";

interface CardDetailPageProps {
  addCreditCard: (card: CreditCard) => void;
}

function CardDetailPage({ addCreditCard }: CardDetailPageProps) {
  return (
    <Style.Page>
      <CardDetailHeader />
      <CardDetailProvider>
        <CardDetailForm addCreditCard={addCreditCard} />
      </CardDetailProvider>
    </Style.Page>
  );
}

export default CardDetailPage;
