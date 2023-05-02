import { cardNumberValidator } from '../components/addCardForm/cardInfoInputs/CardNumberInput';
import { expirationDateInputValidator } from '../components/addCardForm/cardInfoInputs/ExpirationDateInput';
import { ownerNameInputValidator } from '../components/addCardForm/cardInfoInputs/OwnerNameInput';
import { passwordInputValidator } from '../components/addCardForm/cardInfoInputs/PasswordInput';
import { securityCodeInputValidator } from '../components/addCardForm/cardInfoInputs/SecurityCodeInput';
import { useCardInfoValueContext } from './cardInfoContext';
import { useErrorMessage } from './useError';

export const useFormValidation = () => {
  const { cardNumber, expirationDate, ownerName, securityCode, password } =
    useCardInfoValueContext();
  const cardNumberError = useErrorMessage(cardNumber, cardNumberValidator);
  const expirationDateError = useErrorMessage(
    [expirationDate.month, expirationDate.year],
    expirationDateInputValidator
  );
  const ownerNameError = useErrorMessage(ownerName, ownerNameInputValidator);
  const securityCodeError = useErrorMessage(
    securityCode,
    securityCodeInputValidator
  );
  const passwordError = useErrorMessage(password, passwordInputValidator);

  return (
    cardNumberError === null &&
    expirationDateError === null &&
    ownerNameError === null &&
    securityCodeError === null &&
    passwordError === null
  );
};
