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

  const applyResize = (nextChunks: string[], detectedFormat: number[]) => {
    const fieldCount = detectedFormat.length;
    const clippedChunks = Array.from({length: fieldCount}, (_, i) => (nextChunks[i] ?? '').slice(0, detectedFormat[i]));
    setCardNumbers(clippedChunks);
    setErrorInfo((prev) => ({
      errorFlags: resizeArray(prev.errorFlags, fieldCount, false),
      errorMessages: resizeArray(prev.errorMessages, fieldCount, ''),
      currentErrorMsg: prev.currentErrorMsg,
    }));
    setIsTouched((prev) => resizeArray(prev, fieldCount, false));
  };

  const handleChange = (index: number, rawValue: string) => {
    const value = rawValue.trim();
    if (!/^\d*$/.test(value)) return;

    const updatedChunks = [...cardNumbers];
    updatedChunks[index] = value;

    const detectedFormat = getFormatByBrand(getBrandName(updatedChunks));
    if (value.length > detectedFormat[index]) return;

    if (updatedChunks.length !== detectedFormat.length) {
      applyResize(updatedChunks, detectedFormat);
    } else {
      setCardNumbers(updatedChunks);
    }

    if (isTouched[index] && value.length === detectedFormat[index]) {
      const nextErrorInfo = computeNextErrorInfo(
        errorInfo.errorFlags,
        errorInfo.errorMessages,
        index,
        false,
        getCardNumberErrorMsg(detectedFormat[index])
      );
      setErrorInfo(nextErrorInfo);
    }
  };

  const handleBlur = (index: number, rawValue: string) => {
    setIsTouched((prev) => computeNextTouched(prev, index));

    const requiredLength = format[index];
    const isValid = rawValue.length === requiredLength;
    const nextErrorInfo = computeNextErrorInfo(
      errorInfo.errorFlags,
      errorInfo.errorMessages,
      index,
      !isValid,
      getCardNumberErrorMsg(requiredLength)
    );
    setErrorInfo(nextErrorInfo);
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
