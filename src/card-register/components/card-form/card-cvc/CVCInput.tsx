import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../hooks/useForm/useFormContext';
import { UseFormRegisterOption } from '../../../hooks/useForm/types';

type Props = UseFormRegisterOption;

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '84px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  marginRight: '11px',
  '&:focus': {
    boxShadow: 'none',
  },
}));

function CVCInput(props: Props) {
  const { register } = useFormContext();
  return <Input id="card-cvc-input" type="password" {...register('cvc', { ...props })} />;
}

export default CVCInput;
