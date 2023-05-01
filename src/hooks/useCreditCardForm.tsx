import { CardContext } from 'CardFormProvider';
import { defaultCreditCardForm } from 'data/creditCard';
import { checkCreditCardValidations } from 'domains/creditCard';
import { useContext } from 'react';

const useCreditCardForm = () => {
  const { creditCardForm, setCreditCardForm } = useContext(CardContext);
  const isCreditCardError = !checkCreditCardValidations(creditCardForm);

  const initCreditCardForm = () => {
    setCreditCardForm({ ...defaultCreditCardForm, password: ['', ''] });
  };

  return {
    creditCardForm,
    setCreditCardForm,
    initCreditCardForm,
    isCreditCardError,
  };
};

export default useCreditCardForm;
