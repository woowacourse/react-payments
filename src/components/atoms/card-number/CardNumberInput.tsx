import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '47px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
}));

const CardNumberInput = forwardRef<HTMLInputElement, Props>(({ onChange, onKeyDown }, ref) => {
  return <Input pattern="[0-9*]" onChange={onChange} onKeyDown={onKeyDown} ref={ref} />;
});
CardNumberInput.displayName = 'CardNumberInput';

export default CardNumberInput;
