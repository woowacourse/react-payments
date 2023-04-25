import styled from "styled-components";
import cardHandler from "../../domain/creditCards";
import { CardType } from "../../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isInputFilled, isMonthValid, isYearValid } from "../../utils/validate";
import { useValidation } from "../../hook/useValidation";

interface CardFormProps {
  setCardInfo: React.Dispatch<React.SetStateAction<CardType>>;
}

export const CardForm = ({ setCardInfo }: CardFormProps) => {
  const {
    inputValidity,
    validateCVCInput,
    validateExpiryDateInput,
    validateNumbersInput,
    validatePasswordInput,
  } = useValidation();

  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const isInputValid = () => {
    console.log(inputValidity);
    return Object.entries(inputValidity).every(([_, isValid]) => isValid);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const newCard = cardHandler.formNewCard(data);

    if (isInputValid()) {
      cardHandler.addNewCard(newCard);

      moveToHome();
    }
  };

  const setCardNumbers = (index: number, numbers: string) => {
    setCardInfo((prev) => {
      const newNumbers = [...prev.numbers];
      newNumbers[index] = numbers;
      return { ...prev, numbers: newNumbers };
    });
  };

  const setCardData = (property: string) => (newData: string) => {
    setCardInfo((prev) => ({ ...prev, [property]: newData }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        setCardNumbers={setCardNumbers}
        validateNumbersInput={validateNumbersInput}
      />
      <ExpiryDateInput
        setExpiryDate={setCardData("expiryDate")}
        validateExpiryDateInput={validateExpiryDateInput}
      />
      <OwnerInput setOwner={setCardData("owner")} />
      <CVCInput validateCVCInput={validateCVCInput} />
      <PasswordInput validatePasswordInput={validatePasswordInput} />
      <SubmitButton type="submit">다음</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;
`;
