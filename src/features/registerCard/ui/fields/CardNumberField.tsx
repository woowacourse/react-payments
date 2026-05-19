import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { useState } from 'react';
import {
  isValidInputCardNumber,
  getCardNumberFieldState,
  getNextCardNumberFieldState,
  sliceCardNumber,
} from '../../model/registerCardNumber';
import type { FieldServerError } from '../../model/registerCardForm';

export interface CardNumberFieldControl {
  numbers: string[];
  shouldComplete: (value: string[]) => boolean;
  onChange: (v: string[]) => void;
}

export interface CardNumberFieldProps extends CardNumberFieldControl {
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplete: () => void;
  serverError?: FieldServerError;
}

const numberPlaceHolder = (length: number) =>
  Array.from({ length }, (_, index) => index + 1).join('');

export const NumberField = ({
  numbers,
  serverError,
  onChange,
  setStepRef,
  onComplete,
  shouldComplete,
}: CardNumberFieldProps) => {
  const { setInputRef, focusNext } = useInputFocus();
  const [touched, setTouched] = useState([false, false, false, false]);

  const { format, inputErrors, totalErrorMessage, brand } = getCardNumberFieldState({
    numbers,
    touched,
  });
  const visibleErrorMessage = serverError?.message ?? totalErrorMessage;
  const visibleInputErrors =
    serverError?.message !== undefined ? numbers.map(() => serverError?.message) : inputErrors;

  const handleChangeNumbers = (value: string, index: number) => {
    if (!isValidInputCardNumber(value)) return;

    serverError?.onClear();

    const next = [...numbers];
    next[index] = value;
    const { format, nextBrand } = getNextCardNumberFieldState(next);

    const nextNumbers = brand !== nextBrand ? sliceCardNumber(next, format) : next;
    onChange(nextNumbers);

    if (value.length === format[index]) focusNext(index + 1);

    if (shouldComplete(nextNumbers)) onComplete();
  };

  const handleBlur = (index: number) => {
    const next = [...touched];
    next[index] = true;
    setTouched(next);
  };

  return (
    <Field
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label={`카드 번호`}
      errorMessage={visibleErrorMessage}
    >
      {numbers.map((number, index) => (
        <Input
          ref={(node) => {
            setInputRef(node, index);
            if (index === 0) {
              setStepRef(node);
            }
          }}
          type="text"
          key={`${index}`}
          inputMode="numeric"
          value={number}
          placeholder={numberPlaceHolder(format[index])}
          maxLength={format[index]}
          isError={visibleInputErrors[index] !== undefined}
          onChange={(e) => handleChangeNumbers(e.currentTarget.value, index)}
          onBlur={() => handleBlur(index)}
        />
      ))}
    </Field>
  );
};
