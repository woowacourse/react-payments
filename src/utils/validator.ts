import { CARD_RULE } from 'constants/index';

const isEmptyValue = (requiredList: Array<string>) =>
  requiredList.some(value => value === '');

const isValidCardNumber = (cardNumber: string) =>
  cardNumber.length >= CARD_RULE.NUMBER_MAX_LENGTH;

const isValidCVC = (CVC: string) => CVC.length === CARD_RULE.CVC_LENGTH;

const isValidCardInputs = (
  cardNumber: string,
  validDate: string,
  CVC: string,
  firstPassword: string,
  secondPassword: string
) => {
  if (
    isEmptyValue([cardNumber, validDate, CVC, firstPassword, secondPassword])
  ) {
    throw new Error();
  }

  if (!isValidCardNumber(cardNumber)) {
    throw new Error();
  }

  if (!isValidCVC(CVC)) {
    throw new Error();
  }
};

export default isValidCardInputs;
