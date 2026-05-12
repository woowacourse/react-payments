import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../types';
import useInputFocus from '../../hooks/useInputFocus';
import type { ExpirationPeriodErrorStatus } from '../../types';
import { useEffect } from 'react';
import { validate, type ValidationRule } from '../../utils';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus];
  onUpdated: (value: CardInfo['expirationPeriod']) => void;
  onErrorUpdated: (errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus]) => void;
  onValid: (value: CardInfo['expirationPeriod']) => void;
  validationRules: [ValidationRule[], ValidationRule[]];
}

export default function ExpirationPeriodField({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
}: ExpirationPeriodFieldProps) {
  const { setRef, focusNext, focusPrev, focusFirst } = useInputFocus(2);

  useEffect(() => {
    focusFirst();
  }, []);

  const updateError = (index: number, status: ExpirationPeriodErrorStatus) => {
    const next = [...errorStatuses] as [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus];
    next[index] = status;
    onErrorUpdated(next);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules[index], 'onChange', inputValue);
    updateError(index, error as ExpirationPeriodErrorStatus);
    if (error) return;

    const newValue = [...value] as CardInfo['expirationPeriod'];
    newValue[index] = inputValue;
    onUpdated(newValue);

    if (inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 0) {
      focusNext(index);
    }
    if (inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 1) {
      onValid(newValue);
    }
  };

  const handleKeyUp = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && value[index] === '') {
      focusPrev(index);
    }
  };

  const handleBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    updateError(index, validate(validationRules[index], 'onBlur', e.target.value) as ExpirationPeriodErrorStatus);
  };

  const activeError = errorStatuses.find((e) => e !== null) ?? null;

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    error: activeError !== null,
    errorMessage: activeError ? EXPIRATION_PERIOD_ERROR_MESSAGES[activeError] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>유효기간</legend>
        <div css={inputGroupStyle}>
          <Input
            ref={setRef(0)}
            value={value[0]}
            variant={errorStatuses[0] !== null ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            maxLength={PERIOD_LENGTH_PER_INPUT}
            onChange={(e) => handleChange(0, e)}
            onBlur={(e) => handleBlur(0, e)}
          />
          <Input
            ref={setRef(1)}
            value={value[1]}
            variant={errorStatuses[1] !== null ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={PERIOD_LENGTH_PER_INPUT}
            onChange={(e) => handleChange(1, e)}
            onBlur={(e) => handleBlur(1, e)}
            onKeyUp={(e) => handleKeyUp(1, e)}
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
