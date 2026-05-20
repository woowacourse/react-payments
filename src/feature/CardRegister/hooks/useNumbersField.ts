import { useState } from 'react';
import {
  hasCardNumbersError,
  validateCardNumbers,
} from '../utils/cardFormValidator';
import { isNumeric, isWithinMaxLength } from '../utils/validator';
import { getCardNumberSegmentLengths } from '../../../domain/card/utils/cardInfo';
import useTouchedFieldError from './useTouchedFieldError';
import { useInputRefs } from './useInputRefs';

type UseNumbersFieldParams = {
  onComplete?: () => void;
};

export type NumbersFieldType = ReturnType<typeof useNumbersField>;

export const useNumbersField = ({ onComplete }: UseNumbersFieldParams) => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const segmentLengths = getCardNumberSegmentLengths(cardNumbers);
  const cardNumberErrors = validateCardNumbers(cardNumbers);

  const { firstErrorIndex, errorMessage, touch } = useTouchedFieldError({
    values: cardNumbers,
    validate: (_, index) => cardNumberErrors[index] ?? null,
  });

  const isComplete = !hasCardNumbersError(cardNumbers);

  const { setInputRef, focusNextInput, handleKeyDown } =
    useInputRefs(cardNumbers);

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();
    const prevValue = cardNumbers[index];
    const isDeleting = value.length < prevValue.length;

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, segmentLengths[index]) && !isDeleting) return;

    const newChunks = cardNumbers.map((chunk, i) =>
      i === index ? value : chunk,
    );

    // 브랜드 세그먼트에 따라 최대 길이를 벗어나는 경우 숫자 자르기
    const nomalizedNewChuks = newChunks.map((chunk, index) =>
      chunk.slice(0, segmentLengths[index]),
    );

    setCardNumbers(nomalizedNewChuks);

    if (value.length === segmentLengths[index]) focusNextInput(index);

    if (!hasCardNumbersError(newChunks)) onComplete?.();
  };

  const handleNumbersBlur = (index: number) => {
    touch(index);
  };

  return {
    cardNumbers,
    segmentLengths,
    firstErrorIndex,
    errorMessage,
    isComplete,
    setInputRef,
    handleNumbersChange,
    handleNumbersBlur,
    handleKeyDown,
  };
};
