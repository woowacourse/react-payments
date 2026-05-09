import Card from "@/components/Card/Card";
import CardCompanySelector from "@/components/CardCompanySelector/CardCompanySelector";
import CardCVCInputField from "@/components/CardCVCInputField/CardCVCInputField";
import CardNumberInputField, {
  type CardNumberUnits,
} from "@/components/CardNumberInputField/CardNumberInputField";
import CardPasswordInputField from "@/components/CardPasswordInputField/CardPasswordInputField";
import CardValidityPeriodInputField, {
  type ValidityPeriod,
} from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import Button from "@/components/common/Button";
import type { CardCompany } from "@/constants/cardCompanies";
import styled from "@emotion/styled";
import { useState } from "react";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          cardCompany={cardCompany}
          validityPeriod={validityPeriod}
        />
      </CardWrapper>
      <CardInfoForm>
        <CardNumberInputField
          cardNumberUnits={cardNumber}
          onChange={setCardNumber}
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
        <CardPasswordInputField password={password} onChange={setPassword} />
        <Button fixedBottom>확인</Button>
      </CardInfoForm>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  max-width: 23rem;
  margin-inline: auto;
  padding-bottom: 4rem;
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
