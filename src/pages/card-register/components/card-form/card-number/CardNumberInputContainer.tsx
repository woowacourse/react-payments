import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../common/PositiveNumberInput';

function CardNumberInputContainer() {
  const { register } = useFormContext();
  const validationOption = {
    required: { value: true },
    maxLength: { value: 4 },
    pattern: {
      value: '[0-9]{4}',
      message: '4자리 숫자를 입력해 주세요',
    },
  };

  return (
    <Wrapper>
      <PositiveNumberInput type="text" {...register('card-number-1', { ...validationOption })} />
      <Sepeartor />
      <PositiveNumberInput type="text" {...register('card-number-2', { ...validationOption })} />
      <Sepeartor />
      <PositiveNumberInput type="password" {...register('card-number-3', { ...validationOption })} />
      <Sepeartor />
      <PositiveNumberInput type="password" {...register('card-number-4', { ...validationOption })} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: #ecebf1;
  border-radius: 7px;
  overflow: hidden;
`;

const Sepeartor = styled.div`
  width: 10px;
  position: relative;
  &:before {
    content: '-';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #80808078;
  }
`;

export default CardNumberInputContainer;
