import { CARD_RULE } from '../constants';

const isEmptyValue = requiredList => requiredList.some(value => value === '');

const isValidCardNumber = cardNumber =>
  cardNumber.length === CARD_RULE.NUMBER_MAX_LENGTH;

const isValidMonth = month => month >= 1 && month <= 12;

const isValidCVC = CVC => CVC.length === CARD_RULE.CVC_LENGTH;

const isValidCardInputs = (
  cardNumber,
  validDate,
  CVC,
  firstPassword,
  secondPassword
) => {
  if (
    isEmptyValue([cardNumber, validDate, CVC, firstPassword, secondPassword])
  ) {
    throw new Error();
  }

  if (!isValidCardNumber(cardNumber)) {
    throw new Error();
  }

  if (!isValidMonth(validDate.split('/')[0])) {
    throw new Error();
  }

  if (!isValidCVC(CVC)) {
    throw new Error();
  }
};

export default isValidCardInputs;
