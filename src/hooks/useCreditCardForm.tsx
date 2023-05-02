import { CardContext } from 'CardFormProvider';
import { defaultCreditCardForm } from 'data/creditCard';
import {
  checkCreditCardValidations,
  convertSecuredCreditCard,
} from 'domains/creditCard';
import { ChangeEvent, useContext, useState } from 'react';
import { CreditCard } from 'types';

const useCreditCardForm = () => {
  const { creditCardForm, setCreditCardForm } = useContext(CardContext);

  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');

  const handleCreditCardNumberChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCreditCardNumber = event.target.value.replace(/\D/g, '');

    if (newCreditCardNumber.length > 16) return;

    const markedNumber = convertSecuredCreditCard(newCreditCardNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCardForm({ ...creditCardForm, number: newCreditCardNumber });
  };

  const handleCreditCardExpiryChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCardExpiry = event.target.value;
    const cleanedExpiry = newCardExpiry.replaceAll('/', '').replace(/\D/g, '');
    if (cleanedExpiry.length > 4) return;
    setCreditCardForm({ ...creditCardForm, expiry: cleanedExpiry });
  };

  const handleCreditCardOwnerChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newName = event.target.value.toUpperCase();
    if (newName.length <= 30) {
      setCreditCardForm({ ...creditCardForm, owner: newName });
    }
  };

  const handleCreditCardCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value.replace(/\D/g, '');
    if (newCVC.length <= 3) {
      setCreditCardForm({ ...creditCardForm, cvc: newCVC });
    }
  };

  const handleCreditCardPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newPassword = event.target.value.replace(/\D/g, '');
    if (newPassword.length <= 1) {
      const { password }: CreditCard = { ...creditCardForm };
      const targetName = event.target.name;
      if (targetName === 'first') {
        password[0] = newPassword;
      }
      if (targetName === 'second') {
        password[1] = newPassword;
      }
      setCreditCardForm({ ...creditCardForm, password });
    }
  };

  const updateCreditCardCompany = (companyId: string) => {
    setCreditCardForm({ ...creditCardForm, companyId });
  };

  const isCreditCardError = !checkCreditCardValidations(creditCardForm);

  const initCreditCardForm = () => {
    setCreditCardForm({ ...defaultCreditCardForm, password: ['', ''] });
  };

  return {
    creditCardForm,
    markedCreditCardNumber,
    updateCreditCardCompany,
    handleCreditCardNumberChange,
    handleCreditCardExpiryChange,
    handleCreditCardOwnerChange,
    handleCreditCardCVCChange,
    handleCreditCardPasswordChange,
    isCreditCardError,
    initCreditCardForm,
  };
};

export default useCreditCardForm;
