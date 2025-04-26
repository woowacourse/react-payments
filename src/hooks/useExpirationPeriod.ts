import { useEffect } from 'react';
import { useErrorMessage } from './useErrorMessage';

export interface ExpirationPeriodProps {
  period: { month: string; year: string };
  setPeriod: React.Dispatch<
    React.SetStateAction<{ month: string; year: string }>
  >;
  separatorRef?: React.RefObject<HTMLDivElement | null>;
  setExpirationPeriodError: React.Dispatch<React.SetStateAction<boolean>>;
}

const EXPIRATION_PERIOD_LENGTH = 2;
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

export const useExpirationPeriod = ({
  period,
  setPeriod,
  separatorRef,
  setExpirationPeriodError,
}: ExpirationPeriodProps) => {
  const { errors, setErrors, errorMessage, setErrorMessage } = useErrorMessage([
    false,
    false,
  ]);

  useEffect(() => {
    const hasError = errors.some((error) => error === true);
    setExpirationPeriodError(hasError);
  }, [errors]);

  const isNumeric = (value: string) => /^[0-9]*$/.test(value);

  const isValidMonth = (value: string) => {
    const month = Number(value);
    return (
      value.length === EXPIRATION_PERIOD_LENGTH &&
      month >= MONTH.MIN &&
      month <= MONTH.MAX
    );
  };

  const isValidYear = (value: string) => {
    const year = Number(value);
    return (
      value.length === EXPIRATION_PERIOD_LENGTH &&
      year >= YEAR.MIN &&
      year <= YEAR.MAX
    );
  };

  const updateErrors = (
    prev: boolean[],
    index: number,
    isError: boolean
  ): boolean[] => {
    const newErrors = [...prev];
    newErrors[index] = isError;
    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (!isNumeric(value)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_CHARACTER);
      setErrors((prev) => updateErrors(prev, index, true));
      return;
    }

    const isMonthField = index === 0;
    const isValid = isMonthField ? isValidMonth(value) : isValidYear(value);

    if (!isValid) {
      setErrorMessage(ERROR_MESSAGE.INVALID);
      setErrors((prev) => updateErrors(prev, index, true));
      setPeriod((prev) => ({
        ...prev,
        [isMonthField ? 'month' : 'year']: value,
      }));
      return;
    }

    setErrors((prev) => updateErrors(prev, index, false));
    setPeriod((prev) => ({
      ...prev,
      [isMonthField ? 'month' : 'year']: value,
    }));
  };

  return {
    errorMessage,
    errors,
    handleInputChange,
  };
};
