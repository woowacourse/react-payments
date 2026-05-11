import type { ValidityPeriod } from "@/types/card";
import StepFunnel from "@components/common/StepFunnel/StepFunnel";
import CardCompanySelectField from "@components/feature/CardInfoForm/components/CardCompanySelectField/CardCompanySelectField";
import CardCVCInputField from "@components/feature/CardInfoForm/components/CardCVCInputField";
import CardNumberInputField from "@components/feature/CardInfoForm/components/CardNumberInputField/CardNumberInputField";
import CardValidityPeriodInputField from "@components/feature/CardInfoForm/components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import type { default as CARD } from "@constants/card";
import styled from "@emotion/styled";
import { useState, type ReactNode } from "react";

import CardPasswordField from "./components/CardPasswordField";

interface CardInfoFormState {
  cardNumber: string;
  validityPeriod: ValidityPeriod;
  CVC: string;
  password: string;
  selectedCardCompany:
    | (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"]
    | null;
}

interface CardInfoFormProps {
  children?: (arg: CardInfoFormState) => ReactNode;
}

const DEFAULT_VALIDITY_PERIOD: ValidityPeriod = { month: "", year: "" };

const CardInfoForm = ({ children }: CardInfoFormProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [validityPeriod, setValidityPeriod] = useState(DEFAULT_VALIDITY_PERIOD);
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCardCompany, setSelectedCardCompany] = useState<
    (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"] | null
  >(null);

  return (
    <>
      {children &&
        children({
          cardNumber,
          validityPeriod,
          CVC,
          selectedCardCompany,
          password,
        })}
      <Container>
        <StepFunnel>
          <StepFunnel.Step step={4} comparisonOperator="greaterThanOrEqual">
            {() => (
              <CardPasswordField
                password={password}
                onChange={(input) => {
                  setPassword(input);
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={3} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardCVCInputField
                CVC={CVC}
                onChange={(input) => {
                  setCVC(input);
                }}
                onComplete={() => {
                  goToStep((prev) => (prev < 4 ? 4 : prev));
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
                cardNumber={cardNumber}
                onChange={(input) => {
                  setCardNumber(input);
                }}
                onComplete={() => {
                  goToStep((prev) => (prev < 1 ? 1 : prev));
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
