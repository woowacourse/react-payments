import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseNumbersResults } from '../../hooks/useNumbers';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { BRAND_RULES, getNumbersError } from '@/entities/card';

interface NumberFieldProps {
  numbersField: UseNumbersResults;
  setStepRef: (node: HTMLInputElement | null) => void;

  onComplate: () => void;
}

export const NumberField = ({ numbersField, setStepRef, onComplate }: NumberFieldProps) => {
  const { values, brand, totalErrorMessage, maxLengths, handleChange, handleBlur, infoErrorField } =
    numbersField;
  const { setInputRef, focusNext } = useInputFocus();

  const handleChangeNumbers = (value: string, index: number) => {
    handleChange(value, index);

    if (value.length === BRAND_RULES[brand].format[index]) focusNext(index + 1);
    const lastIndex = values.length - 1;
    const next = [...values];
    next[lastIndex] = value;
    if (getNumbersError(next.join('')) === undefined) onComplate();
  };

  return (
    <Field
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label={`카드 번호`}
      errorMessage={totalErrorMessage}
    >
      {values.map((number, index) => (
        <Input
          ref={(node) => {
            setInputRef(node, index);
            if (index === 3) setStepRef(node);
          }}
          type="text"
          key={`${index}`}
          inputMode="numeric"
          value={number}
          placeholder={Array.from({ length: maxLengths[index] }, (_, i) => i + 1).join('')}
          maxLength={maxLengths[index]}
          isError={infoErrorField[index]}
          onChange={(e) => handleChangeNumbers(e.currentTarget.value, index)}
          onBlur={() => handleBlur(index)}
        />
      ))}
    </Field>
  );
};
