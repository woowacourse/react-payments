import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, Validate } from '../../types';
import type { ExpirationPeriodErrorStatus } from '../../types';
import { isNumber, isValidMonth, isValidYear, sanitizeNumber } from '../../utils';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';
import { useErrorStatusList } from '../../hooks/useErrorStatusList.ts';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  onUpdated: (value: CardInfo['expirationPeriod']) => void;
}

const validates: Validate<ExpirationPeriodErrorStatus>[] = [
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

export default function ExpirationPeriodField({ value, onUpdated }: ExpirationPeriodFieldProps) {
  const { errorStatusList, onChange, onBlur } = useErrorStatusList(validates, [null, null]);
  const activeErrorStatus = errorStatusList.filter((errorStatus) => !!errorStatus)[0];
  const activeErrorIndex = errorStatusList.findIndex((errorStatus) => errorStatus === activeErrorStatus);

  const updateFormValue = (inputValue: string, index: number) => {
    const newValue = [...value] as CardInfo['expirationPeriod'];
    newValue[index] = sanitizeNumber(inputValue);
    onUpdated(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    onChange(e, index);
    updateFormValue(e.target.value, index);
  };

  const handleBlur = onBlur;

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
