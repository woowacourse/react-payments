import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseCardNumbersResult } from '../../hooks/useCardNumbers';

interface CardNumberFieldProps {
  cardNumbers: UseCardNumbersResult;
  setStepRef: (node: HTMLInputElement | null) => void;
}

export const CardNumberField = ({ cardNumbers, setStepRef }: CardNumberFieldProps) => {
  const {
    values,
    totalErrorMessage,
    maxLengths,
    handleChange,
    handleBlur,
    infoErrors,
    setInputRef,
  } = cardNumbers;

  return (
    <Field
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label={`카드 번호`}
      errorMessage={totalErrorMessage}
    >
      {values.map((cardNumber, index) => (
        <Input
          type="text"
          key={`${index}`}
          inputMode="numeric"
          value={cardNumber}
          placeholder={Array.from({ length: maxLengths[index] }, (_, i) => i + 1).join('')}
          maxLength={maxLengths[index]}
          isError={infoErrors[index]}
          ref={(node) => {
            if (index === 0) setStepRef(node);
            setInputRef(node, index);
          }}
          onChange={(e) => handleChange(e.currentTarget.value, index)}
          onBlur={() => handleBlur(index)}
        />
      ))}
    </Field>
  );
};
