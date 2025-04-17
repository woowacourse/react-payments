import { useState } from 'react';

function useCardValidityPeriod() {
  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    month: '',
    year: '',
  });
  const [isErrorCardValidityPeriod, setIsErrorCardValidityPeriod] = useState({
    month: false,
    year: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const { value } = e.target;

    if (value.length > 2) {
      return;
    }

    const validatePeriod = {
      month: (value: string) => {
        const isInvalidMonth =
          Number.parseInt(value, 10) > 12 ||
          Number.parseInt(value, 10) < 1 ||
          value.length < 2;

        return isInvalidMonth;
      },
      year: (value: string) => {
        const currentYear = Number.parseInt(
          new Date().getFullYear().toString().slice(2),
          10,
        );
        const isInvalidYear =
          Number.parseInt(value, 10) < currentYear || value.length < 2;

        return isInvalidYear;
      },
    };

    setErrorMessage(validatePeriod[type](value) ? `MM/YY는 4자리입니다.` : '');

    setIsErrorCardValidityPeriod((prev) => ({
      ...prev,
      [type]: validatePeriod[type](value),
    }));

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value.slice(0, 2),
    }));
  };

  const checkCardValidityPeriodError = () => {
    return Object.values(isErrorCardValidityPeriod).some((v) => v === true);
  };

  return {
    cardValidityPeriod,
    isErrorCardValidityPeriod,
    onChangeCardValidityPeriod,
    checkCardValidityPeriodError,
    errorMessage,
  };
}

export default useCardValidityPeriod;
