import { ChangeEventHandler, useState } from 'react';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
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
  onChangeMonth: ChangeEventHandler<HTMLInputElement>,
  onChangeYear: ChangeEventHandler<HTMLInputElement>,
) => {
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleMonthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) return;

    onChangeMonth(e);
    setMonth(value);
  };

  const handleYearChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
