import { CARD_INPUT } from '../constants/standard';
import { isInputFilledUp } from '../utils/isInputFilledUp';

export const CardValidator = {
  Number: cardNumber => {
    return Object.values(cardNumber).every(
      cardNumber => isInputFilledUp(cardNumber, CARD_INPUT.NUMBER_UNIT_LENGTH) && !isNaN(cardNumber)
    );
  },
  Owner: carOwner => {
    return carOwner.length <= CARD_INPUT.OWNER_MAX_LENGTH;
  },
  Password: cardPassword => {
    return Object.values(cardPassword).every(
      cardPassword => cardPassword.length === CARD_INPUT.PASSWORD_UNIT_LENGTH && !isNaN(cardPassword)
    );
  },
  ExpiredDate: cardExpiredDate => {
    const month = Number(cardExpiredDate.month);
    const year = Number(cardExpiredDate.year);

    const isValidMonth =
      1 <= month && month <= 12 && cardExpiredDate.month.length === CARD_INPUT.MONTH_LENGTH && !isNaN(month);
    const isValidYear = 0 <= year && cardExpiredDate.year.length === CARD_INPUT.YEAR_LENGTH && !isNaN(year);

    return isValidMonth && isValidYear;
  },
  SecurityCode: securityCode => {
    return securityCode.length === CARD_INPUT.SECURITY_CODE_LENGTH && !isNaN(securityCode);
  },
};
