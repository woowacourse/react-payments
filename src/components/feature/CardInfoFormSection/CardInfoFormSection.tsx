import StepFunnel from "@components/common/StepFunnel";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

import CardCompanySelectField from "./components/CardCompanySelectField";
import CardCVCInputField from "./components/CardCVCInputField";
import CardInfoFormSubmitButton from "./components/CardInfoFormSubmitButton";
import CardNumberInputField from "./components/CardNumberInputField";
import CardPasswordField from "./components/CardPasswordField";
import CardPreview from "./components/CardPreview";
import CardValidityPeriodInputField from "./components/CardValidityPeriodInputField";
import { useFormValue, withFormWrapper } from "./formContext";
import { INITIAL_CARD_INFO_FORM_STATE } from "./formState";

const CardInfoFormSection = () => {
  const navigate = useNavigate();
  const { getValue } = useFormValue();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cardNumber = getValue("cardNumber").join("");
    const cardCompany = getValue("selectedCardCompany") ?? "";

    navigate("/complete", {
      state: { cardNumber, cardCompany },
    });
  };

  return (
    <>
      <CardPreview />
      <Container onSubmit={handleSubmit}>
        <StepFunnel>
          <StepFunnel.Step step={4} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardPasswordField
                onComplete={() => {
                  goToStep((prev) => (prev < 5 ? 5 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={3} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardCVCInputField
                onComplete={() => {
                  goToStep((prev) => (prev < 4 ? 4 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={2} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardValidityPeriodInputField
                onComplete={() => {
                  goToStep((prev) => (prev < 3 ? 3 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={1} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardCompanySelectField
                onComplete={() => {
                  goToStep((prev) => (prev < 2 ? 2 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={0} comparisonOperator="greaterThanOrEqual">
            {({ goToStep }) => (
              <CardNumberInputField
                onComplete={() => {
                  goToStep((prev) => (prev < 1 ? 1 : prev));
                }}
              />
            )}
          </StepFunnel.Step>
          <StepFunnel.Step step={5}>
            {() => (
              <CardInfoFormSubmitButtonContainer>
                <CardInfoFormSubmitButton />
              </CardInfoFormSubmitButtonContainer>
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
  padding-bottom: 8rem;
`;

const CardInfoFormSubmitButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
`;

export default withFormWrapper(
  CardInfoFormSection,
  INITIAL_CARD_INFO_FORM_STATE,
);
