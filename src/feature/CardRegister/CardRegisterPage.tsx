import { useState } from "react";

import CardRegisterForm from "./components/CardRegisterForm/CardRegisterForm";
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

  const updateCardNumbers = (cardNumbers: CardInfoType["cardNumbers"]) => {
    updateCardInformation({ cardNumbers });
  };

  const updateExpiryMonth = (expiryMonth: string) => {
    updateCardInformation({ expiryMonth });
  };

  const updateExpiryYear = (expiryYear: string) => {
    updateCardInformation({ expiryYear });
  };

  const updateCardCompany = (selectedCardCompany: CardCompanyType) => {
    updateCardInformation({ selectedCardCompany });
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
