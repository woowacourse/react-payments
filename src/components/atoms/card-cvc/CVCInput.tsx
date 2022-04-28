import React from "react";
import { css } from "@emotion/react";
import { transformNumToBullet } from "../../../utils";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const style = css({
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
  }
});

function CVCInput({ onChange, value }: Props) {
  return <input id="card-cvc-input" css={style} type="text" onChange={onChange} value={transformNumToBullet(value)} placeholder='' />
}

export default CVCInput;
