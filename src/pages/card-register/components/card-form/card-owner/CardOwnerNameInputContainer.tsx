import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';

function CardOwnerNameInputContainer() {
  const { register } = useFormContext();

  return (
    <Input
      autoComplete="off"
      type="text"
      {...register('card-owner-name', {
        maxLength: { value: 30 },
        pattern: { value: '[A-Z]+[A-Z ]*$', message: '영어 대문자로 입력해 주세요' },
      })}
    />
  );
}

const Input = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  border-radius: 7px;
  max-width: 318px;
  outline: none !important;
  border: inherit;
  font-size: 18px;
  text-align: center;
  &:focus {
    box-shadow: none;
  }
`;

export default CardOwnerNameInputContainer;
