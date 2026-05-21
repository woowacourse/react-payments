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
import { postCard } from '../api/postCard';
import { HttpError, NetworkError } from '../errors/errors';
import { toCreateCardRequest } from '../utils/toCreateCardRequest';

export function useRegisterCardForm() {
  const [cardStatus, cardNumberHandler] = useCardNumber();
  const [cardExpiry, cardExpiryHandler] = useExpiryDate();
  const [cardCvc, cardCvcHandler] = useCardCvc();
  const [cardPassword, cardPasswordHandler] = useCardPassword();
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | ''>('');
  const [serverFieldErrors, setServerFieldErrors] = useState({
    cvc: '',
  });
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
    setServerFieldErrors((prev) => ({ ...prev, cvc: '' }));
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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid || !isCardIssuerSelected(cardIssuer)) {
      return;
    }

    const formData = toCreateCardRequest(
      cardStatus.cardNumbers,
      cardExpiry.cardExpiryDate,
      cardCvc.cardCvc,
      cardIssuer,
    );

    try {
      const { id } = await postCard(formData);

      navigate(`/complete/${id}`, {
        state: { cardIssuer: cardIssuer, cardNumber: cardStatus.cardNumbers[0] },
      });
    } catch (error) {
      if (error instanceof HttpError) {
        if (error.code === 'INVALID_CVC') {
          setServerFieldErrors((prev) => ({ ...prev, cvc: error.message }));
          return;
        }

        alert(error.message);
        return;
      }
      if (error instanceof NetworkError) {
        alert(error.message);
        return;
      }

      alert('카드 등록에 실패했습니다.');
    }
  };

  return {
    cardStatus,
    onChangeCardNumber: handleCardNumbers,
    onValidateCardNumber: cardNumberHandler.validateCardNumbers,
    cardExpiry,
    onChangeCardExpiryDate: handleCardExpiryDate,
    onBlurMonth: cardExpiryHandler.handleMonthBlur,
    onBlurYear: cardExpiryHandler.handleYearBlur,
    cardCvc,
    onChangeCardCvc: handleCardCvc,
    onBlurCardCvc: cardCvcHandler.handleCvcBlur,
    cardPassword,
    onChangeCardPassword: cardPasswordHandler.handleCardPassword,
    onBlurCardPassword: cardPasswordHandler.handlePasswordBlur,
    cardIssuer,
    handleCardIssuer,
    serverFieldErrors,
    step,
    handleSubmit,
    isFormValid,
  };
}
