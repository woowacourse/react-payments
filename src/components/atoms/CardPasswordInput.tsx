import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const style = css({
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
  }
});

type Props = {
  value?: string,
  disabled?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardPasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, disabled, onChange } = props;
  return(
    <>
      { 
        disabled ? 
          <input css={style} disabled placeholder='•' />
          : <input id="card-password-input" autoComplete="off" css={style} type="text" onChange={onChange} value={value} placeholder='' ref={ref} />
      }
    </>
  )
});

export default CardPasswordInput;
