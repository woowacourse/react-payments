import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseExpiryDateResult } from '../../hooks/useExpiryDate';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { validateMonth } from '@/entities/card/model/expiryDate';

interface ExpiryDateField {
  expiryField: UseExpiryDateResult;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const ExpiryDateField = ({ expiryField, onComplate, setStepRef }: ExpiryDateField) => {
  const { month, year } = expiryField;

  const { setInputRef, focusNext } = useInputFocus();

  const handleChangeMonth = (value: string) => {
    month.handleChange(value);
    if (validateMonth(value) === undefined) focusNext(1);
  };

  const handleChangeYear = (value: string) => {
    year.handleChange(value);
    if (validateMonth(value) === undefined) onComplate();
  };

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
        }}
        type="text"
        inputMode="numeric"
        value={month.value}
        maxLength={month.maxLength}
        placeholder="MM"
        isError={month.errorMessage !== undefined}
        onChange={(e) => handleChangeMonth(e.target.value)}
        onBlur={() => month.handleBlur()}
      />
      <Input
        ref={(node) => {
          setInputRef(node, 1);
        }}
        type="text"
        inputMode="numeric"
        value={year.value}
        maxLength={year.maxLength}
        placeholder="YY"
        isError={year.errorMessage !== undefined}
        onChange={(e) => handleChangeYear(e.target.value)}
        onBlur={() => year.handleBlur()}
      />
    </Field>
  );
};
