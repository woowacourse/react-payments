import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postCardItem } from '../apis/card';
import { getCardIssuerByCode } from '../constants/cardIssuer';
import {
  CARD_SERVER_ERROR_FIELD,
  isCardServerErrorResponse,
  type CardServerErrorField,
  type CardServerErrors,
} from '../constants/serverError';
import type { CardFormTypes } from '../types/card';

function useAddCard(cardForm: CardFormTypes) {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState<CardServerErrors>({});

  function clearServerError(field: CardServerErrorField) {
    setServerErrors((prev) => {
      const next = { ...prev };
      delete next[field];

      return next;
    });
  }

  async function addCardItem() {
    try {
      setServerErrors({});

      await postCardItem({
        number: cardForm.cardNumber,
        expirationDate: `${cardForm.cardExpirationDate.month}/${cardForm.cardExpirationDate.year}`,
        cvc: cardForm.cardCvc,
        issuerCode: cardForm.cardIssuer,
      });

      navigate('/success', {
        state: {
          firstNumber: cardForm.cardNumber.slice(0, 4),
          issuer: getCardIssuerByCode(cardForm.cardIssuer)?.name,
        },
      });
    } catch (error) {
      if (!isCardServerErrorResponse(error)) {
        return;
      }

      const serverError = error;
      const field = CARD_SERVER_ERROR_FIELD[serverError.code];

      setServerErrors({
        [field]: serverError.message,
      });
    }
  }

  return {
    serverErrors,
    clearServerError,
    addCardItem,
  };
}

export default useAddCard;
