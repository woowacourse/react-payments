import { FormGroup } from '@/core/components/formGroup';
import { Input } from '@/core/components/input';
import { CARD_BRAND_FORMAT } from '@/entities/card/brand';
import type { Brand } from '@/entities/card/brand';
import { useState } from 'react';

interface CardNumberFormGroupProps {
  brand: Brand;
  cardNumbers: string[];
  onChangeCardNumber: (value: string, index: number) => void;
}

export const CardNumberFormGroup = ({
  brand,
  cardNumbers,
  onChangeCardNumber,
}: CardNumberFormGroupProps) => {
  const inputFormat = CARD_BRAND_FORMAT[brand];
  const [onBlurCardNumber, setOnBlurCardNumber] = useState([false, false, false, false]);

  const getErrorMessageCardNumbers = (cardNumbers: string[]) => {
    if (onBlurCardNumber.every((blur) => !blur)) return '';
    if (cardNumbers.some((cardNumber) => cardNumber.length !== 4))
      return '카드 번호를 전부 채워주세요';
    return '';
  };

  const handleBlurCardNumber = (index: number) => {
    const next = [...onBlurCardNumber];
    next[index] = true;
    setOnBlurCardNumber(next);
  };

  return (
    <FormGroup
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      // errorMessage={renderErrorMessageCardNumbers(cardNumbers)}
    >
      {inputFormat.map((size, index) => (
        <Input
          type="text"
          key={index}
          value={cardNumbers[index]}
          maxLength={size}
          placeholder="1234"
          // isError={renderErrorCardNumberInput(cardNumbers[index])}
          onChange={(e) => onChangeCardNumber(e.target.value, index)}
          // onBlur={() => handleBlurCardNumber(index)}
        />
      ))}
    </FormGroup>
  );
};
