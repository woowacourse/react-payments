import { useMemo, useState } from 'react';
import { CardNumber } from '../types/card';
import { validateNumberError } from '../utils/cardInputValidations';

export function useCardNumberInput() {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({ first: '', second: '', third: '', fourth: '' });

  const cardNumberError = useMemo(() => {
    for (const key of ['first', 'second', 'third', 'fourth'] as const) {
      const value = cardNumbers[key];

      if (value === '') continue;

      const numError = validateNumberError(value);
      if (numError) return numError;

      if (value.length !== 4) return '4자리 숫자를 입력해주세요.';
    }
    return '';
  }, [cardNumbers]);

  const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
    setCardNumbers((prev) => ({ ...prev, [key]: value }));
  };

  const resetCardNumbers = () => {
    setCardNumbers({ first: '', second: '', third: '', fourth: '' });
  };

  return { cardNumbers, handleCardNumberChange, cardNumberError, resetCardNumbers };
}
