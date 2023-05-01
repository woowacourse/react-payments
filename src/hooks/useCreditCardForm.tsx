import { CardContext } from 'CardFormProvider';
import { defaultCreditCardForm } from 'data/creditCard';
import { checkCreditCardValidations } from 'domains/creditCard';
import { useContext } from 'react';
import { CreditCardPasswordType } from 'types';

const useCreditCardForm = () => {
  const { creditCardForm, setCreditCardForm } = useContext(CardContext);
  const isCreditCardError = !checkCreditCardValidations(creditCardForm);

  const initCreditCardForm = () => {
    setCreditCardForm({ ...defaultCreditCardForm, password: ['', ''] });
  };

  const updateCreditCardNumber = (newCreditCardNumber: string) => {
    setCreditCardForm({ ...creditCardForm, number: newCreditCardNumber });
  };

  const updateCreditCardExpiry = (newCreditCardExpiry: string) => {
    setCreditCardForm({ ...creditCardForm, expiry: newCreditCardExpiry });
  };

  const updateCreditCardOwner = (newCreditCardOwner: string) => {
    setCreditCardForm({ ...creditCardForm, owner: newCreditCardOwner });
  };

  const updateCreditCardCVC = (newCVC: string) => {
    setCreditCardForm({ ...creditCardForm, cvc: newCVC });
  };

  const updateCreditCardPassword = (newCreditCardPassword: CreditCardPasswordType) => {
    setCreditCardForm({ ...creditCardForm, password: newCreditCardPassword });
  };

  return {
    creditCardForm,
    setCreditCardForm,
    initCreditCardForm,
    updateCreditCardNumber,
    updateCreditCardExpiry,
    updateCreditCardOwner,
    updateCreditCardCVC,
    updateCreditCardPassword,
    isCreditCardError,
  };
};

export default useCreditCardForm;
