import { useState } from 'react';
import useValidation from './useValidation';
import { validateExpiryMonth, validateExpiryYear } from '../validators';

const useExpiryDate = () => {
  const [expiryMonth, setExpiryMonth] = useState('');
  const { errorStatus: expiryMonthErrorStatus, updateErrorStatus: updateExpiryMonthErrorStatus } = useValidation(
    expiryMonth,
    validateExpiryMonth,
  );

  const [expiryYear, setExpiryYear] = useState('');
  const { errorStatus: expiryYearErrorStatus, updateErrorStatus: updateExpiryYearErrorStatus } = useValidation(
    expiryYear,
    validateExpiryYear,
  );

  return {
    data: { month: expiryMonth, year: expiryYear },
    dataSetter: { month: setExpiryMonth, year: setExpiryYear },
    errorStatus: { month: expiryMonthErrorStatus, year: expiryYearErrorStatus },
    errorStatusUpdater: { month: updateExpiryMonthErrorStatus, year: updateExpiryYearErrorStatus },
  };
};

export default useExpiryDate;
