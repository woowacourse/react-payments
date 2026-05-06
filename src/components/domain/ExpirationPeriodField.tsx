import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../types';
import { useState } from 'react';
import type { ExpirationPeriodErrorStatus } from '../../types';
import { isNumber, isValidMonth, isValidYear, sanitizeNumber } from '../../utils';
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

  const setErrorStatus = (status: ExpirationPeriodErrorStatus, index: number) => {
    setErrorStatusList((prev) => {
      const updated = [...prev] as ErrorStatusList;
      updated[index] = status;
      return updated;
    });
  };

  const updateFormValue = (inputValue: string, index: number) => {
    const newValue = [...value] as CardInfo['expirationPeriod'];
    newValue[index] = sanitizeNumber(inputValue);
    onUpdated(newValue);
  };

  const validates: {
    type: ('change' | 'blur')[];
    rule: (inputValue: string, index?: number) => boolean;
    errorStatus: ExpirationPeriodErrorStatus;
  }[] = [
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
      rule: (inputValue: string, index: number) =>
        inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 0 && !isValidMonth(inputValue),
      errorStatus: 'invalidMonth',
    },
    {
      type: ['change'],
      rule: (inputValue: string, index: number) =>
        inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 1 && !isValidYear(inputValue),
      errorStatus: 'invalidYear',
    },
    {
      type: ['blur'],
      rule: (inputValue: string) => inputValue.length < PERIOD_LENGTH_PER_INPUT,
      errorStatus: 'invalidLength',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;

    const changeValidates = validates.filter((validate) => validate.type.includes('change'));
    const activeValidate = changeValidates.find((validate) => validate.rule(inputValue, index));

    setErrorStatus(activeValidate?.errorStatus ?? null, index);
    updateFormValue(inputValue, index);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;

    const blurValidates = validates.filter((validate) => validate.type.includes('blur'));
    const activeValidate = blurValidates.find((validate) => validate.rule(inputValue));

    if (activeValidate) {
      setErrorStatus(activeValidate.errorStatus, index);
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
            onChange={(e) => handleChange(e, 0)}
            onBlur={(e) => handleBlur(e, 0)}
          />
          <Input
            value={value[1]}
            variant={activeErrorIndex === 1 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={PERIOD_LENGTH_PER_INPUT}
            onChange={(e) => handleChange(e, 1)}
            onBlur={(e) => handleBlur(e, 1)}
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
