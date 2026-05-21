import { useState } from "react";

import CardRegisterForm from "./components/CardRegisterForm/CardRegisterForm";
import styled from "styled-components";

import CardPreview from "./components/CardPreview/CardPreview";
import type { CardRegisterInputInformation } from "./cardRegisterInputInformation.types";

const CardRegisterPage = () => {
  const [cardInformation, setCardInformation] =
    useState<CardRegisterInputInformation>({
      cardNumbers: ["", "", "", ""],
      expiryMonth: "",
      expiryYear: "",
      selectedIssuer: null,
    });

  const updateCardInformation = (
    patch: Partial<CardRegisterInputInformation>,
  ) => {
    setCardInformation((previousCardInformation) => ({
      ...previousCardInformation,
      ...patch,
    }));
  };

  const updateCardNumbers = (
    cardNumbers: CardRegisterInputInformation["cardNumbers"],
  ) => {
    updateCardInformation({ cardNumbers });
  };

  const updateExpiryMonth = (
    expiryMonth: CardRegisterInputInformation["expiryMonth"],
  ) => {
    updateCardInformation({ expiryMonth });
  };

  const updateExpiryYear = (
    expiryYear: CardRegisterInputInformation["expiryYear"],
  ) => {
    updateCardInformation({ expiryYear });
  };

  const updateCardCompany = (
    selectedIssuer: CardRegisterInputInformation["selectedIssuer"],
  ) => {
    updateCardInformation({ selectedIssuer });
  };

  return (
    <CardRegisterPageLayout>
      <CardPreview cardInfo={cardInformation} />
      <CardRegisterForm
        cardInfo={cardInformation}
        updateCardNumbers={updateCardNumbers}
        updateExpiryMonth={updateExpiryMonth}
        updateExpiryYear={updateExpiryYear}
        updateCardCompany={updateCardCompany}
      />
    </CardRegisterPageLayout>
  );
};

export default CardRegisterPage;

const CardRegisterPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
