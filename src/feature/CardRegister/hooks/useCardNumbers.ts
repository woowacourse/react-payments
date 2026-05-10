import {useState} from 'react';

import {createFlags, createErrInfo, updateErrInfo, updateTouched} from '../utils/fieldErrorUtils';
import {DEFAULT_CARD_NUMBER_FORMAT, getBrandName, getFormatByBrand, getCardNumberErrMsg} from '@/domain/card/cardBrand';

const CARD_NUMBER_FIELD_COUNT = DEFAULT_CARD_NUMBER_FORMAT.length;

export function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [errInfo, setErrInfo] = useState(createErrInfo(CARD_NUMBER_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(CARD_NUMBER_FIELD_COUNT));

  const brand = getBrandName(cardNumbers);
  const format = getFormatByBrand(brand);

  // 브랜드 변경으로 포맷이 달라질 때 칸 수, 에러, touched 배열을 새 포맷에 맞게 재조정
  const applyResize = (nextChunks: string[], detectedFormat: number[]) => {
    // 1. 기존 칸들을 이어 붙여 숫자 전체를 하나의 문자열로 합침
    let digits = nextChunks.join('');

    // 2. 새 포맷 길이대로 앞에서부터 잘라 재분배
    const redistributed = detectedFormat.map((len) => {
      const chunk = digits.slice(0, len);
      digits = digits.slice(len);
      return chunk;
    });

    // 3. 재분배된 값으로 상태 갱신, 에러·touched는 포맷이 바뀌었으므로 완전 초기화
    setCardNumbers(redistributed);
    setErrInfo(createErrInfo(detectedFormat.length));
    setIsTouched(createFlags(detectedFormat.length));
  };

  const handleChange = (index: number, rawValue: string) => {
    // 1. 숫자 아닌 입력은 무시
    const value = rawValue.trim();
    if (!/^\d*$/.test(value)) return;

    // 2. 현재 입력값 기준으로 브랜드·포맷 재감지, 자릿수 초과 시 무시
    const updatedChunks = [...cardNumbers];
    updatedChunks[index] = value;
    const detectedFormat = getFormatByBrand(getBrandName(updatedChunks));
    if (value.length > detectedFormat[index]) return;

    // 3. 포맷이 바뀌면 칸 수 재조정, 아니면 값만 반영
    if (updatedChunks.length !== detectedFormat.length) {
      applyResize(updatedChunks, detectedFormat);
      return;
    }
    setCardNumbers(updatedChunks);

    // 4. 이미 touched 상태에서 해당 칸이 완성되면 에러 해제
    if (isTouched[index] && value.length === detectedFormat[index]) {
      setErrInfo(
        updateErrInfo(errInfo.errFlags, errInfo.errMessages, index, false, getCardNumberErrMsg(detectedFormat[index]))
      );
    }
  };

  const handleBlur = (index: number, rawValue: string) => {
    // 1. touched 기록
    setIsTouched((prev) => updateTouched(prev, index));

    // 2. 요구 자릿수와 불일치하면 에러 표시
    const requiredLength = format[index];
    const isValid = rawValue.length === requiredLength;
    setErrInfo(
      updateErrInfo(errInfo.errFlags, errInfo.errMessages, index, !isValid, getCardNumberErrMsg(requiredLength))
    );
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const isComplete =
    cardNumbers.length === format.length && cardNumbers.every((chunk, i) => chunk.length === format[i]);

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
