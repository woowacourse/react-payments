import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardPasswordValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  let isCardPasswordError = false;

  if (!isZeroOrExactLength(cardInfo.passwordFront, maxLength)) isCardPasswordError = true;

  useEffect(() => {
    if (isCardPasswordError) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [cardInfo.passwordFront]);

  return { isCardPasswordError, errorText };
}

export default useCardPasswordValidation;
