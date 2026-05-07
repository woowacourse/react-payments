import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus, Validate } from '../../types';
import { isNumber, sanitizeNumber } from '../../utils';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';
import { useErrorStatusList } from '../../hooks/useErrorStatusList.ts';
import { useEffect, useEffectEvent } from 'react';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  onUpdated: (value: CardInfo['cardNumbers']) => void;
  onCompleted: () => void;
}

const validates: Validate<ErrorStatus>[] = [
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
    type: ['blur'],
    rule: (inputValue: string) => inputValue.length < CARD_NUMBER_LENGTH_PER_INPUT,
    errorStatus: 'invalidLength',
  },
];

export default function CardNumbersField({ value, onUpdated, onCompleted }: CardNumbersFieldProps) {
  const { errorStatusList, onChange, onBlur } = useErrorStatusList(validates, [null, null, null, null]);
  const activeErrorStatus = errorStatusList.filter((errorStatus) => !!errorStatus)[0];
  const activeErrorIndex = errorStatusList.findIndex((errorStatus) => errorStatus === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v) => v.length === CARD_NUMBER_LENGTH_PER_INPUT)) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const updateFormValue = (inputValue: string, index: number) => {
    const newValue = [...value] as CardInfo['cardNumbers'];
    newValue[index] = sanitizeNumber(inputValue);
    onUpdated(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    onChange(e, index);
    updateFormValue(e.target.value, index);
  };

  const handleBlur = onBlur;

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    error: !!activeErrorStatus,
    errorMessage: ERROR_MESSAGES[activeErrorStatus] ?? '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>카드 번호</legend>
        <div css={inputGroupStyle}>
          {value.map((number, index) => (
            <Input
              key={index}
              autoFocus={index === 0}
              variant={activeErrorIndex === index ? 'error' : 'default'}
              value={number}
              type="text"
              inputMode="numeric"
              placeholder="1234"
              maxLength={CARD_NUMBER_LENGTH_PER_INPUT}
              onChange={(e) => handleChange(e, index)}
              onBlur={(e) => handleBlur(e, index)}
            />
          ))}
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
