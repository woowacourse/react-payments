import styled from "@emotion/styled";
import Card from "../components/Card";
import CardCVCInputField from "../components/CardCVCInputField";
import CardNumberInputField from "../components/CardNumberInputField";
import CardValidityPeriodInputField from "../components/CardValidityPeriodInputField";
import { useState } from "react";

export type CardNumberUnits = [string, string, string, string];

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState<CardNumberUnits>(
    DEFAULT_CARD_NUMBER_UNITS,
  );

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          validityPeriod={{ month: 4, year: 26 }}
        />
      </CardWrapper>
      <CardInfoForm>
        <CardNumberInputField
          cardNumberUnits={cardNumber}
          onChange={(input) => {
            setCardNumber(input);
          }}
        />
        <CardValidityPeriodInputField />
        <CardCVCInputField />
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
