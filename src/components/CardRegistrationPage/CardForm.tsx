import styled from "styled-components";
import CardNumberInput from "./FormContents/CardNumberInput";
import ExpirationDateInput from "./FormContents/ExpirationDateInput";
import NameInput from "./FormContents/NameInput";
import SecurityCodeInput from "./FormContents/SecurityCodeInput";
import PasswordInput from "./FormContents/PasswordInput";
import { useCardItemValue, useErrorMessageValue } from "../provider/CardItemProvider";
import CardCompany from "./FormContents/CompanyContainer";
import Button from "../common/Button";

interface CardFormProps {
  onSubmitForm: () => void;
}

const CardForm = ({ onSubmitForm }: CardFormProps) => {
  const { isAllInputSatisfied } = useCardItemValue();
  const { hasError } = useErrorMessageValue();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm();
  };

  const buttonActive = !hasError() && isAllInputSatisfied();

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <CardCompany />
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <ButtonWrapper>
        <Button isActive={buttonActive}>다음</Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export default CardForm;
