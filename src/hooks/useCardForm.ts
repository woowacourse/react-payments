import useFormField from './useFormField';

const INPUTARRAY_LENGTH = {
  CARD_NUMBER: 4,
  EXPIRATION: 2,
  CVC: 1,
  PASSWORD: 1,
  CARD_COMPANY: 1,
};

function useCardForm() {
  const cardNumber = useFormField(INPUTARRAY_LENGTH.CARD_NUMBER);
  const expirationDate = useFormField(INPUTARRAY_LENGTH.EXPIRATION);
  const cvc = useFormField(INPUTARRAY_LENGTH.CVC);
  const password = useFormField(INPUTARRAY_LENGTH.PASSWORD);
  const cardCompany = useFormField(INPUTARRAY_LENGTH.CARD_COMPANY);

  const handleCardCompanySelect = (value: string) => {
    const newValues = [...cardCompany.values];
    newValues[0] = value;
    cardCompany.values[0] = value;

    if (value) {
      cardCompany.setIsValid(true);
    } else {
      cardCompany.setIsValid(false);
    }
  };

  return {
    cardNumber,
    expirationDate,
    cvc,
    password,
    cardCompany,
    handleCardCompanySelect,
    isFormValid:
      cardNumber.isValid &&
      expirationDate.isValid &&
      cvc.isValid &&
      password.isValid &&
      cardCompany.isValid,
  };
}

export default useCardForm;
