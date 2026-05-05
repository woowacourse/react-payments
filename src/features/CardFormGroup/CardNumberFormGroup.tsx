import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';

import { CARD_BRAND_FORMAT, getBrand } from '@/entities/card/brand';

import { useState } from 'react';
import { isNumericString } from '@/core/utils/validator';

interface CardNumberFormGroupProps {
  cardNumbers: string[];
  handleChangeCardNumber: (value: string, index: number) => void;
  errorMessage?: string;
}

type FieldState =
  | { status: 'idle' }
  | { status: 'valid' }
  | { status: 'invalid'; reason: 'type' | 'length' };

const ERROR_MESSAGE = {
  type: '숫자만 입력 가능합니다.',
  length: '카드 번호를 전부 채워주세요.',
  default: '',
};

export const CardNumberFormGroup = ({
  cardNumbers,
  handleChangeCardNumber,
}: CardNumberFormGroupProps) => {
  const brand = getBrand(cardNumbers.join(''));
  const INPUT_FORMAT = CARD_BRAND_FORMAT[brand];
  const [inputStates, setInputStates] = useState<FieldState[]>(() =>
    INPUT_FORMAT.map(() => ({ status: 'idle' })),
  );
  // 현재 [4,4,4,4] -> [idle, idle, idle, idle]

  const handleChange = (value: string, index: number) => {
    if (value !== '' && !isNumericString(value)) {
      const nextInputStates = [...inputStates];
      nextInputStates[index] = { status: 'invalid', reason: 'type' };
      setInputStates(nextInputStates);
      return;
    }
    const nextInputStates = [...inputStates];
    nextInputStates[index] =
      value.length === INPUT_FORMAT[index] ? { status: 'valid' } : { status: 'idle' };
    setInputStates(nextInputStates);
    handleChangeCardNumber(value, index);
  };

  const handleBlurCardNumber = (index: number) => {
    if (inputStates[index].status === 'valid') return;
    const nextInputStates = [...inputStates];
    nextInputStates[index] = { status: 'invalid', reason: 'length' };
    setInputStates(nextInputStates);
  };

  const getErrorMessage = () => {
    if (inputStates.some((state) => state.status === 'invalid')) {
      const typeError = inputStates.find(
        (state) => state.status === 'invalid' && state.reason === 'type',
      );
      if (typeError) return ERROR_MESSAGE.type;
      return ERROR_MESSAGE.length;
    }
    return ERROR_MESSAGE.default;
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
          isError={inputStates[index].status === 'invalid'}
          onChange={(e) => handleChange(e.target.value, index)}
          onBlur={() => handleBlurCardNumber(index)}
        />
      ))}
    </FormGroup>
  );
};
