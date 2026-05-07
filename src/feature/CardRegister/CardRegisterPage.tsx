import { useState } from "react";
import CardPreviewSection from "./components/CardPreviewSection/CardPreviewSection";
import InfoInputSection from "./components/InfoInputSection/InfoInputSection";
import styled from "styled-components";
import type {
  CardInfoType,
  CardNumberChunkType,
} from "../../common/types/CardInfoType";
import type { CardCompanyType } from "../../common/types/CardCompany";

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberChunkType>([
    "",
    "",
    "",
    "",
  ]);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [selectedCardCompany, setSelectedCardCompany] =
    useState<CardCompanyType | null>(null);

  const handleCardCompanyClick = (cardCompany: CardCompanyType) => {
    if (selectedCardCompany !== cardCompany) {
      setSelectedCardCompany(cardCompany);
    }
  };

  const cardInfo: CardInfoType = {
    cardNumbers,
    expiryMonth,
    expiryYear,
    selectedCardCompany,
  };

  const cardInfoHandlers = {
    setCardNumbers,
    setExpiryMonth,
    setExpiryYear,
  };

  return (
    <CardRegisterPageLayout>
      <CardPreviewSection cardInfo={cardInfo} />
      <InfoInputSection
        cardInfo={cardInfo}
        cardInfoHandlers={cardInfoHandlers}
        handleCardCompanyClick={handleCardCompanyClick}
      />
    </CardRegisterPageLayout>
  );
};

const CardRegisterPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CardRegisterPage;
