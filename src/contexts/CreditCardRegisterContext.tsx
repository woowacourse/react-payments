/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useState } from 'react';

import creditCard from '@Domains/creditCard';

import * as Type from '@Types/index';

import useInput from '@Hooks/useInput';

export const CreditCardRegisterContext = createContext({
  creditCard: {
    company: undefined as Type.CardCompanies | undefined,
    numbers: '',
    expiry: '',
    owner: '',
    cvc: '',
    alias: '',
    password: {
      first: '',
      second: '',
    },
  },
  update: {
    company: (arg: Type.CardCompanies | undefined) => {},
    numbers: (arg: string) => {},
    expiry: (arg: string) => {},
    owner: (arg: string) => {},
    cvc: (arg: string) => {},
    alias: (arg: string) => {},
    password: {
      first: (arg: string) => {},
      second: (arg: string) => {},
    },
  },
  errorMessage: {
    numbers: null as null | string,
    expiry: null as null | string,
    owner: null as null | string,
    cvc: null as null | string,
    password: null as null | string,
  },
});

function CreditCardRegisterProvider({ children }: PropsWithChildren) {
  const { numberValidationFns, expiryValidationFns, ownerValidationFns, cvcValidationFns, passwordValidationFns } =
    creditCard.getValidationFns();

  const [company, setCompany] = useState<Type.CardCompanies | undefined>(undefined);
  const [numbers, setNumbers, numbersErrorMessage] = useInput<string>('', numberValidationFns);
  const [expiry, setExpiry, expiryErrorMessage] = useInput<string>('', expiryValidationFns);
  const [owner, setOwner, ownerErrorMessage] = useInput<string>('', ownerValidationFns);
  const [cvc, setCVC, CVCErrorMessage] = useInput<string>('', cvcValidationFns);
  const [password, setPassword, passwordErrorMessage] = useInput<Type.CreditCardPasswordType>(
    { first: '', second: '' },
    passwordValidationFns,
  );
  const [alias, setAlias] = useState<string>('');

  const updateCompany = (newCompany: Type.CardCompanies | undefined) => {
    setCompany(newCompany);
  };

  const updateNumbers = (newCreditCarNumber: string) => {
    const removeDashNumbers = creditCard.removeDashInCreditCardNumber(newCreditCarNumber);

    if (removeDashNumbers.length > 16) return;

    if (removeDashNumbers.length < numbers.length) setNumbers('');
    else {
      const newAddNumber = removeDashNumbers[removeDashNumbers.length - 1];
      setNumbers((prev) => prev + newAddNumber);
    }
  };

  const updateExpiry = (newExpiry: string) => {
    let processExpiry = newExpiry;

    if (newExpiry.length > 4) return;

    if (newExpiry.length >= 3 && newExpiry.length <= 4) {
      const newExpiryArray = newExpiry.split('');
      newExpiryArray.splice(2, 0, '/').join('');
      processExpiry = newExpiryArray.join('');
    }

    setExpiry(processExpiry);
  };

  const updateOwner = (newOwner: string) => {
    if (newOwner.length <= 20) {
      setOwner(newOwner.toUpperCase());
    }
  };

  const updateCVC = (newCVC: string) => {
    if (newCVC.length > 3) return;

    setCVC(newCVC);
  };

  const updateFirstPassword = (newFirstPassword: string) => {
    if (newFirstPassword.length <= 1) {
      setPassword({
        ...password,
        first: newFirstPassword,
      });
    }
  };

  const updateSecondPassword = (newSecondPassword: string) => {
    if (newSecondPassword.length <= 1) {
      setPassword({
        ...password,
        second: newSecondPassword,
      });
    }
  };

  const updateAlias = (newAlias: string) => {
    if (newAlias.length > 10) return;
    setAlias(newAlias);
  };

  const initValue = {
    creditCard: { company, numbers, expiry, owner, cvc, password, alias },
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
    errorMessage: {
      numbers: numbersErrorMessage,
      expiry: expiryErrorMessage,
      owner: ownerErrorMessage,
      cvc: CVCErrorMessage,
      password: passwordErrorMessage,
    },
  };

  return <CreditCardRegisterContext.Provider value={initValue}>{children}</CreditCardRegisterContext.Provider>;
}

export default CreditCardRegisterProvider;
