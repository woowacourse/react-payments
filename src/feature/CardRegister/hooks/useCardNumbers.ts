import {useState} from 'react';
import {DEFAULT_CARD_NUMBER_FORMAT, getBrandName, getFormatByBrand, getCardNumberErrMsg} from '../domain/cardBrand';
import {createFlags, computeNextErrInfo, computeNextTouched} from './fieldErrorUtils';
import {resizeArray} from '../../../common/utils/array';

export function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [errInfo, setErrInfo] = useState({
    errFlags: createFlags(DEFAULT_CARD_NUMBER_FORMAT.length),
    errMessages: Array(DEFAULT_CARD_NUMBER_FORMAT.length).fill('') as string[],
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(DEFAULT_CARD_NUMBER_FORMAT.length));

  const brand = getBrandName(cardNumbers);
  const format = getFormatByBrand(brand);

  const isComplete =
    cardNumbers.length === format.length && cardNumbers.every((chunk, i) => chunk.length === format[i]);

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const applyResize = (nextChunks: string[], detectedFormat: number[]) => {
    const fieldCount = detectedFormat.length;
    const clippedChunks = Array.from({length: fieldCount}, (_, i) => (nextChunks[i] ?? '').slice(0, detectedFormat[i]));
    setCardNumbers(clippedChunks);
    setErrInfo((prev) => ({
      errFlags: resizeArray(prev.errFlags, fieldCount, false),
      errMessages: resizeArray(prev.errMessages, fieldCount, ''),
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
      setErrInfo(computeNextErrInfo(
        errInfo.errFlags,
        errInfo.errMessages,
        index,
        false,
        getCardNumberErrMsg(detectedFormat[index])
      ));
    }
  };

  const handleBlur = (index: number, rawValue: string) => {
    setIsTouched((prev) => computeNextTouched(prev, index));

    const requiredLength = format[index];
    const isValid = rawValue.length === requiredLength;
    setErrInfo(computeNextErrInfo(
      errInfo.errFlags,
      errInfo.errMessages,
      index,
      !isValid,
      getCardNumberErrMsg(requiredLength)
    ));
  };

  return {
    cardNumbers,
    format,
    brand,
    isComplete,
    hasAnyErr,
    firstErrIdx,
    errMsg,
    handleChange,
    handleBlur,
  };
}
