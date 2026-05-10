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
import { useNavigate } from "react-router";
import type { AddCardCompletePageState } from "./AddCardCompletePage";
import { validateCardForm } from "@/utils/validator";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const [step, setStep] = useState(1);

  const goToNextStep = (fromStep: number) => {
    setStep((prev) => {
      if (fromStep !== prev) return prev;
      return prev + 1;
    });
  };

  const isFormValid = validateCardForm(
    cardNumber,
    cardCompany,
    validityPeriod,
    CVC,
    password,
  );

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          cardCompany={cardCompany}
          validityPeriod={validityPeriod}
        />
      </CardWrapper>
      <CardInfoForm
        onSubmit={(event) => {
          event.preventDefault();

          const completePageState: AddCardCompletePageState = {
            cardNumberPrefix: cardNumber[0],
            cardCompanyName: cardCompany?.name ?? "",
          };

          navigate("/complete", { state: completePageState });
        }}
      >
        {step > 4 && (
          <CardPasswordInputField password={password} onChange={setPassword} />
        )}
        {step > 3 && (
          <CardCVCInputField
            CVC={CVC}
            onChange={setCVC}
            onNextStep={goToNextStep}
          />
        )}
        {step > 2 && (
          <CardValidityPeriodInputField
            validityPeriod={validityPeriod}
            onChange={setValidityPeriod}
            onNextStep={goToNextStep}
          />
        )}
        {step > 1 && (
          <CardCompanySelector
            cardCompany={cardCompany}
            onSelect={setCardCompany}
            onNextStep={goToNextStep}
          />
        )}
        {step > 0 && (
          <CardNumberInputField
            cardNumberUnits={cardNumber}
            onChange={setCardNumber}
            onNextStep={goToNextStep}
          />
        )}

        {isFormValid && (
          <Button type="submit" fixedBottom>
            확인
          </Button>
        )}
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
