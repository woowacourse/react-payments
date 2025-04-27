import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';
import isOverThanToday from '../../utils/isOverThanToday';

function useCardExpirationValidation(cardInfo: CardInfo, maxLength: number) {
  const { month, year } = cardInfo.expiration;
  const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
  const isValidYear = isOverThanToday(Number(month), Number(year));
  const isMonthError = !isZeroOrExactLength(month, maxLength) || (month !== '' && !isValidMonth);
  const isYearError =
    !isZeroOrExactLength(year, maxLength) || (month !== '' && year !== '' && !isValidYear);
  const isCardExpirationError = [isMonthError, isYearError];

  const errorText = (() => {
    if (!isZeroOrExactLength(month, maxLength) || !isZeroOrExactLength(year, maxLength)) {
      return ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength);
    }
    if (month !== '' && !isValidMonth) {
      return ERROR_MESSAGE.INVALID_MONTH;
    }
    if (month !== '' && year !== '' && !isValidYear) {
      return ERROR_MESSAGE.INVALID_YEAR;
    }
    return '';
  })();

  return { isCardExpirationError, errorText };
}

export default useCardExpirationValidation;
