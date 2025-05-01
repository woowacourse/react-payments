import useCardNumberValidation from './Validation/useCardNumberValidation';
import { CARD_INFO_LENGTH } from '../constants/setting';
import useCardExpirationValidation from './Validation/useCardExpirationValidation';
import useCardCVCValidation from './Validation/useCardCVCValidation';
import useCardPasswordValidation from './Validation/useCardPasswordValidation';

function useCardInfoValidation(cardInfo: CardInfo) {
  const { isCardNumberError } = useCardNumberValidation(cardInfo, CARD_INFO_LENGTH.NUMBER);
  const { isCardExpirationError } = useCardExpirationValidation(
    cardInfo,
    CARD_INFO_LENGTH.EXPIRATION
  );
  const { isCardCVCError } = useCardCVCValidation(cardInfo, CARD_INFO_LENGTH.CVC);
  const { isCardPasswordError } = useCardPasswordValidation(
    cardInfo,
    CARD_INFO_LENGTH.PASSWORD_FRONT
  );
  const isSomeEmptyValue = [
    ...Object.values(cardInfo.number),
    cardInfo.company,
    ...Object.values(cardInfo.expiration),
    cardInfo.cvc,
    cardInfo.passwordFront,
  ].some((value) => value === '');

  return (
    isCardNumberError.some((isError) => isError) ||
    Object.values(isCardExpirationError).some((isError) => isError) ||
    isCardCVCError ||
    isCardPasswordError ||
    isSomeEmptyValue
  );
}

export default useCardInfoValidation;
