import { useCallback, useRef, useState } from 'react';

import {
  CARD_FILED_CONFIG,
  CardInputItem,
} from '@/components/features/CardFormFiled/CardFormFiled.types';
import { validationCardInfo } from '@/utils/validation';

type Props = {
  cardNumbers: CardInputItem[];
  setCardNumbers: (updatedCardNumbers: CardInputItem[]) => void;
  onValid: VoidFunction;
};

export const useCardNumber = ({ cardNumbers, setCardNumbers, onValid }: Props) => {
  const [error, setError] = useState<string>('');
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const validateInput = useCallback((value: string) => {
    return validationCardInfo(value, CARD_FILED_CONFIG.cardNumber.valueLength);
  }, []);

  const moveFocusToNext = useCallback(
    (index: number) => {
      if (index < cardNumbers.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [cardNumbers.length]
  );

  const isAllFieldsValid = (updatedCardNumbers: CardInputItem[]) => {
    return updatedCardNumbers.every((cardNumber) => cardNumber.isValid);
  };

  const isAllFieldsFilled = (updatedCardNumbers: CardInputItem[]) => {
    return updatedCardNumbers.every(
      (cardNumber) => cardNumber.value.length === CARD_FILED_CONFIG.cardNumber.valueLength
    );
  };

  const handleChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const updatedCardNumbers = [...cardNumbers];

      updatedCardNumbers[index].value = newValue;

      const { isValid, errorMessage } = validateInput(newValue);
      updatedCardNumbers[index].isValid = isValid;

      setCardNumbers(updatedCardNumbers);
      if (!isValid) return setError(errorMessage);

      if (newValue.length === CARD_FILED_CONFIG.cardNumber.valueLength) {
        moveFocusToNext(index);
      }

      if (isAllFieldsValid(updatedCardNumbers) && isAllFieldsFilled(updatedCardNumbers)) {
        onValid();
      }
    },
    [cardNumbers]
  );

  const setInputRef = useCallback((el: HTMLInputElement | null, index: number) => {
    if (el) inputRefs.current[index] = el;
  }, []);

  return {
    cardNumbers,
    error,
    handleChange,
    setInputRef,
  };
};
