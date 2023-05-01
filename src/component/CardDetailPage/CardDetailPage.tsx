import React, { useState } from "react";
import Style from "./CardDetailPageStyled";

import CardDetailHeader from "./CardDetailHeader/CardDetailHeader";
import CardDetailForm from "./CardDetailForm/CardDetailForm";

import { Card } from "../../types/card";

import { CardDetailProvider } from "../../context/CardDetailContext";
import CardModal from "../CardModal/CardModal";

interface CardDetailPageProps {
  setLastCard: (card: Card) => void;
}

function CardDetailPage({ setLastCard }: CardDetailPageProps) {
  const [isOpened, setIsOpened] = useState(true);

  const closeModal = () => {
    setIsOpened(false);
  };

  const openModal = () => {
    setIsOpened(true);
  };
  return (
    <Style.Page>
      <CardDetailHeader />
      <CardDetailProvider>
        {isOpened ? <CardModal closeModal={closeModal} /> : null}
        <CardDetailForm setLastCard={setLastCard} openModal={openModal} />
      </CardDetailProvider>
    </Style.Page>
  );
}

export default CardDetailPage;
