import type { CardNumberUnits, ValidityPeriod } from "@/types/card";
import StepFunnel from "@components/common/StepFunnel/StepFunnel";
import CardCompanySelectField from "@components/feature/CardCompanySelectField/CardCompanySelectField";
import CardCVCInputField from "@components/feature/CardCVCInputField";
import CardNumberInputField from "@components/feature/CardNumberInputField/CardNumberInputField";
import CardValidityPeriodInputField from "@components/feature/CardValidityPeriodInputField/CardValidityPeriodInputField";
import type CARD_COMPANY_SELECT_FIELD from "@constants/card";
import styled from "@emotion/styled";
import { useState, type ReactNode } from "react";

interface CardInfoFormState {
  cardNumber: CardNumberUnits;
  validityPeriod: ValidityPeriod;
  CVC: string;
  selectedCardCompany:
    | (typeof CARD_COMPANY_SELECT_FIELD)[number]["value"]
    | null;
}

interface CardInfoFormProps {
  children?: (arg: CardInfoFormState) => ReactNode;
}

const DEFAULT_CARD_NUMBER_UNITS: CardNumberUnits = ["", "", "", ""];
const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const CardInfoForm = ({ children }: CardInfoFormProps) => {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_UNITS);
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [selectedCardCompany, setSelectedCardCompany] = useState<
    (typeof CARD_COMPANY_SELECT_FIELD)[number]["value"] | null
  >(null);

  return (
    <>
      {children &&
        children({ cardNumber, validityPeriod, CVC, selectedCardCompany })}
      <Container>
        <StepFunnel>
          <StepFunnel.Step step={3} comparisonOperator="greaterThanOrEqual">
            {() => (
              <CardCVCInputField
                CVC={CVC}
                onChange={(input) => {
                  setCVC(input);
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={2} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardValidityPeriodInputField
                validityPeriod={validityPeriod}
                onChange={(input) => {
                  setValidityPeriod(input);
                  if (input.month.length === 2 && input.year.length === 2) {
                    goToStep((prev) => (prev < 3 ? 3 : prev));
                  }
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={1} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardCompanySelectField
                selectedCompany={selectedCardCompany}
                onChange={(company) => {
                  setSelectedCardCompany(company);
                  goToStep((prev) => (prev < 2 ? 2 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={0} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardNumberInputField
                cardNumberUnits={cardNumber}
                onChange={(input) => {
                  setCardNumber(input);
                  if (input.join("")?.length === 16) {
                    goToStep((prev) => (prev < 1 ? 1 : prev));
                  }
                }}
              />
            )}
          </StepFunnel.Step>
        </StepFunnel>
      </Container>
    </>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default CardInfoForm;
