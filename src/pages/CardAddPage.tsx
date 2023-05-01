import { Dispatch, SetStateAction } from "react";
import { Card } from "../types";
import Header from "../components/common/Header/Header";
import CardItem from "../components/CardItem/CardItem";
import CardAddForm from "../components/CardAddForm/CardAddForm";
import { useCardForm } from "../hooks/useCardForm";

interface CardAddPageProps {
  addCard: Dispatch<SetStateAction<Card[]>>;
}

function CardAddPage({ addCard }: CardAddPageProps) {
  const {
    cardInformation,
    onCardNumberChange,
    onOwnerNameChange,
    onExpirationDateChange,
    onSecurityCodeChange,
    onPasswordChange,
    onCardInformationSubmit,
  } = useCardForm(addCard);

  return (
    <>
      <Header content="카드  추가" isOverlayPage={true} />
      <CardItem
        className="mg-b-24 center-hoz-item"
        information={cardInformation}
      />
      <CardAddForm
        cardInformation={cardInformation}
        onCardNumberChange={onCardNumberChange}
        onOwnerNameChange={onOwnerNameChange}
        onExpirationDateChange={onExpirationDateChange}
        onSecurityCodeChange={onSecurityCodeChange}
        onPasswordChange={onPasswordChange}
        onCardInformationSubmit={onCardInformationSubmit}
      />
    </>
  );
}

export default CardAddPage;
