import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardPasswordValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  let isError = false;

  if (!isZeroOrExactLength(cardInfo.passwordFront, maxLength)) isError = true;

  useEffect(() => {
    if (isError) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [cardInfo.passwordFront]);

  return { isError, errorText };
}

export default useCardPasswordValidation;
