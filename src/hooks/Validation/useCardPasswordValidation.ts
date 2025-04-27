import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardPasswordValidation(cardInfo: CardInfo, maxLength: number) {
  const isCardPasswordError = !isZeroOrExactLength(cardInfo.passwordFront, maxLength);
  const errorText = isCardPasswordError ? ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength) : '';

  return { isCardPasswordError, errorText };
}

export default useCardPasswordValidation;
