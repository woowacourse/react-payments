import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import {
  EXPIRY_MONTH_LENGTH,
  EXPIRY_YEAR_LENGTH,
  validateExpiryMonth,
  validateExpiryYear,
  type ExpiryDate,
} from '@/entities/card/model/expiryDate';
import {
  isValidMonthInput,
  isValidYearInput,
  getExpiryDateFieldState,
  type ExpiryTouched,
} from '../../model/registerExpiryDate';
import { useState } from 'react';

export interface ExpiryFieldControl {
  expiryDate: ExpiryDate;
  onChange: (value: ExpiryDate) => void;
}

interface ExpiryDateField {
  expiryField: ExpiryFieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const ExpiryDateField = ({ expiryField, onComplate, setStepRef }: ExpiryDateField) => {
  const { expiryDate, onChange } = expiryField;
  const { month, year } = expiryDate;
  const [touched, setTouched] = useState<ExpiryTouched>({
    month: false,
    year: false,
  });

  const { setInputRef, focusNext } = useInputFocus();

  const { visibleMonthError, visibleYearError, totalErrorMessage } = getExpiryDateFieldState({
    expiryDate,
    touched,
  });

  const handleChangeMonth = (month: string) => {
    if (!isValidMonthInput(month)) return;
    const next = {
      ...expiryDate,
      month,
    };
    onChange(next);

    if (validateExpiryMonth(month)) {
      focusNext(1);
    }
  };

  const handleChangeYear = (year: string) => {
    if (!isValidYearInput(year)) return;

    const next = {
      ...expiryDate,
      year,
    };
    onChange(next);

    if (validateExpiryMonth(next.month) && validateExpiryYear(next.year)) onComplate();
  };

  return (
    <Field
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={totalErrorMessage}
    >
      <Input
        ref={(node) => {
          setStepRef(node);
        }}
        type="text"
        inputMode="numeric"
        value={month}
        maxLength={EXPIRY_MONTH_LENGTH}
        placeholder="MM"
        isError={visibleMonthError !== undefined}
        onChange={(e) => handleChangeMonth(e.target.value)}
        onBlur={() =>
          setTouched((prev) => ({
            ...prev,
            month: true,
          }))
        }
      />
      <Input
        ref={(node) => {
          setInputRef(node, 1);
        }}
        type="text"
        inputMode="numeric"
        value={year}
        maxLength={EXPIRY_YEAR_LENGTH}
        placeholder="YY"
        isError={visibleYearError !== undefined}
        onChange={(e) => handleChangeYear(e.target.value)}
        onBlur={() =>
          setTouched((prev) => ({
            ...prev,
            year: true,
          }))
        }
      />
    </Field>
  );
};
