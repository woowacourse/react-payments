import {useState} from 'react';
import {DEFAULT_CARD_NUMBER_FORMAT, getBrandName, getFormatByBrand, getCardNumberErrorMsg} from '../domain/cardBrand';
import {createFlags, computeNextErrorInfo, computeNextTouched} from './fieldErrorUtils';
import {resizeArray} from '../../../common/utils/array';

export function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [errorInfo, setErrorInfo] = useState({
    errorFlags: createFlags(DEFAULT_CARD_NUMBER_FORMAT.length),
    errorMessages: Array(DEFAULT_CARD_NUMBER_FORMAT.length).fill(''),
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(DEFAULT_CARD_NUMBER_FORMAT.length));

  const brand = getBrandName(cardNumbers);
  const format = getFormatByBrand(brand);

  const isComplete =
    cardNumbers.length === format.length && cardNumbers.every((chunk, i) => chunk.length === format[i]);

  const firstErrorIdx = errorInfo.errorFlags.indexOf(true);
  const hasAnyError = firstErrorIdx !== -1;

  const applyResize = (nextChunks: string[], nextFormat: number[]) => {
    const len = nextFormat.length;
    const trimmed = Array.from({length: len}, (_, i) => (nextChunks[i] ?? '').slice(0, nextFormat[i]));
    setCardNumbers(trimmed);
    setErrorInfo((prev) => ({
      errorFlags: resizeArray(prev.errorFlags, len, false),
      errorMessages: resizeArray(prev.errorMessages, len, ''),
      currentErrorMsg: prev.currentErrorMsg,
    }));
    setIsTouched((prev) => resizeArray(prev, len, false));
  };

  const handleChange = (index: number, eValue: string) => {
    const value = eValue.trim();
    if (!/^\d*$/.test(value)) return;

    const candidate = [...cardNumbers];
    candidate[index] = value;

    const nextFormat = getFormatByBrand(getBrandName(candidate));
    if (value.length > nextFormat[index]) return;

    if (candidate.length !== nextFormat.length) {
      applyResize(candidate, nextFormat);
    } else {
      setCardNumbers(candidate);
    }

    if (isTouched[index] && value.length === nextFormat[index]) {
      const next = computeNextErrorInfo(
        errorInfo.errorFlags,
        errorInfo.errorMessages,
        index,
        false,
        getCardNumberErrorMsg(nextFormat[index])
      );
      setErrorInfo(next);
    }
  };

  const handleBlur = (index: number, eValue: string) => {
    setIsTouched((prev) => computeNextTouched(prev, index));

    const expected = format[index];
    const isValid = eValue.length === expected;
    const next = computeNextErrorInfo(errorInfo.errorFlags, errorInfo.errorMessages, index, !isValid, getCardNumberErrorMsg(expected));
    setErrorInfo(next);
  };

  return {
    cardNumbers,
    format,
    brand,
    isComplete,
    hasAnyError,
    firstErrorIdx,
    errorMsg: errorInfo.currentErrorMsg,
    handleChange,
    handleBlur,
  };
}
