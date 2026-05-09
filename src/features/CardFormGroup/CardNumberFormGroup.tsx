import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { useInputFocus } from '@/core/hooks/useInputFocus';

import type { UseCardNumbersResult } from '@/entities/card/useCardNumbers';

interface CardNumberFormGroupProps {
  results: UseCardNumbersResult;
  setStepRef: (node: HTMLInputElement | null, index: number) => void;
  onComplete: () => void;
}

export const CardNumberFormGroup = ({
  results,
  setStepRef,
  onComplete,
}: CardNumberFormGroupProps) => {
  // UX 관련 로직이라 컴포넌트 내부에 뒀습니다.
  const { setInputRef, focusNext } = useInputFocus();
  const handleChangeNextFocus = (value: string, index: number) => {
    results.handleChange(value, index);
    const nextInputCondition = value.length === results.maxLengths[index];
    if (nextInputCondition && nextStepCondition(index)) {
      console.log('object');
      onComplete();
    }
    if (nextInputCondition) focusNext(index);
  };

  const nextStepCondition = (index: number) => {
    const lastIndex = results.errors.length - 1;
    if (results.errors.every((error) => error === undefined) && lastIndex === index) return true;
    return false;
  };

  return (
    <FormGroup
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      errorMessage={results.errorMessage}
    >
      {results.values.map((cardNumber, index) => (
        <Input
          type="text"
          inputMode="numeric"
          key={`card-number-${index}`}
          value={cardNumber}
          placeholder="1234"
          maxLength={results.maxLengths[index]}
          isError={results.errors[index] !== undefined}
          ref={(node) => {
            if (index === 0) setStepRef(node, index);
            setInputRef(node, index);
          }}
          onChange={(e) => handleChangeNextFocus(e.currentTarget.value, index)}
          onBlur={(e) => results.handleBlur(e.currentTarget.value, index)}
        />
      ))}
    </FormGroup>
  );
};
