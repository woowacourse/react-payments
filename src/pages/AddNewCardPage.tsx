import styled from "@emotion/styled";
import Card from "../components/Card";
import CardCVCInputField from "../components/CardCVCInputField";
import CardNumberInputField from "../components/CardNumberInputField";
import CardValidityPeriodInputField from "../components/CardValidityPeriodInputField";
import { useState } from "react";

export type CardNumberUnits = [string, string, string, string];
export type ValidityPeriod = {
  month: string;
  year: string;
};

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState<CardNumberUnits>(
    DEFAULT_CARD_NUMBER_UNITS,
  );
  const [validityPeriod, setValidityPeriod] = useState<ValidityPeriod>(
    DEFAULT_VALIDITY_PERIOD,
  );
  const [CVC, setCVC] = useState("");

  return (
    <PageWrapper>
      <CardWrapper>
        <Card cardNumberUnits={cardNumber} validityPeriod={validityPeriod} />
      </CardWrapper>
      <CardInfoForm>
        <CardNumberInputField
          cardNumberUnits={cardNumber}
          onChange={(input) => {
            setCardNumber(input);
          }}
        />
        <CardValidityPeriodInputField
          validityPeriod={validityPeriod}
          onChange={(input) => {
            setValidityPeriod(input);
          }}
        />
        <CardCVCInputField
          CVC={CVC}
          onChange={(input) => {
            setCVC(input);
          }}
        />
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
