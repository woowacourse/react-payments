import { CardContext, defaultCreditCardForm } from 'CardFormProvider';
import { checkCreditCardValidations } from 'domains/creditCard';
import { useContext } from 'react';

const useCreditCardForm = () => {
  const { creditCardForm, setCreditCardForm } = useContext(CardContext);
  const isCreditCardError = checkCreditCardValidations(creditCardForm);

  const initCreditCardForm = () => {
    setCreditCardForm(defaultCreditCardForm);
  };

  return {
    creditCardForm, setCreditCardForm, initCreditCardForm, isCreditCardError
  };
};

export default useCreditCardForm;
