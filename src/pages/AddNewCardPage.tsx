import Card from "@/components/Card/Card";
import CardCVCInputField from "@/components/CardCVCInputField/CardCVCInputField";
import CardNumberInputField, {
  type CardNumberUnits,
} from "@/components/CardNumberInputField/CardNumberInputField";
import CardValidityPeriodInputField, {
  type ValidityPeriod,
} from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import styled from "@emotion/styled";
import { detectCardBrand } from "@utils/card";
import { useState } from "react";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          validityPeriod={validityPeriod}
          brand={detectCardBrand(cardNumber)}
        />
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
