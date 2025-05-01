import { CARD_INFO_LENGTH } from '../constants/setting';
import useStep from './useStep';
import useCardCVCValidation from './Validation/useCardCVCValidation';
import useCardExpirationValidation from './Validation/useCardExpirationValidation';
import useCardNumberValidation from './Validation/useCardNumberValidation';
import useCardPasswordValidation from './Validation/useCardPasswordValidation';

function useDynamicRenderingStep(cardInfo: CardInfo) {
  const { step, increaseStep } = useStep(0);

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

  const conditionsByStep = [
    !isCardNumberError.some((isError) => isError) &&
      !Object.values(cardInfo.number).some((value) => value === ''),
    cardInfo.company !== '',
    !Object.values(isCardExpirationError).some((isError) => isError) &&
      !Object.values(cardInfo.expiration).some((value) => value === ''),
    !isCardCVCError && cardInfo.cvc !== '',
    !isCardPasswordError && cardInfo.passwordFront,
  ];

  conditionsByStep.forEach((condition, index) => {
    if (step < index + 1 && condition) increaseStep();
  });

  return { step };
}

export default useDynamicRenderingStep;
