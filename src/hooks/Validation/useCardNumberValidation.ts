import isZeroOrExactLength from '../../utils/isExactLength';
import { ERROR_MESSAGE } from '../../constants/guide';

function useCardNumberValidation(cardInfo: CardInfo, maxLength: number) {
  const isCardNumberError = Object.values(cardInfo.number).map((number) => {
    return !isZeroOrExactLength(number, maxLength);
  });

  const isExactDigits = isCardNumberError.some((value) => value);
  const errorText = isExactDigits ? ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength) : '';

  return { isCardNumberError, errorText };
}

export default useCardNumberValidation;
