import { useRef, useEffect } from 'react';
import { CardNumbersOptions } from '@/types/CardNumbers';
import { CardExpirationDateOptions } from '@/types/CardExpirationDateOptions';
import { useCardCVCNumberOptions } from '@/hooks/useCardCVCNumber';

type Props = {
  isFieldCompletion: boolean[];
  cardNumbersForm: CardNumbersOptions;
  cardExpirationDateForm: CardExpirationDateOptions;
  cardCVCNumberForm: useCardCVCNumberOptions;
  isUserFocusing: boolean;
};

export const useCardFormFlow = ({
  isFieldCompletion,
  cardNumbersForm,
  cardExpirationDateForm,
  cardCVCNumberForm,
  isUserFocusing,
}: Props) => {
  const cardNumbersInputRef = {
    firstNumber: useRef<HTMLInputElement>(null),
    secondNumber: useRef<HTMLInputElement>(null),
    thirdNumber: useRef<HTMLInputElement>(null),
    fourthNumber: useRef<HTMLInputElement>(null),
  };
  const cardExpirationDateInputRef = {
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null),
  };
  const cardCVCInputRef = useRef<HTMLInputElement>(null);
  const cardPasswordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isUserFocusing) return;

    if (isFieldCompletion[3]) {
      cardPasswordInputRef.current?.focus();
      return;
    }
    if (isFieldCompletion[2]) {
      cardCVCInputRef.current?.focus();
      return;
    }
    if (isFieldCompletion[1]) {
      if (cardExpirationDateForm.cardExpirationDate.month.length < 2) {
        cardExpirationDateInputRef.month.current?.focus();
      } else {
        cardExpirationDateInputRef.year.current?.focus();
      }
      return;
    }
    if (isFieldCompletion[0]) {
      cardNumbersInputRef.fourthNumber.current?.blur();
      return;
    }
    if (cardNumbersForm.cardNumbers.thirdNumber.length === 4) {
      cardNumbersInputRef.fourthNumber.current?.focus();
      return;
    }
    if (cardNumbersForm.cardNumbers.secondNumber.length === 4) {
      cardNumbersInputRef.thirdNumber.current?.focus();
      return;
    }
    if (cardNumbersForm.cardNumbers.firstNumber.length === 4) {
      cardNumbersInputRef.secondNumber.current?.focus();
      return;
    }
    cardNumbersInputRef.firstNumber.current?.focus();
  }, [
    isFieldCompletion,
    cardNumbersForm.cardNumbers,
    cardExpirationDateForm.cardExpirationDate,
    cardCVCNumberForm.cardCVCNumber,
    isUserFocusing,
  ]);

  return {
    cardNumbersInputRef,
    cardExpirationDateInputRef,
    cardCVCInputRef,
    cardPasswordInputRef,
  };
};

export default useCardFormFlow;
