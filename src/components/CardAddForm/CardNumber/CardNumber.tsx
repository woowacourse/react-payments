import styles from './style.module.css';
import { ChangeEvent } from 'react';
import { CardInputValidation, CardNumberFormat } from '../../../types';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

interface CardNumberProps {
  handleValidationChange: (key: keyof CardInputValidation, value: boolean) => void;
  onChange: ({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => void;
  values: CardNumberFormat;
}

function CardNumber({ handleValidationChange, onChange, values }: CardNumberProps) {
  const [isError, onErrorBlur] = useError({
    validator: validator.cardNumber,
    handleValidationChange,
    inputs: values,
  });

  return (
    <InputContainer
      label="카드 번호"
      id="cardNumber"
      isError={isError}
      supportingText={isError ? '카드에 표시된 16자리 숫자와 동일하게 입력해주세요' : undefined}
      required
    >
      <div
        className={`${styles.container} ${isError ? styles.error : ''}`}
        data-name="cardNumber"
        onBlur={onErrorBlur}
        tabIndex={0}
      >
        {values.map((number, index) => (
          <Input
            key={index}
            type={index < 2 ? 'text' : 'password'}
            id={index === 0 ? 'cardNumber' : `cardNumber${index}`}
            value={number}
            maxLength={4}
            autoComplete="cc-csc"
            data-index={index}
            data-name="cardNumber"
            onChange={onChange}
          />
        ))}
      </div>
    </InputContainer>
  );
}

export default CardNumber;
