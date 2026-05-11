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
import { useState, type ComponentProps } from "react";
import { validateCardForm } from "@/utils/validator";
import useFormStep from "@/hooks/useFormStep";
import { ADD_CARD_FORM_STEP } from "@/constants/addCardForm";
import useCardNavigation from "@/hooks/useCardNavigation";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const AddNewCardPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const { goToNextStep, isStepVisible } = useFormStep(
    ADD_CARD_FORM_STEP,
    "CARD_NUMBER",
  );

  const { goToAddCardCompletePage } = useCardNavigation();

  const isFormValid = validateCardForm(
    cardNumber,
    cardCompany,
    validityPeriod,
    CVC,
    password,
  );

  const handleCardFormSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();

    goToAddCardCompletePage({
      cardNumberPrefix: cardNumber[0],
      cardCompanyName: cardCompany?.name ?? "",
    });
  };

  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumberUnits={cardNumber}
          cardCompany={cardCompany}
          validityPeriod={validityPeriod}
        />
      </CardWrapper>
      <CardInfoForm onSubmit={handleCardFormSubmit}>
        {isStepVisible("PASSWORD") && (
          <CardPasswordInputField password={password} onChange={setPassword} />
        )}
        {isStepVisible("CVC") && (
          <CardCVCInputField
            CVC={CVC}
            onChange={setCVC}
            onNextStep={goToNextStep}
          />
        )}
        {isStepVisible("VALIDITY_PERIOD") && (
          <CardValidityPeriodInputField
            validityPeriod={validityPeriod}
            onChange={setValidityPeriod}
            onNextStep={goToNextStep}
          />
        )}
        {isStepVisible("COMPANY") && (
          <CardCompanySelector
            cardCompany={cardCompany}
            onSelect={setCardCompany}
            onNextStep={goToNextStep}
          />
        )}
        {isStepVisible("CARD_NUMBER") && (
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
