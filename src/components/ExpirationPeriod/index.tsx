import React, { useEffect, useState } from 'react';
import ExpirationPeriodView from './ExpirationPeriodView';

export interface ExpirationPeriodProps {
  period: string[];
  setPeriod: React.Dispatch<React.SetStateAction<string[]>>;
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const ExpirationPeriod: React.FC<ExpirationPeriodProps> = ({
  period,
  setPeriod,
  separatorRef,
}) => {
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
        message = '숫자만 입력 가능합니다.';
      } else if (value.length <= 2) {
        newState[index] = value;
        if (index === 0) {
          const month = Number(value);
          if (month > 12 || month < 1) {
            valid = false;
            message = '올바른 유효기간을 입력하세요.';
          } else if (month < 10 && !value.startsWith('0')) {
            valid = false;
            message = '올바른 유효기간을 입력하세요.';
          }
        } else {
          const year = Number(value);
          if (year < 0 || year > 99) {
            valid = false;
            message = '올바른 유효기간을 입력하세요.';
          } else if (
            (year < 10 && !value.startsWith('0')) ||
            value.length === 1
          ) {
            valid = false;
            message = '올바른 유효기간을 입력하세요.';
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
      separatorRef.current.textContent = '/';
    }
  };

  const handleBlur = () => {
    if (separatorRef?.current && period[0] === '' && period[1] === '') {
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
