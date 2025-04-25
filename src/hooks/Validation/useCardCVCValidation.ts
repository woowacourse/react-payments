import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardCVCValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  let isCardCVCError = false;

  if (!isZeroOrExactLength(cardInfo.cvc, maxLength)) isCardCVCError = true;

  useEffect(() => {
    if (isCardCVCError) setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    else setErrorText('');
  }, [cardInfo.cvc]);

  return { isCardCVCError, errorText };
}

export default useCardCVCValidation;
