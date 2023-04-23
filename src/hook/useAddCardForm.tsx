import { useState, useCallback, FormEvent } from "react";
import { CardType } from "../types/card";
import { useNavigate } from "react-router-dom";

import { validateExpiryDate } from "../utils/validation";

interface Props {
  cardInfo: CardType;
  setCardInfo: (value: CardType) => void;
  addNewCard: (newCard: CardType) => void;
}

const useAddCardForm = ({ cardInfo, addNewCard, setCardInfo }: Props) => {
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
    isExpiryDateValid: true,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;

    if (!validateExpiryDate(cardInfo.expiryDate)) {
      setIsInputValid({ ...isInputValid, isExpiryDateValid: false });
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const newCard: CardType = {
      numbers: cardInfo.numbers,
      expiryDate: cardInfo.expiryDate,
      owner: cardInfo.owner,
      color: "#de75d0",
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
    };

    addNewCard(newCard);
    moveToHome();
  };

  const setCardNumbers = useCallback(
    (numbers: string) => {
      setCardInfo({ ...cardInfo, numbers: numbers });
    },
    [setCardInfo, cardInfo]
  );

  const setExpiryDate = useCallback(
    (date: string) => {
      setCardInfo({ ...cardInfo, expiryDate: date });
    },
    [setCardInfo, cardInfo]
  );

  const setOwner = useCallback(
    (owner: string) => {
      setCardInfo({ ...cardInfo, owner: owner });
    },
    [setCardInfo, cardInfo]
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

  const setValidExpiryDateValid = useCallback(
    (isValid: boolean) => {
      setIsInputValid({ ...isInputValid, isExpiryDateValid: isValid });
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

    setValidExpiryDateValid,
    isInputValid,

    isAllCompleted,
  };
};

export default useAddCardForm;
