import { useState } from "react";

import InfoInputSection from "./components/CardRegisterForm/CardRegisterForm";
import styled from "styled-components";
import type { CardInfoType } from "../../common/types/CardInfoType";
import type { CardCompanyType } from "../../common/types/CardCompany";
import CardPreview from "./components/CardPreview/CardPreview";

const CardRegisterPage = () => {
  const [cardInformation, setCardInformation] = useState<CardInfoType>({
    cardNumbers: ["", "", "", ""],
    expiryMonth: "",
    expiryYear: "",
    selectedCardCompany: null,
  });

  const updateCardInformation = (patch: Partial<CardInfoType>) => {
    setCardInformation((previousCardInformation) => ({
      ...previousCardInformation,
      ...patch,
    }));
  };

  const handleCardNumbersChange = (
    cardNumbers: CardInfoType["cardNumbers"],
  ) => {
    updateCardInformation({ cardNumbers });
  };

  const handleExpiryMonthChange = (expiryMonth: string) => {
    updateCardInformation({ expiryMonth });
  };

  const handleExpiryYearChange = (expiryYear: string) => {
    updateCardInformation({ expiryYear });
  };

  const handleCardCompanySelect = (selectedCardCompany: CardCompanyType) => {
    updateCardInformation({ selectedCardCompany });
  };

  return (
    <CardRegisterPageLayout>
      <CardPreview cardInfo={cardInformation} />
      <InfoInputSection
        cardInfo={cardInformation}
        onCardNumbersChange={handleCardNumbersChange}
        onExpiryMonthChange={handleExpiryMonthChange}
        onExpiryYearChange={handleExpiryYearChange}
        onCardCompanySelect={handleCardCompanySelect}
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
