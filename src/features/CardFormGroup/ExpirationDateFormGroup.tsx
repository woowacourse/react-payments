import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';

import type { UseFieldResult } from '@/core/hooks/useField';
import { MONTH_CONSTAND, YEAR_CONSTAND } from '@/entities/card/expiration';
interface ExpirationDateFormGroupProps {
  month: UseFieldResult;
  year: UseFieldResult;
}

export const ExpirationDateFormGroup = ({ month, year }: ExpirationDateFormGroupProps) => {
  return (
    <FormGroup
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={month.error || year.error}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={month.value}
        maxLength={MONTH_CONSTAND.LENGTH}
        placeholder="MM"
        isError={month.error !== undefined}
        onChange={(e) => month.handleChange(e.target.value)}
        onBlur={() => month.handleBlur}
      />
      <Input
        type="text"
        inputMode="numeric"
        value={year.value}
        maxLength={YEAR_CONSTAND.LENGTH}
        placeholder="YY"
        isError={year.error !== undefined}
        onChange={(e) => year.handleChange(e.target.value)}
        onBlur={() => year.handleBlur}
      />
    </FormGroup>
  );
};
