import { useCallback, useRef, useState } from 'react';

import { CardInputItem } from './useCardFormState';

import { CARD_FILED_CONFIG } from '@/components/features/CardFormFiled/CardFormFiled.types';

type Props = {
  expireDates: CardInputItem[];
  setExpireDates: (expireDates: CardInputItem[]) => void;
  onValid: VoidFunction;
};

const ExpireDateIndex = {
  MONTH: 0,
  YEAR: 1,
} as const;

const MONTH = {
  START: 1,
  END: 12,
} as const;

export const useExpireDate = ({ expireDates, setExpireDates, onValid }: Props) => {
  const [error, setError] = useState<string>('');
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const moveFocusToNext = useCallback(
    (index: number) => {
      if (index < expireDates.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [expireDates.length]
  );

  const handleChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const updatedCardNumbers = [...expireDates];
      updatedCardNumbers[index].value = newValue;

      const { isValid, errorMessage } = validateSingleField(newValue, index);
      updatedCardNumbers[index].isValid = isValid;

      setExpireDates(updatedCardNumbers);
      if (!isValid) return setError(errorMessage);

      if (newValue.length === CARD_FILED_CONFIG.expireDate.valueLength) {
        moveFocusToNext(index);
      }
      checkAndProceed(updatedCardNumbers);
    },
    [expireDates]
  );

  const validateSingleField = (value: string, index: number) => {
    const valueLength = CARD_FILED_CONFIG.expireDate.valueLength;
    const currentYear = new Date().getFullYear() % 100;

    if (value.length < valueLength) {
      return {
        isValid: false,
        errorMessage: `${valueLength}자리의 숫자를 입력하셔야 합니다.`,
      };
    }

    if (!/^\d{2}$/.test(value)) {
      return {
        isValid: false,
        errorMessage: '숫자만 입력 가능합니다.',
      };
    }

    if (
      index === ExpireDateIndex.MONTH &&
      (Number(value) < MONTH.START || Number(value) > MONTH.END)
    ) {
      return {
        isValid: false,
        errorMessage: '월은 1에서 12 사이의 숫자여야 합니다.',
      };
    }

    if (index === ExpireDateIndex.YEAR && Number(value) < currentYear) {
      return {
        isValid: false,
        errorMessage: `년도는 ${currentYear}년 이후여야 합니다.`,
      };
    }

    return { isValid: true, errorMessage: '' };
  };

  const checkAndProceed = useCallback(
    (updatedCardNumbers: CardInputItem[]) => {
      const isValid = updatedCardNumbers.every((cardNumber) => cardNumber.isValid);
      const allFilled = updatedCardNumbers.every(
        (cardNumber) => cardNumber.value.length === CARD_FILED_CONFIG.expireDate.valueLength
      );

      if (isValid && allFilled && onValid) {
        onValid();
      }
    },
    [onValid]
  );

  const setInputRef = (el: HTMLInputElement | null, index: number) => {
    if (el) inputRefs.current[index] = el;
  };

  return {
    expireDates,
    error,
    handleChange,
    setInputRef,
  };
};
