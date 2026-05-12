import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus, Validate } from '../../types';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { isNumber, sanitizeNumber } from '../../utils';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  errorStatus: ErrorStatus[];
  setFieldValue: (field: 'cardNumbers', value: string, index: number) => void;
  setFieldError: (field: 'cardNumbers', error: ErrorStatus, index: number) => void;
  onCompleted: () => void;
}

const rules: Validate<ErrorStatus>[] = [
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

export default function CardNumbersField({
  value,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: CardNumbersFieldProps) {
  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v) => v.length === CARD_NUMBER_LENGTH_PER_INPUT)) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const getActiveError = (inputValue: string, eventType: 'change' | 'blur') => {
    const activeRule = rules
      .filter((rule) => rule.type.includes(eventType))
      .find((rule) => rule.rule(inputValue));

    return activeRule?.errorStatus ?? null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(inputValue, 'change');

    setFieldError('cardNumbers', error, index);
    setFieldValue('cardNumbers', sanitizeNumber(inputValue), index);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(inputValue, 'blur');

    if (error) {
      setFieldError('cardNumbers', error, index);
    }
  };

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
              name="cardNumbers"
              autoFocus={index === 0}
              variant={activeErrorIndex === index ? 'error' : 'default'}
              value={number}
              onChange={(e) => handleChange(e, index)}
              onBlur={(e) => handleBlur(e, index)}
              type="text"
              inputMode="numeric"
              placeholder="1234"
              maxLength={CARD_NUMBER_LENGTH_PER_INPUT}
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
