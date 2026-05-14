import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardIssuerType,
  Password,
} from '../types/cardStausTypes';
import {
  isCardCvcComplete,
  isCardExpiryDateComplete,
  isCardIssuerSelected,
  isCardNumberComplete,
  isCardPasswordComplete,
  isNumericInput,
} from '../utils/validate';

type UseRegisterCardFormParams = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
  cardPassword: Password;
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
};

export function useRegisterCardForm({
  cardStatus,
  setCardStatus,
  cardExpiry,
  setCardExpiry,
  cardCvc,
  setCardCvc,
  cardPassword,
  cardIssuer,
  handleCardIssuer: changeCardIssuer,
}: UseRegisterCardFormParams) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const openStep = (nextStep: number) => {
    setStep((prev) => Math.max(prev, nextStep));
  };

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardStatus.handleCardNumbers(index)(e);

    const nextCardNumbers = [...cardStatus.cardNumbers];
    nextCardNumbers[index] = e.target.value;
    const nextCardNumber = nextCardNumbers.join('');

    if (isCardNumberComplete(nextCardNumber)) {
      openStep(1);
    }
  };

  const handleCardIssuer = (issuer: CardIssuerType) => {
    changeCardIssuer(issuer);
    openStep(2);
  };

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry.handleCardExpiryDate(index)(e);

    const nextCardExpiryDate = [...cardExpiry.cardExpiryDate];
    nextCardExpiryDate[index] = e.target.value;

    if (isNumericInput(e.target.value) && isCardExpiryDateComplete(nextCardExpiryDate)) {
      openStep(3);
    }
  };

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvc.handleCardCvc(e);

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
    step,
    handleCardNumbers,
    handleCardIssuer,
    handleCardExpiryDate,
    handleCardCvc,
    handleSubmit,
    isFormValid,
  };
}
