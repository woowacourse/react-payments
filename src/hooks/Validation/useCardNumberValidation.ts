import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';

function useCardNumberValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  const isError = Array.from<boolean>({ length: Object.keys(cardInfo.number).length }).fill(false);

  Object.values(cardInfo.number).forEach((number, index) => {
    if (!isZeroOrExactLength(number, maxLength)) {
      isError[index] = true;
    }
  });
  const isExactDigits = isError.some((value) => value);

  useEffect(() => {
    if (isExactDigits) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, Object.values(cardInfo.number));

  return { isError, errorText };
}

export default useCardNumberValidation;
