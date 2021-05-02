import {
  CARD_NUMBER_INPUT,
  CARD_OWNER_INPUT,
  CARD_PASSWORD_INPUT,
  EXPIRED_DATE_INPUT,
  SECURITY_CODE_INPUT,
} from '../../constants/input';
import { isFilledAllNumber } from '../../utils';

const isValidCardNumberInput = cardNumber => {
  return Object.values(cardNumber).every(cardNumber => isFilledAllNumber(cardNumber, CARD_NUMBER_INPUT.LENGTH));
};

const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate.month);

  return (
    EXPIRED_DATE_INPUT.RANGE.MONTH.MIN <= month &&
    month <= EXPIRED_DATE_INPUT.RANGE.MONTH.MAX &&
    isFilledAllNumber(cardExpiredDate.month, EXPIRED_DATE_INPUT.LENGTH)
  );
};

const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate.year);

  return (
    EXPIRED_DATE_INPUT.RANGE.YEAR.MIN <= year && isFilledAllNumber(cardExpiredDate.year, EXPIRED_DATE_INPUT.LENGTH)
  );
};

const isValidCardOwnerInput = cardOwner => cardOwner.length <= CARD_OWNER_INPUT.LENGTH.MAX;

const isValidSecurityCodeInput = securityCode => isFilledAllNumber(securityCode, SECURITY_CODE_INPUT.LENGTH);

const isValidCardPasswordInput = cardPassword =>
  Object.values(cardPassword).every(cardPassword => isFilledAllNumber(cardPassword, CARD_PASSWORD_INPUT.LENGTH));

export {
  isValidCardNumberInput,
  isValidMonthInput,
  isValidYearInput,
  isValidCardOwnerInput,
  isValidSecurityCodeInput,
  isValidCardPasswordInput,
};
