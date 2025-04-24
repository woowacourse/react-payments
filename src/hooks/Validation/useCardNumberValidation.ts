import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';

function useCardNumberValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  const isError = errorText !== '';

  const condition = [
    cardInfo.number.first,
    cardInfo.number.second,
    cardInfo.number.third,
    cardInfo.number.fourth,
  ].some((number) => {
    if (isZeroOrExactLength(number, maxLength)) return false;
    return true;
  });

  useEffect(() => {
    if (condition) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [
    cardInfo.number.first,
    cardInfo.number.second,
    cardInfo.number.third,
    cardInfo.number.fourth,
  ]);

  return { isError, errorText };
}

export default useCardNumberValidation;
