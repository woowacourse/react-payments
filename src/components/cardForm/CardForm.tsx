import styled from "styled-components";
import { useState } from "react";

import { CardType } from "../../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface CardFormProps {
  cardInfo: CardType;
  setCardInfo: (value: any) => void;
  addNewCard: (newCard: CardType) => void;
}

const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split(" / ").map((each) => Number(each));
  if (month < 1 || month > 12) {
    return false;
  }

  if (year < new Date().getFullYear() % 2000) {
    return false;
  }

  return true;
};

export const CardForm = ({ cardInfo, setCardInfo, addNewCard }: CardFormProps) => {
  const history = useNavigate();
  const [isInputCompleted, setIsInputCompleted] = useState({
    isCardNumberCompleted: false,
    isExpiryDateCompleted: false,
    isCVCCompleted: false,
    isPasswordCompleted: false,
  });

  const isAllCompleted = (): boolean => {
    return Object.values(isInputCompleted).every((isCompleted) => isCompleted);
  };

  const [isInputValid, setIsInputValid] = useState({
    isExpiryDateValid: true,
  });

  const moveToHome = () => {
    history("/");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;

    if (!validateExpiryDate(cardInfo.expiryDate)) {
      setIsInputValid({ ...isInputValid, isExpiryDateValid: false });
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const newCard = {
      numbers: cardInfo.numbers,
      expiryDate: cardInfo.expiryDate,
      owner: cardInfo.owner,
      color: "#de75d0",
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
    } as CardType;

    addNewCard(newCard);

    moveToHome();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        cardNumbers={cardInfo.numbers}
        setCardNumbers={(numbers: string) => {
          setCardInfo({ ...cardInfo, numbers: numbers });
        }}
        setIsCompleted={(isComplete: boolean) => {
          setIsInputCompleted({ ...isInputCompleted, isCardNumberCompleted: isComplete });
        }}
      />
      <ExpiryDateInput
        isValid={isInputValid.isExpiryDateValid}
        setIsValid={(isValid: boolean) => {
          setIsInputValid({ ...isInputValid, isExpiryDateValid: isValid });
        }}
        setExpiryDate={(date: string) => {
          setCardInfo({ ...cardInfo, expiryDate: date });
        }}
        setIsCompleted={(isComplete: boolean) => {
          setIsInputCompleted({ ...isInputCompleted, isExpiryDateCompleted: isComplete });
        }}
      />
      <OwnerInput
        owner={cardInfo.owner}
        setOwner={(owner: string) => {
          setCardInfo({ ...cardInfo, owner: owner });
        }}
      />
      <CVCInput
        setIsCompleted={(isComplete: boolean) => {
          setIsInputCompleted({ ...isInputCompleted, isCVCCompleted: isComplete });
        }}
      />
      <PasswordInput
        setIsCompleted={(isComplete: boolean) => {
          setIsInputCompleted({ ...isInputCompleted, isPasswordCompleted: isComplete });
        }}
      />
      <SubmitButton color={isAllCompleted() ? "#525252" : "#D3D3D3"} type="submit">
        다음
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 20px;
`;

const SubmitButton = styled.button<{ color: string }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;

  color: ${(props) => props.color};
`;
