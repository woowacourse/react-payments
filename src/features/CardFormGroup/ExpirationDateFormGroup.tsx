import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';

import type { UseFieldResult } from '@/core/hooks/useField';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { MONTH_CONSTAND, YEAR_CONSTAND } from '@/entities/card/expiration';
interface ExpirationDateFormGroupProps {
  month: UseFieldResult;
  year: UseFieldResult;
  setStepRef: (node: HTMLInputElement | null, index: number) => void;
  onComplete: () => void;
}

export const ExpirationDateFormGroup = ({
  month,
  year,
  setStepRef,
  onComplete,
}: ExpirationDateFormGroupProps) => {
  const { setInputRef, focusNext } = useInputFocus();
  const handleChangeMonthFocus = (value: string) => {
    month.handleChange(value);
    const nextInputCondition = value.length === MONTH_CONSTAND.LENGTH;
    if (nextInputCondition) focusNext(1);
  };

  const handleChangeYearFocus = (value: string) => {
    month.handleChange(value);
    if (nextStepCondition()) onComplete();
  };

  const nextStepCondition = () => {
    if (month.error || year.error) return false;
    return true;
  };

  return (
    <FormGroup
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={month.error || year.error}
    >
      <Input
        ref={(node) => {
          setInputRef(node, 0);
          setStepRef(node, 1);
        }}
        type="text"
        inputMode="numeric"
        value={month.value}
        maxLength={MONTH_CONSTAND.LENGTH}
        placeholder="MM"
        isError={month.error !== undefined}
        onChange={(e) => handleChangeMonthFocus(e.target.value)}
        onBlur={() => month.handleBlur}
      />
      <Input
        type="text"
        inputMode="numeric"
        value={year.value}
        maxLength={YEAR_CONSTAND.LENGTH}
        placeholder="YY"
        isError={year.error !== undefined}
        onChange={(e) => handleChangeYearFocus(e.target.value)}
        onBlur={() => year.handleBlur}
      />
    </FormGroup>
  );
};
