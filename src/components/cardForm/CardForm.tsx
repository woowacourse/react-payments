import styled from "styled-components";
import { CardType } from "../../types/card";
import { ValidFlagType } from "../../types/input";

import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";

import { validateCardNumbers, validateExpiryDate } from "../../validation";
import { useNavigate } from "react-router-dom";
import { useContext, FormEvent } from "react";

import { useCheckForm } from "../../hook/useCheckForm";

import { CardsContext } from "../../contexts/CardsContext";
import { NewCardContext } from "../../contexts/NewCardContext";
import { SubmitManageContext } from "../../contexts/SubmitManageContext";

export const CardForm = () => {
  const { cards, addNewCard } = useContext(CardsContext);
  const { newCard } = useContext(NewCardContext);

  const {
    isInputsCompleted,
    setIsNumbersCompleted,
    setExpriyDateCompleted,
    setIsCVCCompleted,
    setIsPassWordCompleted,

    isInputsValid,
    setIsNumbersValid,
    setIsExpiryDateValid,

    isAllCompleted,
  } = useCheckForm();

  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/setAlias", { state: { newCard } });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;

    const validations: ValidFlagType = {
      isCardNumbersValid: validateCardNumbers(newCard, cards),
      isExpiryDateValid: validateExpiryDate(newCard.expiryDate),
    };

    if (!Object.values(validations).every((valid) => valid)) {
      setIsNumbersValid(validations.isCardNumbersValid);
      setIsExpiryDateValid(validations.isExpiryDateValid);
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const cardInfo: CardType = {
      numbers: newCard.numbers,
      expiryDate: newCard.expiryDate,
      owner: newCard.owner ?? "",
      brand: newCard.brand,
      CVC: Number(data.CVC),
      password: [Number(data.password1), Number(data.password2)],
    };

    addNewCard(cardInfo);
    moveToHome();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SubmitManageContext.Provider
        value={{
          isInputsCompleted,
          setIsNumbersCompleted,
          setExpriyDateCompleted,
          setIsCVCCompleted,
          setIsPassWordCompleted,

          isInputsValid,
          setIsNumbersValid,
          setIsExpiryDateValid,
        }}
      >
        <CardNumberInput />
        <ExpiryDateInput />
        <OwnerInput />
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
