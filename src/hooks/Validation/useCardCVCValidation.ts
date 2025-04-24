import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardCVCValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  const isError = errorText !== '';

  useEffect(() => {
    if (isZeroOrExactLength(cardInfo.cvc, maxLength)) {
      setErrorText('');
    } else {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
    }
  }, [cardInfo.cvc]);

  return { isError, errorText };
}

export default useCardCVCValidation;
