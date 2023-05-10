import { useContext } from 'react';

import CardContext from '../contexts/CardContext';
import { COLOR } from '../constants/card';

export const useIsFilledForm = (): boolean => {
  const { serialNumbers, expirationDate, securityCode, password, company } =
    useContext(CardContext);

  return (
    serialNumbers.firstSerialNumber.length === 4 &&
    serialNumbers.secondSerialNumber.length === 4 &&
    serialNumbers.thirdSerialNumber.length === 4 &&
    serialNumbers.fourthSerialNumber.length === 4 &&
    expirationDate.month !== null &&
    expirationDate.month.length >= 1 &&
    expirationDate.year !== null &&
    expirationDate.year.length === 2 &&
    securityCode.length === 3 &&
    password.firstPassword.length === 1 &&
    password.secondPassword.length === 1 &&
    company.name !== '' &&
    company.backgroundColor !== COLOR.DEFAULT
  );
};
