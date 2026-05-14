import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseExpiryDateResult } from '../../hooks/useExpiryDate';

interface ExpiryDateFieldProps {
  expiryDate: UseExpiryDateResult;
  setStepRef: (node: HTMLInputElement | null) => void;
}

export const ExpiryDateField = ({ expiryDate, setStepRef }: ExpiryDateFieldProps) => {
  const { month, year, setInputRef } = expiryDate;
  return (
    <Field
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={month.errorMessage || year.errorMessage}
    >
      <Input
        ref={(node) => {
          setStepRef(node);
          setInputRef(node, 0);
        }}
        type="text"
        inputMode="numeric"
        value={month.value}
        maxLength={month.maxLength}
        placeholder="MM"
        isError={month.errorMessage !== undefined}
        onChange={(e) => month.handleChange(e.target.value)}
        onBlur={() => month.handleBlur()}
      />
      <Input
        ref={(node) => setInputRef(node, 1)}
        type="text"
        inputMode="numeric"
        value={year.value}
        maxLength={year.maxLength}
        placeholder="YY"
        isError={year.errorMessage !== undefined}
        onChange={(e) => year.handleChange(e.target.value)}
        onBlur={() => year.handleBlur()}
      />
    </Field>
  );
};
