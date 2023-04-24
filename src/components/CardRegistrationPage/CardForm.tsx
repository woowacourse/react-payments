import { useEffect, useState } from "react";
import styled from "styled-components";
import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";
import SecurityCodeInput from "./SecurityCodeInput";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import { useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageValue } from "../provider/ErrorMessageProvider";

interface CardFormProps {
  onSubmitForm: () => void;
}

const CardForm = ({ onSubmitForm }: CardFormProps) => {
  const navigate = useNavigate();

  const { isAllInputSatisfied } = useCardItemValue();
  const { hasError } = useErrorMessageValue();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm();
    navigate("/");
  };

  const buttonActive = !hasError() && isAllInputSatisfied();

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <NextButton isActive={buttonActive}>다음</NextButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
`;

const NextButton = styled.button<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  align-self: flex-end;
  cursor: pointer;
`;

export default CardForm;
