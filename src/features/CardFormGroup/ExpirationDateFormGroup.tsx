import { FormGroup } from '@/core/components/formGroup';
import { Input } from '@/core/components/input';
import { isNumericString } from '@/core/utils/validator';
import type { ExpirationDate } from '@/entities/card/types';
import { useState } from 'react';

interface ExpirationDateFormGroupProps {
  expirationDate: ExpirationDate;
  onChangeExpirationDate: (key: keyof ExpirationDate, value: string) => void;
}

type InputState = 'idle' | 'invalidType' | 'invalidRange' | 'touched' | 'valid';

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  RANGE: '01~12 사이로 입력해 주세요.',
  EMPTY: '유효기간을 전부 채워주세요.',
  DEFAULT: '',
};

export const ExpirationDateFormGroup = ({
  expirationDate,
  onChangeExpirationDate,
}: ExpirationDateFormGroupProps) => {
  const [monthState, setMonthState] = useState<InputState>('idle');
  const [yearState, setYearState] = useState<InputState>('idle');

  const isValidMonthInput = (month: string) => {
    if (month.length === 1) return /^[0-1]$/.test(month); // 첫 자리 0,1만
    if (month.length === 2) return /^(0[1-9]|1[0-2])$/.test(month); // 01~12
    return true;
  };

  const handleChangeMonth = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setMonthState('invalidType');
      return;
    }
    if (!isValidMonthInput(value)) {
      setMonthState('invalidRange');
      return;
    }
    setMonthState(value.length === 2 ? 'valid' : 'idle');
    onChangeExpirationDate('month', value);
  };

  const handleChangeYear = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setYearState('invalidType');
      return;
    }

    setYearState(value.length === 2 ? 'valid' : 'idle');
    onChangeExpirationDate('year', value);
  };

  const handleBlur = (key: keyof ExpirationDate) => {
    if (key === 'month' && monthState !== 'valid') {
      setMonthState('touched');
    }
    if (key === 'year' && yearState !== 'valid') {
      setYearState('touched');
    }
  };

  const isInputError = (key: keyof ExpirationDate) => {
    switch (key) {
      case 'month':
        return ['invalidType', 'invalidRange', 'touched'].includes(monthState);
      case 'year':
        return ['invalidType', 'touched'].includes(yearState);
      default:
        return false;
    }
  };

  const getExpirationErrorMessage = (state: InputState) => {
    switch (state) {
      case 'invalidType':
        return ERROR_MESSAGE.TYPE;
      case 'invalidRange':
        return ERROR_MESSAGE.RANGE;
      case 'touched':
        return ERROR_MESSAGE.EMPTY;
      default:
        return ERROR_MESSAGE.DEFAULT;
    }
  };

  return (
    <FormGroup
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={getExpirationErrorMessage(monthState) || getExpirationErrorMessage(yearState)}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.month}
        maxLength={2}
        placeholder="MM"
        isError={isInputError('month')}
        onChange={(e) => handleChangeMonth(e.target.value)}
        onBlur={() => handleBlur('month')}
      />
      <Input
        type="text"
        inputMode="numeric"
        value={expirationDate.year}
        maxLength={2}
        placeholder="YY"
        isError={isInputError('year')}
        onChange={(e) => handleChangeYear(e.target.value)}
        onBlur={() => handleBlur('year')}
      />
    </FormGroup>
  );
};
