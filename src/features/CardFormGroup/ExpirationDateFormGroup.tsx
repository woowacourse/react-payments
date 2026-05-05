import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { isNumericString } from '@/core/utils/validator';
import type { ExpirationDate } from '@/entities/card/types';
import { useState } from 'react';

interface ExpirationDateFormGroupProps {
  expirationDate: ExpirationDate;
  handleChangeExpirationDate: (key: keyof ExpirationDate, value: string) => void;
}

type FieldState =
  | { status: 'idle' }
  | { status: 'valid' }
  | { status: 'invalid'; reason: 'type' | 'range' | 'empty' };

const ERROR_MESSAGE = {
  type: '숫자만 입력 가능합니다.',
  range: '01~12 사이로 입력해 주세요.',
  empty: '유효기간을 전부 채워주세요.',
  default: '',
};

export const ExpirationDateFormGroup = ({
  expirationDate,
  handleChangeExpirationDate: onChangeExpirationDate,
}: ExpirationDateFormGroupProps) => {
  const [monthState, setMonthState] = useState<FieldState>({ status: 'idle' });
  const [yearState, setYearState] = useState<FieldState>({ status: 'idle' });

  const isValidMonthInput = (month: string) => {
    if (month.length === 1) return /^[0-1]$/.test(month); // 첫 자리 0,1만
    if (month.length === 2) return /^(0[1-9]|1[0-2])$/.test(month); // 01~12
    return true;
  };

  const handleChangeMonth = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setMonthState({ status: 'invalid', reason: 'type' });
      return;
    }
    if (!isValidMonthInput(value)) {
      setMonthState({ status: 'invalid', reason: 'type' });
      return;
    }
    setMonthState(value.length === 2 ? { status: 'valid' } : { status: 'idle' });
    onChangeExpirationDate('month', value);
  };

  const handleChangeYear = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setYearState({ status: 'invalid', reason: 'type' });
      return;
    }
    setYearState(value.length === 2 ? { status: 'valid' } : { status: 'idle' });
    onChangeExpirationDate('year', value);
  };

  const handleBlur = (key: keyof ExpirationDate) => {
    if (key === 'month' && expirationDate.month.length !== 2) {
      setMonthState({ status: 'invalid', reason: 'empty' });
    }
    if (key === 'year' && expirationDate.year.length !== 2) {
      setYearState({ status: 'invalid', reason: 'empty' });
    }
  };

  const getErrorMessage = (state: FieldState) => {
    switch (state.status) {
      case 'invalid':
        return ERROR_MESSAGE[state.reason];
      default:
        return ERROR_MESSAGE.default;
    }
  };
  return (
    <FormGroup
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={getErrorMessage(monthState) || getErrorMessage(yearState)}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.month}
        maxLength={2}
        placeholder="MM"
        isError={monthState.status === 'invalid'}
        onChange={(e) => handleChangeMonth(e.target.value)}
        onBlur={() => handleBlur('month')}
      />
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.year}
        maxLength={2}
        placeholder="YY"
        isError={yearState.status === 'invalid'}
        onChange={(e) => handleChangeYear(e.target.value)}
        onBlur={() => handleBlur('year')}
      />
    </FormGroup>
  );
};
