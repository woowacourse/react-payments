import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import {
  validateExpirationMonth,
  validateExpirationMonthFormat,
  validateExpirationYear,
  validateExpirationYearFormat,
} from '@/entities/card/expiration';
import type { ExpirationDate } from '@/entities/card/types';
import { useState } from 'react';

interface ExpirationDateFormGroupProps {
  expirationDate: ExpirationDate;
  handleChangeExpirationDate: (key: keyof ExpirationDate, value: string) => void;
}

export const ExpirationDateFormGroup = ({
  expirationDate,
  handleChangeExpirationDate: onChangeExpirationDate,
}: ExpirationDateFormGroupProps) => {
  const [monthError, setMonthError] = useState<string | undefined>();
  const [yearError, setYearError] = useState<string | undefined>();

  const handleChangeMonth = (value: string) => {
    const monthError = validateExpirationMonthFormat(value);
    setMonthError(monthError);
    if (monthError) return;
    onChangeExpirationDate('month', value);
  };

  const handleChangeYear = (value: string) => {
    const yearError = validateExpirationYearFormat(value);
    setYearError(yearError);
    if (yearError) return;
    onChangeExpirationDate('year', value);
  };

  const handleBlur = (key: keyof ExpirationDate) => {
    if (key === 'month' && validateExpirationMonth(expirationDate[key])) setMonthError(monthError);
    if (key === 'year' && validateExpirationYear(expirationDate[key])) setYearError(yearError);
  };

  return (
    <FormGroup
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={monthError || yearError}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.month}
        maxLength={2}
        placeholder="MM"
        isError={monthError !== undefined}
        onChange={(e) => handleChangeMonth(e.target.value)}
        onBlur={() => handleBlur('month')}
      />
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.year}
        maxLength={2}
        placeholder="YY"
        isError={yearError !== undefined}
        onChange={(e) => handleChangeYear(e.target.value)}
        onBlur={() => handleBlur('year')}
      />
    </FormGroup>
  );
};
