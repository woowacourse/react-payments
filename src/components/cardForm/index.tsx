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
  newCard: CardType;
}

export const CardForm = ({ setCardInfo, newCard }: CardFormProps) => {
  const {
    inputValidity,
    validateCVCInput,
    validateExpiryDateInput,
    validateNumbersInput,
    validatePasswordInput,
  } = useValidation();
  const { addNewCard } = useContext(CardContext);
  const moveTo = useNavigate();

  const isEveryInputValid = () => {
    return Object.entries(inputValidity).every(([_, isValid]) => isValid);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEveryInputValid()) {
      addNewCard(newCard);
      moveTo("/nickname");
    }
  };

  const setCardArrayData =
    (key: "numbers" | "password") => (index: number, value: string) => {
      setCardInfo((prev) => {
        const newData = [...prev[key]];
        newData[index] = value;
        return { ...prev, [key]: newData };
      });
    };

  const setCardData = (key: string) => (value: string | number) => {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        setCardNumbers={setCardArrayData("numbers")}
        validateNumbersInput={validateNumbersInput}
      />
      <ExpiryDateInput
        setExpiryDate={setCardData("expiryDate")}
        validateExpiryDateInput={validateExpiryDateInput}
      />
      <OwnerInput setOwner={setCardData("owner")} />
      <CVCInput
        setCVC={setCardData("CVC")}
        validateCVCInput={validateCVCInput}
      />
      <PasswordInput
        setNewPassword={setCardArrayData("password")}
        validatePasswordInput={validatePasswordInput}
      />
      <SubmitButton type="submit">다음</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;
`;
