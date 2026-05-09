import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';

import type { UseCardNumbersResult } from '@/entities/card/useCardNumbers';

interface CardNumberFormGroupProps {
  results: UseCardNumbersResult;
}

export const CardNumberFormGroup = ({ results }: CardNumberFormGroupProps) => {
  console.log(results);
  return (
    <FormGroup
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      errorMessage={results.errorMessage}
    >
      {results.cardNumbers.map((cardNumber, index) => (
        <Input
          type="text"
          inputMode="numeric"
          key={`card-number-${index}`}
          value={cardNumber}
          placeholder="1234"
          maxLength={results.maxLengths[index]}
          isError={results.errors[index] !== undefined}
          onChange={(e) => results.handleChange(e.target.value, index)}
          onBlur={() => results.handleBlur(index)}
        />
      ))}
    </FormGroup>
  );
};
