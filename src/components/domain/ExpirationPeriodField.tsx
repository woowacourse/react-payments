import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../types';
import useInputFocus from '../../hooks/useInputFocus';
import type { ExpirationPeriodErrorStatus } from '../../types';
import type { FormValue } from '../../hooks/useAddCardForm';
import { useEffect } from 'react';
import { validate } from '../../utils';
import type { ExpirationValidationRule } from '../../types';
import { ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  errorStatuses: FormValue['expirationPeriod']['errorStatuses'];
  onUpdated: (value: CardInfo['expirationPeriod']) => void;
  onErrorUpdated: (errorStatuses: FormValue['expirationPeriod']['errorStatuses']) => void;
  onValid: (value: CardInfo['expirationPeriod']) => void;
  validationRules: [ExpirationValidationRule[], ExpirationValidationRule[]];
  ref?: React.Ref<HTMLInputElement>;
}

export default function ExpirationPeriodField({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
  ref,
}: ExpirationPeriodFieldProps) {
  const { setRef, focusNext, focusPrev, focusFirst } = useInputFocus(2);

  useEffect(() => {
    focusFirst();
  }, []);

  const updateError = (index: number, status: ExpirationPeriodErrorStatus) => {
    const newErrorStatuses = [...errorStatuses] as FormValue['expirationPeriod']['errorStatuses'];
    newErrorStatuses[index] = status;
    onErrorUpdated(newErrorStatuses);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules[index], 'onChange', inputValue);
    updateError(index, error as ExpirationPeriodErrorStatus);
    if (error) return;

    const newValue = [...value] as CardInfo['expirationPeriod'];
    newValue[index] = inputValue;
    onUpdated(newValue);

    const isComplete = newValue.every((fieldValue) => fieldValue.length === PERIOD_LENGTH_PER_INPUT);
    if (isComplete) {
      onValid(newValue);
      return;
    }

    if (inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 0) {
      focusNext(index);
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

  const [monthError, yearError, totalError] = errorStatuses;
  const activeError = errorStatuses.find((e) => e !== null) ?? null;

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    errorMessage: activeError ? ERROR_MESSAGES[activeError] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>유효기간</legend>
        <div css={inputGroupStyle}>
          <Input
            ref={setRef(0, ref)}
            value={value[0]}
            variant={monthError !== null ? 'error' : 'default'}
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
            variant={yearError !== null || totalError !== null ? 'error' : 'default'}
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
