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

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const { value } = e.target;

    if (type === 'month') {
      if (Number.parseInt(value, 10) > 12 || Number.parseInt(value, 10) < 1) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: true,
        }));
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: false,
        }));
      }

      if (value.length < 2) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: true,
        }));
      }
    } else if (type === 'year') {
      if (
        Number.parseInt(value, 10) <
        Number.parseInt(new Date().getFullYear().toString().slice(2), 10)
      ) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: true,
        }));
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: false,
        }));
      }

      if (value.length < 2) {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: true,
        }));
      }
    }

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
  };
}

export default useCardValidityPeriod;
