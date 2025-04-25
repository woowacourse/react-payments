import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';
import isOverThanToday from '../../utils/isOverThanToday';

function useCardExpirationValidation(cardInfo: CardInfo, maxLength: number) {
  const [errorText, setErrorText] = useState('');

  const { month, year } = cardInfo.expiration;
  const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
  const isValidYear = isOverThanToday(Number(month), Number(year));

  const isCardExpirationError = [
    !isZeroOrExactLength(month, maxLength) || (month !== '' && !isValidMonth),
    !isZeroOrExactLength(year, maxLength) || (month !== '' && year !== '' && !isValidYear),
  ];

  const isExactDigits =
    !isZeroOrExactLength(month, maxLength) || !isZeroOrExactLength(year, maxLength);

  useEffect(() => {
    if (isExactDigits) {
      setErrorText(ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength));
      return;
    }
    if (month !== '' && !isValidMonth) {
      setErrorText(ERROR_MESSAGE.INVALID_MONTH);
      return;
    }
    if (month !== '' && year !== '' && !isValidYear) {
      setErrorText(ERROR_MESSAGE.INVALID_YEAR);
      return;
    }
    setErrorText('');
  }, [month, year]);

  return { isCardExpirationError, errorText };
}

export default useCardExpirationValidation;
