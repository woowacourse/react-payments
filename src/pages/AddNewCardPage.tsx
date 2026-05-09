import Card from "@/components/Card/Card";
import CardCompanySelector from "@/components/CardCompanySelector/CardCompanySelector";
import CardCVCInputField from "@/components/CardCVCInputField/CardCVCInputField";
import CardNumberInputField, {
  type CardNumberUnits,
} from "@/components/CardNumberInputField/CardNumberInputField";
import CardValidityPeriodInputField, {
  type ValidityPeriod,
} from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import type { CardCompany } from "@/constants/cardCompanies";
import styled from "@emotion/styled";
import {
  detectCardBrand,
  getCardNumberFormat,
  splitCardNumberByFormat,
} from "@utils/card";
import { useState } from "react";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");

  const cardBrand = detectCardBrand(cardNumber);
  const cardNumberFormat = getCardNumberFormat(cardBrand);

  const handleCardNumberChange = (cardNumber: CardNumberUnits) => {
    const nextBrand = detectCardBrand(cardNumber);
    const nextFormat = getCardNumberFormat(nextBrand);

    const isFormatChanged =
      cardNumberFormat.length !== nextFormat.length ||
      cardNumberFormat.some((length, index) => length !== nextFormat[index]);

    if (isFormatChanged) {
      const newCardNumber = splitCardNumberByFormat(cardNumber, nextFormat);
      setCardNumber(newCardNumber);
      return;
    }

    setCardNumber(cardNumber);
  };

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          cardNumberFormat={cardNumberFormat}
          cardCompany={cardCompany}
          validityPeriod={validityPeriod}
          brand={cardBrand}
        />
      </CardWrapper>
      <CardInfoForm>
        <CardNumberInputField
          cardNumberUnits={cardNumber}
          cardNumberFormat={cardNumberFormat}
          onChange={handleCardNumberChange}
        />
        <CardCompanySelector
          cardCompany={cardCompany}
          onSelect={setCardCompany}
        />
        <CardValidityPeriodInputField
          validityPeriod={validityPeriod}
          onChange={setValidityPeriod}
        />
        <CardCVCInputField CVC={CVC} onChange={setCVC} />
      </CardInfoForm>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  max-width: 23rem;
  margin-inline: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.8rem;
  padding-bottom: 2.8rem;
`;

const CardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default AddNewCardPage;
