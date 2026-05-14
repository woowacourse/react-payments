import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCardCvc } from './useCardCvc';
import { useCardNumber } from './useCardNumber';
import { useCardPassword } from './useCardPassword';
import { useExpiryDate } from './useExpiryDate';
import type { CardIssuerType } from '../types/cardStausTypes';
import {
  isCardCvcComplete,
  isCardExpiryDateComplete,
  isCardIssuerSelected,
  isCardNumberComplete,
  isCardPasswordComplete,
  isNumericInput,
} from '../utils/validate';

export function useRegisterCardForm() {
  const [cardStatus, cardNumberHandler] = useCardNumber();
  const [cardExpiry, cardExpiryHandler] = useExpiryDate();
  const [cardCvc, cardCvcHandler] = useCardCvc();
  const [cardPassword, setCardPassword] = useCardPassword();
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | ''>('');
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  const openStep = (nextStep: number) => {
    setStep((prev) => Math.max(prev, nextStep));
  };

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    cardNumberHandler.handleCardNumbers(index)(e);

    const nextCardNumbers = [...cardStatus.cardNumbers];
    nextCardNumbers[index] = e.target.value;
    const nextCardNumber = nextCardNumbers.join('');

    if (isCardNumberComplete(nextCardNumber)) {
      openStep(1);
    }
  };

  const handleCardIssuer = (issuer: CardIssuerType) => {
    setCardIssuer(issuer);
    openStep(2);
  };

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    cardExpiryHandler.handleCardExpiryDate(index)(e);

    const nextCardExpiryDate = [...cardExpiry.cardExpiryDate];
    nextCardExpiryDate[index] = e.target.value;

    if (isNumericInput(e.target.value) && isCardExpiryDateComplete(nextCardExpiryDate)) {
      openStep(3);
    }
  };

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    cardCvcHandler.handleCardCvc(e);

    if (isCardCvcComplete(e.target.value)) {
      openStep(4);
    }
  };

  const isFormValid =
    isCardNumberComplete(cardStatus.cardNumbers.join('')) &&
    cardStatus.cardNumberErrorMode === 'normal' &&
    isCardIssuerSelected(cardIssuer) &&
    isCardExpiryDateComplete(cardExpiry.cardExpiryDate) &&
    cardExpiry.cardExpiryDateErrorMode === 'normal' &&
    isCardCvcComplete(cardCvc.cardCvc) &&
    cardCvc.cardCvcErrorMode === 'normal' &&
    isCardPasswordComplete(cardPassword.cardPassword) &&
    cardPassword.cardPasswordErrorMode === 'normal';

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    navigate('/complete', {
      state: { cardIssuer: cardIssuer, cardNumber: cardStatus.cardNumbers[0] },
    });
  };

  return {
    cardStatus,
    setCardStatus: {
      ...cardNumberHandler,
      handleCardNumbers,
    },
    cardExpiry,
    setCardExpiry: {
      ...cardExpiryHandler,
      handleCardExpiryDate,
    },
    cardCvc,
    setCardCvc: {
      ...cardCvcHandler,
      handleCardCvc,
    },
    cardPassword,
    setCardPassword,
    cardIssuer,
    handleCardIssuer,
    step,
    handleSubmit,
    isFormValid,
  };
}
