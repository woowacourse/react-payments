import { CardContext } from 'CardProvider';
import { checkCreditCardValidations } from 'domains/creditCard';
import { useContext } from 'react';

const useCreditCardForm = () => {
  const { creditCardForm, setCreditCardForm } = useContext(CardContext);
  const isCreditCardError = checkCreditCardValidations(creditCardForm);

  return { creditCardForm, setCreditCardForm, isCreditCardError };
};

export default useCreditCardForm;
