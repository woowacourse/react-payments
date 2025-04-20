import React, { useEffect, useState } from 'react';
import ExpirationPeriodView from './ExpirationPeriodView';

export interface ExpirationPeriodProps {
  period: { month: string; year: string };
  setPeriod: React.Dispatch<
    React.SetStateAction<{ month: string; year: string }>
  >;
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const EXPIRATION_PERIOD_LENGTH = 2;
const SEPARATOR = '/';
const MONTH = {
  MIN: 1,
  MAX: 12,
} as const;
const YEAR = {
  MIN: 0,
  MAX: 99,
} as const;
const ERROR_MESSAGE = {
  INVALID: '올바른 유효기간을 입력하세요.',
  INVALID_CHARACTER: '숫자만 입력 가능합니다.',
} as const;

const ExpirationPeriod = ({
  period,
  setPeriod,
  separatorRef,
}: ExpirationPeriodProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<boolean[]>([false, false]);

  useEffect(() => {
    if (errors.every((error) => error === false)) {
      setErrorMessage('');
    }
  }, [errors]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    setPeriod((prev) => {
      const newState = { ...prev };

      let valid = true;
      let message = '';

      if (!/^[0-9]*$/.test(value)) {
        valid = false;
        message = ERROR_MESSAGE.INVALID_CHARACTER;
      } else if (value.length <= EXPIRATION_PERIOD_LENGTH) {
        if (index === 0) {
          newState.month = value;
          const month = Number(value);
          if (month > MONTH.MAX || month < MONTH.MIN) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          } else if (month < 10 && !value.startsWith('0')) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          }
        } else {
          newState.year = value;
          const year = Number(value);
          if (year < YEAR.MIN || year > YEAR.MAX) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          } else if (
            (year < 10 && !value.startsWith('0')) ||
            value.length === 1
          ) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          }
        }
      }

      if (!valid) {
        console.log(newState);
        setErrorMessage(message);
        setErrors((prevErr) => {
          const newErrors = [...prevErr];
          newErrors[index] = true;
          return newErrors;
        });
      } else {
        setErrors((prevErr) => {
          const newErrors = [...prevErr];
          newErrors[index] = false;
          return newErrors;
        });
      }
      return newState;
    });
  };

  const handleFocus = () => {
    if (separatorRef?.current) {
      separatorRef.current.textContent = SEPARATOR;
    }
  };

  const handleBlur = () => {
    if (separatorRef?.current && period.month === '' && period.year === '') {
      separatorRef.current.textContent = '';
    }
  };

  return (
    <ExpirationPeriodView
      period={period}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default ExpirationPeriod;
