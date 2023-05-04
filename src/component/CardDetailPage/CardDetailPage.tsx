import React from "react";
import Style from "./CardDetailPageStyled";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import { Card } from "../../types/card";

import { CardDetailProvider } from "../../context/CardDetailContext";

interface CardDetailPageProps {
  setLastCard: (card: Card) => void;
}

function CardDetailPage({ setLastCard }: CardDetailPageProps) {
  return (
    <Style.Page>
      <CardDetailHeader />
      <CardDetailProvider>
        <CardDetailForm setLastCard={setLastCard} />
      </CardDetailProvider>
    </Style.Page>
  );
}

export default CardDetailPage;
