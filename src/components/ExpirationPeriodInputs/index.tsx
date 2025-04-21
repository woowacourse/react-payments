import React, { useEffect, useState } from 'react';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';

export interface ExpirationPeriodInputsProps {
  period: string[];
  setPeriod: React.Dispatch<React.SetStateAction<string[]>>;
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

const ExpirationPeriodInputs = ({
  period,
  setPeriod,
  separatorRef,
}: ExpirationPeriodInputsProps) => {
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
      const newState = [...prev];

      let valid = true;
      let message = '';

      if (!/^[0-9]*$/.test(value)) {
        valid = false;
        message = ERROR_MESSAGE.INVALID_CHARACTER;
      } else if (value.length <= EXPIRATION_PERIOD_LENGTH) {
        newState[index] = value;
        if (index === 0) {
          const month = Number(value);
          if (month > MONTH.MAX || month < MONTH.MIN) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          } else if (month < 10 && !value.startsWith('0')) {
            valid = false;
            message = ERROR_MESSAGE.INVALID;
          }
        } else {
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
    if (separatorRef?.current && period[0] === '' && period[1] === '') {
      separatorRef.current.textContent = '';
    }
  };

  return (
    <ExpirationPeriodInputsView
      period={period}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default ExpirationPeriodInputs;
