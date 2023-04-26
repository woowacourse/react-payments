import styled from "styled-components";
import { CardType } from "../../types/card";

import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";

import { validateCardNumbers, validateExpiryDate } from "../../validation/validation";
import { useNavigate } from "react-router-dom";
import { useCallback, useState, useContext, FormEvent } from "react";

import { CardContext } from "../../contexts/CardContext";
import { SubmitManageContext } from "../../contexts/SubmitManageContext";

interface CardFormProps {
  newCard: CardType;
  setNewCard: (value: CardType) => void;
}

export const CardForm = ({ newCard, setNewCard }: CardFormProps) => {
  const navigate = useNavigate();
  const { cards, addNewCard } = useContext(CardContext);

  const moveToHome = () => {
    navigate("/");
  };

  const [isInputsCompleted, setIsInputsCompleted] = useState({
    isCardNumberCompleted: false,
    isExpiryDateCompleted: false,
    isCVCCompleted: false,
    isPasswordCompleted: false,
  });

  const isAllCompleted = (): boolean => {
    return Object.values(isInputsCompleted).every((isCompleted) => isCompleted);
  };

  const [isInputsValid, setIsInputsValid] = useState({
    isCardNumbersValid: true,
    isExpiryDateValid: true,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;

    if (!validateExpiryDate(newCard.expiryDate)) {
      setIsInputsValid({ ...isInputsValid, isExpiryDateValid: false });
      return;
    }

    if (!validateCardNumbers(newCard, cards)) {
      setIsInputsValid({ ...isInputsValid, isCardNumbersValid: false });
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const cardInfo: CardType = {
      numbers: newCard.numbers,
      expiryDate: newCard.expiryDate,
      owner: newCard.owner,
      color: "#de75d0",
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
    };

    addNewCard(cardInfo);
    moveToHome();
  };

  const makeSetValue = useCallback(
    (key: string) => (value: string) => {
      setNewCard({ ...newCard, [key]: value });
    },
    [setNewCard, newCard]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <SubmitManageContext.Provider
        value={{ isInputsCompleted, isInputsValid, setIsInputsCompleted, setIsInputsValid }}
      >
        <CardNumberInput cardNumbers={newCard.numbers} setCardNumbers={makeSetValue("numbers")} />
        <ExpiryDateInput setExpiryDate={makeSetValue("expiryDate")} />
        <OwnerInput owner={newCard.owner} setOwner={makeSetValue("owner")} />
        <CVCInput />
        <PasswordInput />
      </SubmitManageContext.Provider>
      <SubmitButton $color={isAllCompleted() ? "#525252" : "#D3D3D3"} type="submit">
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

const SubmitButton = styled.button<{ $color: string }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;

  color: ${(props) => props.$color};
`;
