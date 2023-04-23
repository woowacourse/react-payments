import { useState, useCallback, FormEvent } from "react";
import { CardType } from "../types/card";
import { useNavigate } from "react-router-dom";

import { validateCardNumbers, validateExpiryDate } from "../validation/validation";

interface Props {
  cards: CardType[];
  newCard: CardType;
  setNewCard: (value: CardType) => void;
  addNewCard: (newCard: CardType) => void;
}

const useAddCardForm = ({ cards, newCard, addNewCard, setNewCard }: Props) => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };

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
    isCardNumbersValid: true,
    isExpiryDateValid: true,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;

    if (!validateExpiryDate(newCard.expiryDate)) {
      setIsInputValid({ ...isInputValid, isExpiryDateValid: false });
      return;
    }

    if (!validateCardNumbers(newCard, cards)) {
      setIsInputValid({ ...isInputValid, isCardNumbersValid: false });
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

  const setCardNumbers = useCallback(
    (numbers: string) => {
      setNewCard({ ...newCard, numbers: numbers });
    },
    [setNewCard, newCard]
  );

  const setExpiryDate = useCallback(
    (date: string) => {
      setNewCard({ ...newCard, expiryDate: date });
    },
    [setNewCard, newCard]
  );

  const setOwner = useCallback(
    (owner: string) => {
      setNewCard({ ...newCard, owner: owner });
    },
    [setNewCard, newCard]
  );

  const setCardNumbersCompleted = useCallback(
    (isCompleted: boolean) => {
      setIsInputCompleted({ ...isInputCompleted, isCardNumberCompleted: isCompleted });
    },
    [setIsInputCompleted, isInputCompleted]
  );

  const setExpriyDateCompleted = useCallback(
    (isCompleted: boolean) => {
      setIsInputCompleted({ ...isInputCompleted, isExpiryDateCompleted: isCompleted });
    },
    [setIsInputCompleted, isInputCompleted]
  );

  const setCVCCompleted = useCallback(
    (isCompleted: boolean) => {
      setIsInputCompleted({ ...isInputCompleted, isCVCCompleted: isCompleted });
    },
    [setIsInputCompleted, isInputCompleted]
  );

  const setPasswordCompleted = useCallback(
    (isCompleted: boolean) => {
      setIsInputCompleted({ ...isInputCompleted, isPasswordCompleted: isCompleted });
    },
    [setIsInputCompleted, isInputCompleted]
  );

  const setExpiryDateValid = useCallback(
    (isValid: boolean) => {
      setIsInputValid({ ...isInputValid, isExpiryDateValid: isValid });
    },
    [setIsInputValid, isInputValid]
  );

  const setCardNumbersValid = useCallback(
    (isValid: boolean) => {
      setIsInputValid({ ...isInputValid, isCardNumbersValid: isValid });
    },
    [setIsInputValid, isInputValid]
  );

  return {
    handleSubmit,

    setCardNumbers,
    setExpiryDate,
    setOwner,

    setCardNumbersCompleted,
    setExpriyDateCompleted,
    setCVCCompleted,
    setPasswordCompleted,

    setExpiryDateValid,
    setCardNumbersValid,
    isInputValid,

    isAllCompleted,
  };
};

export default useAddCardForm;
