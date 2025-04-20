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

    const checkValideDate = (monthString: string, yearString: string) => {
      const now = new Date();
      const currentYear = Number.parseInt(
        new Date().getFullYear().toString().slice(2),
        10,
      );
      const currentMonth = now.getMonth() + 1;

      const year = Number(yearString);
      const month = Number(monthString);

      if (currentYear < year) return true;

      if (currentYear === year && month >= currentMonth) return true;

      return false;
    };

    const validateYearErrorMessage = (month: string, year: string) => {
      if (!checkValideDate(month, year)) {
        return '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
      }

      const currentYear = Number.parseInt(
        new Date().getFullYear().toString().slice(2),
        10,
      );
      const yearNumber = Number(year);

      if (currentYear > yearNumber) {
        return '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
      }

      if (year.length < 2) return 'MM형식으로 입력해주세요. (ex. 01)';

      const monthNumber = Number(month);
      if (monthNumber > 12 || monthNumber < 1) {
        return '1~12사이의 올바른 월을 입력해 주세요.';
      }

      if (month.length < 2) return 'MM형식으로 입력해주세요. (ex. 01)';

      return '';
    };

    const validateMonthErrorMessage = (month: string, year: string) => {
      const monthNumber = Number(month);
      if (monthNumber > 12 || monthNumber < 1) {
        return '1~12사이의 올바른 월을 입력해 주세요.';
      }

      if (month.length < 2) return 'MM형식으로 입력해주세요. (ex. 01)';

      if (!checkValideDate(month, year)) {
        return '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
      }

      const currentYear = Number.parseInt(
        new Date().getFullYear().toString().slice(2),
        10,
      );
      const yearNumber = Number(year);

      if (currentYear > yearNumber) {
        return '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
      }

      if (year.length < 2) return 'MM형식으로 입력해주세요. (ex. 01)';

      return '';
    };

    if (type === 'month') {
      const message = validateMonthErrorMessage(value, cardValidityPeriod.year);
      setErrorMessage(message);

      if (message !== '') {
        setIsErrorCardValidityPeriod({
          year: false,
          month: true,
        });
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          month: false,
        }));
      }
    }
    if (type === 'year') {
      const message = validateYearErrorMessage(cardValidityPeriod.month, value);
      setErrorMessage(message);

      if (message !== '') {
        setIsErrorCardValidityPeriod({
          month: false,
          year: true,
        });
      } else {
        setIsErrorCardValidityPeriod((prev) => ({
          ...prev,
          year: false,
        }));
      }
    }

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return {
    cardValidityPeriod,
    isErrorCardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage,
  };
}

export default useCardValidityPeriod;
