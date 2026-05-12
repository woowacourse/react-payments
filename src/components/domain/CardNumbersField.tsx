import { css } from '@emotion/react';
import { useEffect } from 'react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus } from '../../types';
import { validate, type ValidationRule } from '../../utils';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';
import useInputFocus from '../../hooks/useInputFocus';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus];
  onUpdated: (value: CardInfo['cardNumbers']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus]) => void;
  onValid: (value: CardInfo['cardNumbers']) => void;
  validationRules: ValidationRule[];
}

export default function CardNumbersField({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
}: CardNumbersFieldProps) {
  const { setRef, focusNext, focusPrev, focusFirst } = useInputFocus(4);

  useEffect(() => {
    focusFirst();
  }, []);

  const updateErrorStatuses = (index: number, status: ErrorStatus) => {
    const newErrorStatuses = [...errorStatuses] as [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus];
    newErrorStatuses[index] = status;
    onErrorUpdated(newErrorStatuses);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules, 'onChange', inputValue);
    updateErrorStatuses(index, error as ErrorStatus);
    if (error) return;

    const newValue = [...value] as CardInfo['cardNumbers'];
    newValue[index] = inputValue;
    onUpdated(newValue);

    const isLastInput = index === value.length - 1;
    const arePreviousInputsFilled = newValue
      .slice(0, -1)
      .every((number) => number.length === CARD_NUMBER_LENGTH_PER_INPUT);

    if (isLastInput && arePreviousInputsFilled && inputValue.length >= 2) {
      onValid(newValue);
    }

    if (inputValue.length === CARD_NUMBER_LENGTH_PER_INPUT) {
      focusNext(index);
    }
  };

  const handleKeyUp = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && value[index] === '') {
      focusPrev(index);
    }
  };

  const handleBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    updateErrorStatuses(index, validate(validationRules, 'onBlur', e.target.value) as ErrorStatus);
  };

  const activeError = errorStatuses.find((e) => e !== null) ?? null;

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
              ref={setRef(index)}
              variant={errorStatuses[index] !== null ? 'error' : 'default'}
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
