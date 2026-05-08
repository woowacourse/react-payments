import {useState} from 'react';
import {CARD_BRANDS, DEFAULT_CARD_NUMBER_FORMAT, getBrandName} from '../domain/cardPolicy';
import {createFlags, computeNextErrorInfo, computeNextTouched} from '../components/InfoInputSection/fieldState';
import type {CardNumbersType} from '../../../common/types/CardInfoType';
import {resizeArray} from '../../../common/utils/array';

const getCardNumberFormat = (cardNumbers: CardNumbersType) => {
  const brand = getBrandName(cardNumbers);
  return brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;
};

const buildErrorMsg = (digits: number) => `카드 번호 ${digits}자리를 입력해 주세요`;

export function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);
  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(DEFAULT_CARD_NUMBER_FORMAT.length),
    messages: Array(DEFAULT_CARD_NUMBER_FORMAT.length).fill(''),
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(DEFAULT_CARD_NUMBER_FORMAT.length));

  const brand = getBrandName(cardNumbers);
  const format = brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;

  const isComplete =
    cardNumbers.length === format.length && cardNumbers.every((chunk, i) => chunk.length === format[i]);

  const firstErrorIdx = errorInfo.flag.indexOf(true);
  const hasAnyError = firstErrorIdx !== -1;

  const applyResize = (nextChunks: CardNumbersType, nextFormat: number[]) => {
    const len = nextFormat.length;
    const trimmed = Array.from({length: len}, (_, i) => (nextChunks[i] ?? '').slice(0, nextFormat[i]));
    setCardNumbers(trimmed);
    setErrorInfo((prev) => ({
      flag: resizeArray(prev.flag, len, false),
      messages: resizeArray(prev.messages, len, ''),
      currentErrorMsg: prev.currentErrorMsg,
    }));
    setIsTouched((prev) => resizeArray(prev, len, false));
  };

  const handleChange = (index: number, eValue: string) => {
    const value = eValue.trim();
    if (!/^\d*$/.test(value)) return;

    const candidate = [...cardNumbers];
    candidate[index] = value;

    const nextFormat = getCardNumberFormat(candidate);
    if (value.length > nextFormat[index]) return;

    if (candidate.length !== nextFormat.length) {
      applyResize(candidate, nextFormat);
    } else {
      setCardNumbers(candidate);
    }

    if (isTouched[index] && value.length === nextFormat[index]) {
      const next = computeNextErrorInfo(
        errorInfo.flag,
        errorInfo.messages,
        index,
        false,
        buildErrorMsg(nextFormat[index])
      );
      setErrorInfo(next);
    }
  };

  const handleBlur = (index: number, eValue: string) => {
    setIsTouched((prev) => computeNextTouched(prev, index));

    const expected = format[index];
    const isValid = eValue.length === expected;
    const next = computeNextErrorInfo(errorInfo.flag, errorInfo.messages, index, !isValid, buildErrorMsg(expected));
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
