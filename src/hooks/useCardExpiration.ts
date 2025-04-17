import { useState, ChangeEvent } from 'react';
import { CardExpirationDate, CardExpirationDateError } from '../../types/types';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_EXPIRATION_ERROR, CARD_EXPIRATION } from '../constants';

export const useCardExpiration = () => {
  const [cardExpirationDate, setCardExpirationDate] =
    useState<CardExpirationDate>({
      month: '',
      year: '',
    });

  const [cardExpirationDateError, setCardExpirationDateError] =
    useState<CardExpirationDateError>({
      month: false,
      year: false,
    });

  const handleCardExpirationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (isNumber) {
      if (name === 'month' && value.length > 0) {
        const monthValue = Number(value);
        if (
          monthValue < CARD_EXPIRATION.minMonth ||
          monthValue > CARD_EXPIRATION.maxMonth
        ) {
          setCardExpirationDateError({
            ...cardExpirationDateError,
            month: true,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            month: value,
          });
          return;
        }
      } else if (name === 'year' && value.length > 0) {
        const yearValue = Number(value);
        if (yearValue < CARD_EXPIRATION.minYear) {
          setCardExpirationDateError({
            ...cardExpirationDateError,
            year: true,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            year: value,
          });
          return;
        }
      }

      setCardExpirationDate({
        ...cardExpirationDate,
        [name]: value,
      });

      setCardExpirationDateError({
        ...cardExpirationDateError,
        [name]: false,
      });
    } else {
      setCardExpirationDateError({
        ...cardExpirationDateError,
        [name]: true,
      });
    }
  };

  const resetCardExpiration = () => {
    setCardExpirationDate({
      month: '',
      year: '',
    });
    setCardExpirationDateError({
      month: false,
      year: false,
    });
  };

  const isCardExpirationValid = () => {
    const { month, year } = cardExpirationDate;
    const monthValue = Number(month);
    const yearValue = Number(year);

    return (
      month.length === CARD_EXPIRATION.monthLength &&
      year.length === CARD_EXPIRATION.yearLength &&
      monthValue >= CARD_EXPIRATION.minMonth &&
      monthValue <= CARD_EXPIRATION.maxMonth &&
      yearValue >= CARD_EXPIRATION.minYear &&
      !cardExpirationDateError.month &&
      !cardExpirationDateError.year
    );
  };

  const getMonthErrorMessage = (): string | null => {
    if (!cardExpirationDateError.month) return null;

    const monthValue = Number(cardExpirationDate.month);

    if (!cardExpirationDate.month || isNaN(monthValue)) {
      return CARD_EXPIRATION_ERROR.onlyNumbers;
    }

    if (
      monthValue < CARD_EXPIRATION.minMonth ||
      monthValue > CARD_EXPIRATION.maxMonth
    ) {
      return CARD_EXPIRATION_ERROR.invalidMonth;
    }

    return null;
  };

  const getYearErrorMessage = (): string | null => {
    if (!cardExpirationDateError.year) return null;

    const yearValue = Number(cardExpirationDate.year);

    if (!cardExpirationDate.year || isNaN(yearValue)) {
      return CARD_EXPIRATION_ERROR.onlyNumbers;
    }

    if (yearValue < CARD_EXPIRATION.minYear) {
      return CARD_EXPIRATION_ERROR.invalidYear;
    }

    return null;
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpirationChange,
    resetCardExpiration,
    isCardExpirationValid,
    getMonthErrorMessage,
    getYearErrorMessage,
  };
};
