import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardBrand, CardInfo, ErrorStatus } from '../../types';
import {
  AMEX_CARD_NUMBERS_LENGTH,
  CARD_NUMBERS_LENGTH,
  DINERS_CARD_NUMBERS_LENGTH,
  ERROR_MESSAGES,
} from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { sanitizeNumber } from '../../utils';
import { validates } from '../../validates.ts';
import { useInputs } from '../../hooks/useInputs.ts';

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
  const { registerInputRefs, moveToNext, handleKeyDown } = useInputs();

  const cardNumbersLength = (() => {
    if (cardBrand === 'diners') return DINERS_CARD_NUMBERS_LENGTH;
    if (cardBrand === 'amex') return AMEX_CARD_NUMBERS_LENGTH;
    return CARD_NUMBERS_LENGTH;
  })();

  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v, index) => v.length === cardNumbersLength[index])) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value, cardNumbersLength]);

  // TODO: validate key와 반환값 연동 로직 고민
  const validate = (eventType: 'change' | 'blur', inputValue: string, index: number) => {
    if (validates['required'](inputValue)) {
      return 'required';
    }

    if (eventType === 'change' && validates['numberOnly'](inputValue)) {
      return 'numberOnly';
    }

    if (eventType === 'blur' && validates['invalidLength'](inputValue, cardNumbersLength[index])) {
      return 'invalidLength';
    }

    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const sanitizedValue = sanitizeNumber(inputValue);
    const error = validate('change', inputValue, index);

    setFieldError('cardNumbers', error, index);
    setFieldValue('cardNumbers', sanitizedValue, index);

    if (sanitizedValue.length === cardNumbersLength[index]) {
      moveToNext(index);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = validate('blur', inputValue, index);

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
              ref={(el) => registerInputRefs(el, index)}
              name="cardNumbers"
              autoFocus={index === 0}
              variant={activeErrorIndex === index ? 'error' : 'default'}
              value={number}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
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
