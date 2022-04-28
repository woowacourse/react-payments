import React from "react";
import { css } from "@emotion/react";
import { MAX_NAME_LENGTH } from "../../../constants";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const style = css({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  }
});

function CardOwnerNameInput({ onChange, value }: Props) {
  return <input id="card-owner-name-input" css={style} type="text" onChange={onChange} value={value} placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
}

export default CardOwnerNameInput;
