import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../types';
import { useState } from 'react';
import type { ExpirationPeriodErrorStatus } from '../../types';
import { isNumber, isValidMonth, isValidYear } from '../../utils';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  onUpdated: (value: CardInfo['expirationPeriod']) => void;
}

type ErrorStatusList = [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus];

export default function ExpirationPeriodField({ value, onUpdated }: ExpirationPeriodFieldProps) {
  const [errorStatusList, setErrorStatusList] = useState<ErrorStatusList>([null, null]);
  const activeErrorStatus = errorStatusList.filter((errorStatus) => !!errorStatus)[0];
  const activeErrorIndex = errorStatusList.findIndex((errorStatus) => errorStatus === activeErrorStatus);

  const setErrorStatus = (index: number, status: ExpirationPeriodErrorStatus) => {
    setErrorStatusList((prev) => {
      const updated = [...prev] as ErrorStatusList;
      updated[index] = status;
      return updated;
    });
  };

  // 입력 또는 삭제할 때마다 수행되어야하는 validation 수행.
  // 1. required
  // 2. numberOnly -> update 제외됨.
  // 3. MM -> 1-12인지
  // 4. YY -> 오늘로부터 5년 이내인지.
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue !== '' && !isNumber(inputValue)) {
      setErrorStatus(index, 'numberOnly');
      return;
    }

    const newValue = [...value] as CardInfo['expirationPeriod'];
    newValue[index] = inputValue;
    onUpdated(newValue);
    setErrorStatus(index, inputValue === '' ? 'required' : null);

    // 1. invalid mm -> error status
    // 2. invlid yy -> error status
    // 3. invalid mm/yy -> 같은 error status

    if (inputValue.length < PERIOD_LENGTH_PER_INPUT) {
      return;
    }

    if (index === 0 && !isValidMonth(inputValue)) {
      setErrorStatus(index, 'invalidMonth');
      return;
    }

    if (index === 1 && !isValidYear(inputValue)) {
      setErrorStatus(index, 'invalidYear');
      return;
    }
  };

  // 포커스가 빠질때마다 수행되어야 하는 validation 수행.
  // 1. required
  // 2. invalidLength
  const handleBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setErrorStatus(index, 'required');
      return;
    }

    if (inputValue.length < PERIOD_LENGTH_PER_INPUT) {
      setErrorStatus(index, 'invalidLength');
      return;
    }
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    error: !!activeErrorStatus,
    errorMessage: EXPIRATION_PERIOD_ERROR_MESSAGES[activeErrorStatus] ?? '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>유효기간</legend>
        <div css={inputGroupStyle}>
          <Input
            value={value[0]}
            variant={activeErrorIndex === 0 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            maxLength={PERIOD_LENGTH_PER_INPUT}
            onChange={(e) => handleChange(0, e)}
            onBlur={(e) => handleBlur(0, e)}
          />
          <Input
            value={value[1]}
            variant={activeErrorIndex === 1 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={PERIOD_LENGTH_PER_INPUT}
            onChange={(e) => handleChange(1, e)}
            onBlur={(e) => handleBlur(1, e)}
          />
        </div>
      </fieldset>
    </FormField>
  );
}

const legendStyle = css`
  margin-bottom: 8px;
`;

const inputGroupStyle = css`
  display: flex;
  gap: 10px;
`;
