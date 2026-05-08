import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';

import { CARD_BRAND_FORMAT, getBrand } from '@/entities/card/brand';

import { useState } from 'react';
import { validateCardNumber, validateCardNumberFormat } from '@/entities/card/cardNumbers';

interface CardNumberFormGroupProps {
  cardNumbers: string[];
  handleChangeCardNumber: (value: string, index: number) => void;
}

export const CardNumberFormGroup = ({
  cardNumbers,
  handleChangeCardNumber,
}: CardNumberFormGroupProps) => {
  const brand = getBrand(cardNumbers.join(''));
  const INPUT_FORMAT = CARD_BRAND_FORMAT[brand];
  const [errors, setErrors] = useState<(string | undefined)[]>(() =>
    INPUT_FORMAT.map(() => undefined),
  );

  const handleChange = (value: string, index: number) => {
    const nextErrors = [...errors];
    nextErrors[index] = validateCardNumberFormat(value);
    setErrors(nextErrors);
    if (nextErrors[index] !== undefined) return;
    handleChangeCardNumber(value, index);
  };

  const handleBlurCardNumber = (index: number) => {
    const nextError = [...errors];
    nextError[index] = validateCardNumber(cardNumbers[index], brand);
    setErrors(nextError);
  };

  const getErrorMessage = () => {
    return errors.find((error) => error !== undefined);
  };

  return (
    <FormGroup
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      errorMessage={getErrorMessage()}
    >
      {INPUT_FORMAT.map((size, index) => (
        <Input
          type="text"
          inputMode="numeric"
          key={`card-number-${index}`}
          value={cardNumbers[index]}
          placeholder="1234"
          maxLength={size}
          isError={!!errors[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onBlur={() => handleBlurCardNumber(index)}
        />
      ))}
    </FormGroup>
  );
};
