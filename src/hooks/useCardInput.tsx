import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  CvcHandler,
  CardIssuerType,
  Password,
} from '../types/cardStausTypes';
import { isCardNumberComplete, isNumericInput, isCardExpiryDateComplete } from '../utils/validate';

type UseCardInputParams = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  setCardCvc: CvcHandler;
  cardPassword: Password;
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
};

export function useCardInput({
  cardStatus,
  setCardStatus,
  cardExpiry,
  setCardExpiry,
  setCardCvc,
  cardPassword,
  cardIssuer,
  handleCardIssuer: changeCardIssuer,
}: UseCardInputParams) {
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

    if (e.target.value.length === 3 && isNumericInput(e.target.value)) {
      openStep(4);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: { cardIssuer: cardIssuer, cardNumber: cardStatus.cardNumbers[0] },
    });
  };

  const isCardPasswordValid =
    cardPassword.cardPassword.length === 2 && cardPassword.cardPasswordErrorMode === 'normal';

  return {
    step,
    handleCardNumbers,
    handleCardIssuer,
    handleCardExpiryDate,
    handleCardCvc,
    handleSubmit,
    isCardPasswordValid,
  };
}
