import { useState, ChangeEvent } from 'react';
import {CARD_CVC, CARD_PASSWORD_ERROR} from "../constants";
import {isOnlyDigits} from "../utils/validateNumber.ts";
import {CardPassword, CardPasswordError} from "../types";

export const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState<CardPassword>('');
  const [cardPasswordError, setCardPasswordError] = useState<CardPasswordError>('');

  const handleCardPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (isNumber) {
      setCardPassword(value);
      setCardPasswordError('');
    } else {
      setCardPasswordError('');
    }
  }

  const resetCardPassword = () => {
    setCardPassword('');
    setCardPasswordError('');
  }

  const isCardPasswordValid = () => {
    return (
      cardPassword !== null &&
      cardPassword.toString().length === CARD_CVC.maxLength &&
      !cardPasswordError
    );
  };

  const getCardPasswordErrorMessage = (): string | null => {
    if (!cardPasswordError) return null;

    return CARD_PASSWORD_ERROR.onlyNumbers;
  };

  return {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    resetCardPassword,
    isCardPasswordValid,
    getCardPasswordErrorMessage,
  };
};
