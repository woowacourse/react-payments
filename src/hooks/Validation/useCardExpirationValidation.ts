import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';
import isOverThanToday from '../../utils/isOverThanToday';

function useCardExpirationValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');
  const isError = errorText !== '';

  const isValidMonth =
    Number(cardInfo.expiration.month) >= 1 && Number(cardInfo.expiration.month) <= 12;
  const isValidYear = isOverThanToday(
    Number(cardInfo.expiration.month),
    Number(cardInfo.expiration.year)
  );
  const isExactDigits = [cardInfo.expiration.month, cardInfo.expiration.year].some((number) => {
    if (isZeroOrExactLength(number, maxLength)) return false;
    return true;
  });

  useEffect(() => {
    if (isExactDigits) {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
      return;
    }
    if (cardInfo.expiration.month !== '' && !isValidMonth) {
      setErrorText(ERROR_MESSAGE.INVALID_MONTH);
      return;
    }
    if (cardInfo.expiration.year !== '' && !isValidYear) {
      setErrorText(ERROR_MESSAGE.INVALID_YEAR);
      return;
    }
    setErrorText('');
  }, [cardInfo.expiration.month, cardInfo.expiration.year]);

  return { isError, errorText };
}

export default useCardExpirationValidation;
