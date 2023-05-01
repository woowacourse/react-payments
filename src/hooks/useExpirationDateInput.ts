import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
  inputRefs: React.RefObject<HTMLInputElement>[],
  onChangeMonth: ChangeEventHandler<HTMLInputElement>,
  onChangeYear: ChangeEventHandler<HTMLInputElement>,
) => {
  month: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
  year: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
};

export const useExpirationDataInput: ExpirationDateInputTypes = (
  inputRefs: React.RefObject<HTMLInputElement>[],
  onChangeMonth: ChangeEventHandler<HTMLInputElement>,
  onChangeYear: ChangeEventHandler<HTMLInputElement>,
) => {
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validateInput(value)) return;
    if (value.trim().length === e.target.maxLength) {
      inputRefs[1].current?.focus();
    }
    onChangeMonth(e);
    setMonth(value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validateInput(value)) return;

    onChangeYear(e);
    setYear(value);
  };

  return {
    month: {
      value: month,
      onChange: handleMonthChange,
    },
    year: {
      value: year,
      onChange: handleYearChange,
    },
  };
};
