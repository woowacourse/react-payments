import { useState } from 'react';
import { checkValideDate } from '../utils/checkValideDate';

const VALIDITY_PERIOD = {
  MAX_LENGTH: 2,
};

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
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > VALIDITY_PERIOD.MAX_LENGTH) {
      return;
    }

    if (type === 'month') {
      const { message, type: dateType } = validateMonthErrorMessage(
        value,
        cardValidityPeriod.year,
      );
      setErrorMessage(message);

      if (message !== '') {
        setIsErrorCardValidityPeriod({
          month: false,
          year: false,
          [dateType!]: true,
        });
      } else {
        setIsErrorCardValidityPeriod({
          year: false,
          month: false,
        });
      }
    }
    if (type === 'year') {
      const { message, type: dateType } = validateYearErrorMessage(
        cardValidityPeriod.month,
        value,
      );
      setErrorMessage(message);

      if (message !== '') {
        setIsErrorCardValidityPeriod({
          month: false,
          year: false,
          [dateType!]: true,
        });
      } else {
        setIsErrorCardValidityPeriod({
          year: false,
          month: false,
        });
      }
    }

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const validateYearErrorMessage = (month: string, year: string) => {
    const invalidInput = checkValideDate(month, year);
    if (invalidInput !== null) {
      return {
        message: '현재보다 이전값을 유효기간으로 선택할 수 없습니다.',
        type: invalidInput,
      };
    }

    const currentYear = Number.parseInt(
      new Date().getFullYear().toString().slice(2),
      10,
    );
    const yearNumber = Number(year);

    if (currentYear > yearNumber) {
      return {
        message: '현재보다 이전값을 유효기간으로 선택할 수 없습니다.',
        type: 'year',
      };
    }

    if (year.length < VALIDITY_PERIOD.MAX_LENGTH)
      return { message: 'MM형식으로 입력해주세요. (ex. 01)', type: 'year' };

    const monthNumber = Number(month);
    if (monthNumber > 12 || monthNumber < 1) {
      return {
        message: '1~12사이의 올바른 월을 입력해 주세요.',
        type: 'month',
      };
    }

    if (month.length < VALIDITY_PERIOD.MAX_LENGTH)
      return { message: 'MM형식으로 입력해주세요. (ex. 01)', type: 'month' };

    return { message: '', type: null };
  };

  const validateMonthErrorMessage = (month: string, year: string) => {
    const monthNumber = Number(month);
    if (monthNumber > 12 || monthNumber < 1) {
      return {
        message: '1~12사이의 올바른 월을 입력해 주세요.',
        type: 'month',
      };
    }

    if (month.length < 2)
      return { message: 'MM형식으로 입력해주세요. (ex. 01)', type: 'month' };

    const invalidInput = checkValideDate(month, year);
    if (invalidInput !== null) {
      return {
        message: '현재보다 이전값을 유효기간으로 선택할 수 없습니다.',
        type: invalidInput,
      };
    }

    const currentYear = Number.parseInt(
      new Date().getFullYear().toString().slice(2),
      10,
    );
    const yearNumber = Number(year);

    if (currentYear > yearNumber) {
      return {
        message: '현재보다 이전값을 유효기간으로 선택할 수 없습니다.',
        type: 'year',
      };
    }

    if (year.length < VALIDITY_PERIOD.MAX_LENGTH)
      return { message: 'MM형식으로 입력해주세요. (ex. 01)', type: 'month' };

    return { message: '', type: null };
  };

  return {
    cardValidityPeriod,
    isErrorCardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage,
  };
}

export default useCardValidityPeriod;
