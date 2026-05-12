import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardBrand, CardInfo, ErrorStatus, Validate } from '../../types';
import {
  AMEX_CARD_NUMBERS_LENGTH,
  CARD_NUMBERS_LENGTH,
  DINERS_CARD_NUMBERS_LENGTH,
  ERROR_MESSAGES,
} from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { getActiveError, isNumber, sanitizeNumber } from '../../utils';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  cardBrand: CardBrand;
  errorStatus: ErrorStatus[];
  setFieldValue: (field: 'cardNumbers', value: string, index: number) => void;
  setFieldError: (field: 'cardNumbers', error: ErrorStatus, index: number) => void;
  onCompleted: () => void;
}

export default function CardNumbersField({
  value,
  cardBrand,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: CardNumbersFieldProps) {
  const cardNumbersLength = (() => {
    if (cardBrand === 'diners') return DINERS_CARD_NUMBERS_LENGTH;
    if (cardBrand === 'amex') return AMEX_CARD_NUMBERS_LENGTH;
    return CARD_NUMBERS_LENGTH;
  })();

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
      rule: (inputValue: string, index: number) => inputValue.length < cardNumbersLength[index],
      errorStatus: 'invalidLength',
    },
  ];

  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v, index) => v.length === cardNumbersLength[index])) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(rules, inputValue, 'change', index);

    setFieldError('cardNumbers', error, index);
    setFieldValue('cardNumbers', sanitizeNumber(inputValue), index);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = getActiveError(rules, inputValue, 'blur', index);

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
              maxLength={cardNumbersLength[index]}
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
