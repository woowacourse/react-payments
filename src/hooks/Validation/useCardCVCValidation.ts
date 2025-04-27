import { ERROR_MESSAGE } from '../../constants/guide';
import isZeroOrExactLength from '../../utils/isExactLength';

function useCardCVCValidation(cardInfo: CardInfo, maxLength: number) {
  const isCardCVCError = !isZeroOrExactLength(cardInfo.cvc, maxLength);
  const errorText = isCardCVCError ? ERROR_MESSAGE.GET_LENGTH_TEXT(maxLength) : '';

  return { isCardCVCError, errorText };
}

export default useCardCVCValidation;
