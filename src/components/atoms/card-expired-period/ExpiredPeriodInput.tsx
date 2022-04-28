import React from "react";
import styled from "@emotion/styled";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

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
  }
}));

function ExpiredPeriodInput({ onChange, value }: Props) {
  return  <Input type="text" onChange={onChange} value={value} placeholder='MM / YY' />
}

export default ExpiredPeriodInput;
