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
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  }
}))

function CardOwnerNameInput({ onChange, value }: Props) {
  return <Input id="card-owner-name-input" type="text" onChange={onChange} value={value} placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
}

export default CardOwnerNameInput;
