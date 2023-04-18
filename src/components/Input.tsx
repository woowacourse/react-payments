import React from 'react'
import styled from 'styled-components';
import { InputTitle } from './InputContainer';

export interface InputProps{
  id?: InputTitle;
  type: string;
  placeholder?: string;
}

const StyledInput = styled.input`
  border:none;
  background-color:#ECEBF1;
  font-size:18px;
  font-weight:500;
`

export default function Input({placeholder, type,id}:InputProps) {
  return (
    <StyledInput type={type} placeholder={placeholder} id={id} />
  )
}
