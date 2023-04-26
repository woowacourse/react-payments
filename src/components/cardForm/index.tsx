import styled from "styled-components";
import { CardType } from "../../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useValidation } from "../../hook/useValidation";
import { CardContext } from "../../context/cardContext";

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
  const { setCards } = useContext(CardContext);
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const isInputValid = () => {
    return Object.entries(inputValidity).every(([_, isValid]) => isValid);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const newCard = {
      id: Math.random().toString(16),
      numbers: [
        String(data.cardNumber1),
        String(data.cardNumber2),
        String(data.cardNumber3),
        String(data.cardNumber4),
      ],
      expiryDate: String(data.expiryDate),
      owner: String(data.owner),
      CVC: Number(data.cvc),
      password: [String(data.password1), String(data.password2)],
      color: "#de75d0",
    };

    if (isInputValid()) {
      setCards(newCard);
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
