import { AddCardFormProps, CardInfoInput, InputStatus } from '../../../type';
import { INVALID_MESSAGE } from '../../../utils/constants';

export const calcMultipleStatus = (arr: InputStatus[]): InputStatus => {
  if (arr.includes('INVALID')) return 'INVALID';
  if (arr.filter((element) => element === 'VALID').length === arr.length) return 'VALID';
  return 'INIT';
};

export const getErrorMessage = (inputType: CardInfoInput, status: InputStatus) => {
  return INVALID_MESSAGE[inputType][status];
};

export const getTotalStatus = (formInputs: AddCardFormProps) => {
  return Object.values(formInputs).map((input) => input.status);
};

export const getSubmitData = ({
  cardCompany,
  cardFirstNumber,
  cardSecondNumber,
  cardThirdNumber,
  cardFourthNumber,
  cardOwner,
  expireMonth,
  expireYear,
  securityCode,
  cardPassword1,
  cardPassword2,
}: AddCardFormProps) => {
  return {
    cardCompany: cardCompany.value,
    cardNumber: {
      first: cardFirstNumber.value,
      second: cardSecondNumber.value,
      third: cardThirdNumber.value,
      fourth: cardFourthNumber.value,
    },
    cardOwner: cardOwner.value,
    expireMonth: expireMonth.value,
    expireYear: expireYear.value,
    securityCode: securityCode.value,
    cardPassword: {
      first: cardPassword1.value,
      second: cardPassword2.value,
    },
  };
};
