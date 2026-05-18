import Card from "@/components/CardRegister/Card/Card";
import CardCompanySelector from "@/components/CardRegister/CardCompanySelector/CardCompanySelector";
import CardCVCInputField from "@/components/CardRegister/CardCVCInputField/CardCVCInputField";
import CardNumberInputField, {
  type CardNumberUnits,
} from "@/components/CardRegister/CardNumberInputField/CardNumberInputField";
import CardPasswordInputField from "@/components/CardRegister/CardPasswordInputField/CardPasswordInputField";
import CardValidityPeriodInputField, {
  type ValidityPeriod,
} from "@/components/CardRegister/CardValidityPeriodInputField/CardValidityPeriodInputField";
import Button from "@/components/common/Button";
import type { CardCompany } from "@/constants/cardCompanies";
import styled from "@emotion/styled";
import { useState, type ComponentProps } from "react";
import { validateCardForm } from "@/utils/validator";
import useFormStep from "@/hooks/useFormStep";
import { CARD_REGISTER_FORM_STEP } from "@/constants/cardForm";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "@/constants/routes";
import PageLayout from "@/components/common/PageLayout";
import { registerCard } from "@/api/cards";
import { getFormattedValidityPeriodUnit } from "@/utils/card";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const CardRegisterPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const { goToNextStep, isStepVisible } = useFormStep(
    CARD_REGISTER_FORM_STEP,
    "CARD_NUMBER",
  );

  const navigate = useNavigate();

  const isFormValid = validateCardForm(
    cardNumber,
    cardCompany,
    validityPeriod,
    CVC,
    password,
  );

  const handleCardFormSubmit: ComponentProps<"form">["onSubmit"] = async (
    event,
  ) => {
    event.preventDefault();

    try {
      await registerCard({
        number: cardNumber.join(""),
        expirationDate: `${getFormattedValidityPeriodUnit(validityPeriod)}`,
        cvc: CVC,
        issuerCode: cardCompany?.issuerCode ?? "",
      });

      navigate(ROUTE_PATH.CARD_REGISTER_COMPLETE, {
        state: {
          cardNumberPrefix: cardNumber[0],
          cardCompanyName: cardCompany?.name ?? "",
        },
      });
    } catch {
      // 에러 처리
    }
  };

  return (
    <PageLayout>
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
            <CardPasswordInputField
              password={password}
              onChange={setPassword}
            />
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
            <Button type="submit" fullWidth fixedBottom>
              확인
            </Button>
          )}
        </CardInfoForm>
      </PageWrapper>
    </PageLayout>
  );
};

const PageWrapper = styled.div`
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

export default CardRegisterPage;
