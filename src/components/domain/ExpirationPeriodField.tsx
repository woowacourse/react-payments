import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ExpirationPeriodErrorStatus, Validate } from '../../types';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { isNumber, isValidMonth, isValidYear, sanitizeNumber } from '../../utils';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  errorStatus: ExpirationPeriodErrorStatus[];
  setFieldValue: (field: 'expirationPeriod', value: string, index: number) => void;
  setFieldError: (field: 'expirationPeriod', error: ExpirationPeriodErrorStatus, index: number) => void;
  onCompleted: () => void;
}

const rules: Validate<ExpirationPeriodErrorStatus>[] = [
  {
    type: ['change', 'blur'],
    rule: (inputValue: string) => inputValue === '',
    errorStatus: 'required',
  },
  {
    type: ['change'],
    rule: (inputValue: string) => !isNumber(inputValue),
    errorStatus: 'numberOnly',
  },
  {
    type: ['change'],
    rule: (inputValue: string, index?: number) =>
      inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 0 && !isValidMonth(inputValue),
    errorStatus: 'invalidMonth',
  },
  {
    type: ['change'],
    rule: (inputValue: string, index?: number) =>
      inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 1 && !isValidYear(inputValue),
    errorStatus: 'invalidYear',
  },
  {
    type: ['blur'],
    rule: (inputValue: string) => inputValue.length < PERIOD_LENGTH_PER_INPUT,
    errorStatus: 'invalidLength',
  },
];

export default function ExpirationPeriodField({
  value,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: ExpirationPeriodFieldProps) {
  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v) => v.length === PERIOD_LENGTH_PER_INPUT)) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const getActiveError = (inputValue: string, index: number, eventType: 'change' | 'blur') => {
    const activeRule = rules
      .filter((rule) => rule.type.includes(eventType))
      .find((rule) => rule.rule(inputValue, index));

    return activeRule?.errorStatus ?? null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(inputValue, index, 'change');

    setFieldError('expirationPeriod', error, index);
    setFieldValue('expirationPeriod', sanitizeNumber(inputValue), index);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(inputValue, index, 'blur');

    if (error) {
      setFieldError('expirationPeriod', error, index);
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
            autoFocus
            name="expirationPeriod"
            value={value[0]}
            onChange={(e) => handleChange(e, 0)}
            onBlur={(e) => handleBlur(e, 0)}
            variant={activeErrorIndex === 0 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            maxLength={PERIOD_LENGTH_PER_INPUT}
          />
          <Input
            name="expirationPeriod"
            value={value[1]}
            onChange={(e) => handleChange(e, 1)}
            onBlur={(e) => handleBlur(e, 1)}
            variant={activeErrorIndex === 1 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={PERIOD_LENGTH_PER_INPUT}
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
