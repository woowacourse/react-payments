import StepFunnel from "@components/common/StepFunnel/StepFunnel";
import styled from "@emotion/styled";
import useFormWrapper from "@hooks/useFormWrapper";
import { useNavigate } from "react-router";

import CardCompanySelectField from "./components/CardCompanySelectField/CardCompanySelectField";
import CardCVCInputField from "./components/CardCVCInputField";
import CardInfoFormSubmitButton from "./components/CardInfoFormSubmitButton";
import CardNumberInputField from "./components/CardNumberInputField/CardNumberInputField";
import CardPasswordField from "./components/CardPasswordField";
import CardPreview from "./components/CardPreview";
import CardValidityPeriodInputField from "./components/CardValidityPeriodInputField/CardValidityPeriodInputField";
import { INITIAL_CARD_INFO_FORM_STATE } from "./formState";

const CardInfoFormSection = () => {
  const { FormWrapper } = useFormWrapper({
    defaultValues: INITIAL_CARD_INFO_FORM_STATE,
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cardNumber = formData.getAll("card-number").join("");
    const cardCompany = (formData.get("card-company") ?? "").toString();

    const params = new URLSearchParams({
      "card-number": cardNumber,
      "card-company": cardCompany,
    });

    //TODO: 경로 상수화
    navigate(`/complete?${params.toString()}`);
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
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

export default CardInfoFormSection;
