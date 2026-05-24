import {
  getCardBrand,
  getCardNumberArrayByBrand,
  getCardNumberError,
  getCvcError,
  getMonthError,
  getPasswordError,
  getYearError,
} from '../../utils/Validation';

interface FormState {
  cardNumber: string[];
  cardCompany: string;
  expirationDate: { month: string; year: string };
  cvc: string;
  password: string;
}

export const useCardFormValidation = (formState: FormState) => {
  const { cardNumber, cardCompany, expirationDate, cvc, password } = formState;

  const brand = getCardBrand(cardNumber.join(''));
  const format = getCardNumberArrayByBrand(brand);

  const isCardNumberCorrect =
    cardNumber.length === format.length &&
    cardNumber.every(
      (num, index) =>
        num.length === format[index] &&
        getCardNumberError(num, format[index]) === '',
    );
  const isCardCompanyCorrect = cardCompany !== '';
  const isExpirationDateCorrect =
    expirationDate.month.length === 2 &&
    expirationDate.year.length === 2 &&
    getMonthError(expirationDate.month) === '' &&
    getYearError(expirationDate.year) === '';
  const isCvcCorrect = cvc.length === 3 && getCvcError(cvc) === '';
  const isPasswordCorrect =
    password.length === 2 && getPasswordError(password) === '';

  const isFormValid =
    isCardNumberCorrect &&
    isCardCompanyCorrect &&
    isExpirationDateCorrect &&
    isCvcCorrect &&
    isPasswordCorrect;

  const canShowSteps = {
    canShowCompany: isCardNumberCorrect,
    canShowExpirationDate: isCardNumberCorrect && isCardCompanyCorrect,
    canShowCvc:
      isCardNumberCorrect && isCardCompanyCorrect && isExpirationDateCorrect,
    canShowPassword:
      isCardNumberCorrect &&
      isCardCompanyCorrect &&
      isExpirationDateCorrect &&
      isCvcCorrect,
  };

  return { isFormValid, canShowSteps };
};
