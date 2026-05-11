import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus } from '../../types';
import { isNumber } from '../../utils';
import { useRef, useState } from 'react';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  onUpdated: (value: CardInfo['cardNumbers']) => void;
}

export default function CardNumbersField({ value, onUpdated }: CardNumbersFieldProps) {
  const [errors, setErrors] = useState<[ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus]>([null, null, null, null]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  const updateError = (index: number, status: ErrorStatus) => {
    setErrors((prev) => {
      const next = [...prev] as [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus];
      next[index] = status;
      return next;
    });
  };

  // 입력 또는 삭제할 때마다 수행되어야하는 validation 수행.
  // 1. required
  // 2. numberOnly -> update 제외됨.
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue !== '' && !isNumber(inputValue)) {
      updateError(index, 'numberOnly');
      return;
    }

    const newValue = [...value] as CardInfo['cardNumbers'];
    newValue[index] = inputValue;
    onUpdated(newValue);
    updateError(index, inputValue === '' ? 'required' : null);

    if (inputValue.length === CARD_NUMBER_LENGTH_PER_INPUT && index < value.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyUp = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && value[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // 포커스가 빠질때마다 수행되어야 하는 validation 수행.
  // 1. required
  // 2. invalidLength
  const handleBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      updateError(index, 'required');
      return;
    }

    if (inputValue.length < CARD_NUMBER_LENGTH_PER_INPUT) {
      updateError(index, 'invalidLength');
      return;
    }

    updateError(index, null);
  };

  const activeError = errors.find((e) => e !== null) ?? null;

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    error: activeError !== null,
    errorMessage: activeError ? ERROR_MESSAGES[activeError] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>카드 번호</legend>
        <div css={inputGroupStyle}>
          {value.map((number, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              variant={errors[index] !== null ? 'error' : 'default'}
              value={number}
              type="text"
              inputMode="numeric"
              placeholder="1234"
              maxLength={CARD_NUMBER_LENGTH_PER_INPUT}
              onChange={(e) => handleChange(index, e)}
              onBlur={(e) => handleBlur(index, e)}
              onKeyUp={(e) => handleKeyUp(index, e)}
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
