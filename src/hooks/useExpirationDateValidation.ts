import { useState } from 'react';
import { HandleInputParams } from '../pages/CardPage/CardPage';
import {
  checkTotalExpirationDate,
  checkValidMonth,
  checkValidYear,
} from '../validators/expirationDateValidator';
import { checkNumber, checkValidLength } from '../validators/checkInputValidator';
import TotalDateError from '../validators/errors/TotalDateError';

function useExpirationDateValidation(values: string[]) {
  const [isErrorStates, setIsErrorStates] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const checkValidExpirationDate = ({ value, idx }: HandleInputParams) => {
    try {
      checkNumber(value);

      if (idx === 0 && values[0].length === 1) {
        values[0] = values[0].padStart(2, '0');
      } else {
        checkValidLength(value, 2);
      }

      if (idx === 0) {
        checkValidMonth(value);
      } else if (idx === 1) {
        checkValidYear(value);
      }

      checkTotalExpirationDate(values[0], values[1]);

      setIsErrorStates((prev) => {
        const updated = [...prev];
        updated[idx] = false;
        if (updated.every((errorState) => errorState === false)) {
          setErrorMessage('');
        }
        return updated;
      });
    } catch (error) {
      if (error instanceof TotalDateError) {
        setErrorMessage(error.message);
        setIsErrorStates((prev) => {
          const updated = [...prev];
          updated[0] = true;
          updated[1] = true;
          return updated;
        });

        return;
      }

      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsErrorStates((prev) => {
          const updated = [...prev];
          updated[idx] = true;
          return updated;
        });
      }
    }
  };

  return {
    isErrorStates,
    errorMessage,
    checkValidExpirationDate,
  };
}

export default useExpirationDateValidation;
