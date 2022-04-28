import React from "react";
import { css } from "@emotion/react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const style = css({
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
});

function ExpiredPeriodInput({ onChange, value }: Props) {
  return <input css={style} type="text" onChange={onChange} value={value} placeholder='MM / YY' />
}

export default ExpiredPeriodInput;
