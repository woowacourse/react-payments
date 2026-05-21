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
import { ApiError } from "@/api/error";

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

type CardRegisterField = "cardNumber" | "cvc" | "validityPeriod";
type ServerErrors = Partial<Record<CardRegisterField, string>>;

const SERVER_ERROR_FIELD_BY_CODE = {
  INVALID_CARD_NUMBER: "cardNumber",
  INVALID_CVC: "cvc",
  INVALID_EXPIRATION_DATE: "validityPeriod",
} as const;

const CardRegisterPage = () => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");
  const [serverErrors, setServerErrors] = useState<ServerErrors>({});

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
    } catch (error) {
      if (error instanceof ApiError) {
        const field =
          SERVER_ERROR_FIELD_BY_CODE[
            error.code as keyof typeof SERVER_ERROR_FIELD_BY_CODE
          ];

        if (field) {
          setServerErrors({ [field]: error.message });
        }
      }
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
              onChange={(nextCVC) => {
                setCVC(nextCVC);
                setServerErrors((prev) => ({ ...prev, cvc: undefined }));
              }}
              onNextStep={goToNextStep}
              serverErrorMessage={serverErrors.cvc}
              shouldFocus={Boolean(serverErrors.cvc)}
            />
          )}
          {isStepVisible("VALIDITY_PERIOD") && (
            <CardValidityPeriodInputField
              validityPeriod={validityPeriod}
              onChange={(nextValidityPeriod) => {
                setValidityPeriod(nextValidityPeriod);
                setServerErrors((prev) => ({
                  ...prev,
                  validityPeriod: undefined,
                }));
              }}
              onNextStep={goToNextStep}
              serverErrorMessage={serverErrors.validityPeriod}
              shouldFocus={Boolean(serverErrors.validityPeriod)}
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
              onChange={(nextCardNumber) => {
                setCardNumber(nextCardNumber);
                setServerErrors((prev) => ({
                  ...prev,
                  cardNumber: undefined,
                }));
              }}
              onNextStep={goToNextStep}
              serverErrorMessage={serverErrors.cardNumber}
              shouldFocus={Boolean(serverErrors.cardNumber)}
            />
          )}

          {isFormValid && (
            <Button type="submit" fixedBottom>
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
