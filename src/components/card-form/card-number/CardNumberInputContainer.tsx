import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../shared/PositiveNumberInput';

function CardNumberInputContainer() {
  const { register } = useFormContext();

  return (
    <Wrapper>
      <PositiveNumberInput
        type="text"
        {...register('card-number-1', {
          minLength: { value: 4, message: '최소 4글자 입니다' },
          maxLength: { value: 4 },
        })}
      />
      <Sepeartor />
      <PositiveNumberInput
        type="text"
        {...register('card-number-2', {
          minLength: { value: 4, message: '최소 4글자 입니다' },
          maxLength: { value: 4 },
        })}
      />
      <Sepeartor />
      <PositiveNumberInput
        type="password"
        {...register('card-number-3', {
          minLength: { value: 4, message: '최소 4글자 입니다' },
          maxLength: { value: 4 },
        })}
      />
      <Sepeartor />
      <PositiveNumberInput
        type="password"
        {...register('card-number-4', {
          minLength: { value: 4, message: '최소 4글자 입니다' },
          maxLength: { value: 4 },
        })}
      />
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
