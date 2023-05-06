import { PropsWithChildren, useState } from 'react';

import creditCard from '@Domains/creditCard';
import creditCardValidation from '@Domains/creditCard/creditCardValidation';

import * as Type from '@Types/index';

import useInput from '@Hooks/useInput';

import { CREDIT_CARD_LENGTH, CREDIT_CARD_MAX_LENGTH } from '@Constants/creditCard';

import { CreditCardRegisterContext, CreditCardRegisterUpdateContext } from './CreditCardRegisterContext';

function CreditCardRegisterProvider({ children }: PropsWithChildren) {
  const { numberValidationFns, expiryValidationFns, ownerValidationFns, cvcValidationFns, passwordValidationFns } =
    creditCardValidation.getValidationFns();

  const [company, setCompany] = useState<Type.CreditCardCompanies | undefined>(undefined);
  const [numbers, setNumbers, numbersErrorMessage] = useInput<string>('', numberValidationFns);
  const [expiry, setExpiry, expiryErrorMessage] = useInput<string>('', expiryValidationFns);
  const [owner, setOwner, ownerErrorMessage] = useInput<string>('', ownerValidationFns);
  const [cvc, setCVC, CVCErrorMessage] = useInput<string>('', cvcValidationFns);
  const [password, setPassword, passwordErrorMessage] = useInput<Type.CreditCardPasswordType>(
    { first: '', second: '' },
    passwordValidationFns,
  );
  const [alias, setAlias] = useState<string>('');

  const updateCompany = (newCompany: Type.CreditCardCompanies | undefined) => {
    setCompany(newCompany);
  };

  const updateNumbers = (newCreditCarNumber: string) => {
    const removeDashNumbers = creditCard.removeDashInCreditCardNumber(newCreditCarNumber);

    if (removeDashNumbers.length > CREDIT_CARD_LENGTH.numbers) return;

    if (removeDashNumbers.length < numbers.length) setNumbers('');
    else {
      const newAddNumber = removeDashNumbers[removeDashNumbers.length - 1];
      setNumbers(numbers + newAddNumber);
    }
  };

  const updateExpiry = (newExpiry: string) => {
    let processExpiry = newExpiry;

    if (newExpiry.length > CREDIT_CARD_LENGTH.expiry) return;

    if (newExpiry.length > CREDIT_CARD_LENGTH.monthExpiry && newExpiry.length < CREDIT_CARD_LENGTH.expiry) {
      const newExpiryArray = newExpiry.split('');
      newExpiryArray.splice(CREDIT_CARD_LENGTH.monthExpiry, 0, '/').join('');
      processExpiry = newExpiryArray.join('');
    }

    setExpiry(processExpiry);
  };

  const updateOwner = (newOwner: string) => {
    if (newOwner.length <= CREDIT_CARD_MAX_LENGTH.owner) {
      setOwner(newOwner.toUpperCase());
    }
  };

  const updateCVC = (newCVC: string) => {
    if (newCVC.length > CREDIT_CARD_LENGTH.cvc) return;

    setCVC(newCVC);
  };

  const updateFirstPassword = (newFirstPassword: string) => {
    if (newFirstPassword.length <= CREDIT_CARD_LENGTH.password) {
      setPassword({
        ...password,
        first: newFirstPassword,
      });
    }
  };

  const updateSecondPassword = (newSecondPassword: string) => {
    if (newSecondPassword.length <= CREDIT_CARD_LENGTH.password) {
      setPassword({
        ...password,
        second: newSecondPassword,
      });
    }
  };

  const updateAlias = (newAlias: string) => {
    if (newAlias.length > CREDIT_CARD_MAX_LENGTH.alias) return;
    setAlias(newAlias);
  };

  const initValue = {
    creditCard: { company, numbers, expiry, owner, cvc, password, alias },

    errorMessage: {
      numbers: numbersErrorMessage,
      expiry: expiryErrorMessage,
      owner: ownerErrorMessage,
      cvc: CVCErrorMessage,
      password: passwordErrorMessage,
    },
  };

  const initUpdateValue = {
    update: {
      company: updateCompany,
      numbers: updateNumbers,
      expiry: updateExpiry,
      owner: updateOwner,
      cvc: updateCVC,
      alias: updateAlias,
      password: {
        first: updateFirstPassword,
        second: updateSecondPassword,
      },
    },
  };

  return (
    <CreditCardRegisterContext.Provider value={initValue}>
      <CreditCardRegisterUpdateContext.Provider value={initUpdateValue}>
        {children}
      </CreditCardRegisterUpdateContext.Provider>
    </CreditCardRegisterContext.Provider>
  );
}

export default CreditCardRegisterProvider;
