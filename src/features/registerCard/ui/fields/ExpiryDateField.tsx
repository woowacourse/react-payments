import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseExpiryDateResult } from '../../hooks/useExpiryDate';

export const ExpiryDateField = ({ month, year }: UseExpiryDateResult) => {
  return (
    <Field
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
      label="유효기간"
      errorMessage={month.errorMessage || year.errorMessage}
    >
      <Input
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
