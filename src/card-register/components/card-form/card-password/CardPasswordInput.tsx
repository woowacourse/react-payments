import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../hooks/useForm/useFormContext';

type Props = {
  position: number;
  disabled?: boolean;
};

function CardPasswordInput(props: Props) {
  const { position, disabled } = props;
  const { register } = useFormContext();

  return (
    <div>
      {disabled ? (
        <Input disabled placeholder="•" />
      ) : (
        <Input {...register(`password-${position}`, { maxLength: { value: 1 } })} />
      )}
    </div>
  );
}
CardPasswordInput.displayName = 'CardPasswordInput';

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '43px',
  borderRadius: '7px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  marginRight: '7px',
  '&:focus': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: 'white',
  },
}));

export default CardPasswordInput;
