import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import { LeftArrowIcon } from "../../assets/icons";
import CardItem from "../common/CardItem";
import CardForm from "../cardForm/CardForm";
import { useState } from "react";
import { CardPublicInfo } from "../../types/Card";

interface CardRegistrationPageProps {
  addCardItem: (cardItem: CardPublicInfo) => void;
}

const CardRegistrationPage = ({ addCardItem }: CardRegistrationPageProps) => {
  const [cardItem, setCardItem] = useState<CardPublicInfo>({
    id: 0,
    cardNumber: ["", "", "", ""],
    expirationDate: ["", ""],
    name: "",
  });

  const handleChangeForm = (cardNumber: string[], expirationDate: string[], name: string) => {
    const updatedCard = {
      id: Date.now(),
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      name: name,
    };
    setCardItem(updatedCard);
  };

  const handleSubmitForm = () => {
    addCardItem(cardItem);
  };

  return (
    <>
      <Header title="카드추가" leftChild={<BackButton />} />
      <CardItemContainer>
        <CardItem card={cardItem} />
      </CardItemContainer>
      <CardForm onSubmitForm={handleSubmitForm} onChangeForm={handleChangeForm} />
    </>
  );
};

const BackButton = () => {
  return (
    <Link to={"/"}>
      <LeftArrowIcon />
    </Link>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
