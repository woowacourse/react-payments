import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ExpiredPeriodInput = forwardRef<HTMLInputElement, Props>(({ onChange, value }, ref) => {
  return <Input type="text" onChange={onChange} ref={ref} value={value} placeholder="MM / YY" />;
});
ExpiredPeriodInput.displayName = 'ExpiredPeriodInput';

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '137px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
}));


export default ExpiredPeriodInput;
