import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { useState } from 'react';
import {
  isValidCardNumberInput,
  getCardNumberFieldState,
  getNextCardNumberFieldState,
} from '../../model/registerCardNumber';

export interface CardNumberFieldControl {
  numbers: string[];
  onChange: (values: string[]) => void;
}

interface CardNumberFieldProps {
  numbersField: CardNumberFieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

const numberPlaceHolder = (length: number) =>
  Array.from({ length }, (_, index) => index + 1).join('');

export const NumberField = ({ numbersField, setStepRef, onComplate }: CardNumberFieldProps) => {
  const { numbers, onChange } = numbersField;
  const { setInputRef, focusNext } = useInputFocus();
  const [touched, setTouched] = useState([false, false, false, false]);

  const { format, inputErrors, totalErrorMessage } = getCardNumberFieldState({
    numbers,
    touched,
  });

  const handleChangeNumbers = (value: string, index: number) => {
    if (!isValidCardNumberInput(value)) return;

    const next = [...numbers];
    next[index] = value;
    onChange(next);

    const { format, isValid } = getNextCardNumberFieldState(next);

    if (isValid) onComplate();
    if (value.length === format[index]) focusNext(index + 1);
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
      errorMessage={totalErrorMessage}
    >
      {numbers.map((number, index) => (
        <Input
          ref={(node) => {
            setInputRef(node, index);
            setStepRef(node);
          }}
          type="text"
          key={`${index}`}
          inputMode="numeric"
          value={number}
          placeholder={numberPlaceHolder(format[index])}
          maxLength={format[index]}
          isError={inputErrors[index] !== undefined}
          onChange={(e) => handleChangeNumbers(e.currentTarget.value, index)}
          onBlur={() => handleBlur(index)}
        />
      ))}
    </Field>
  );
};
