import React from 'react'
import styled from 'styled-components';

export interface InputProps{
  kind: string;
  placeholder?: string;
}

const StyledInput = styled.input`
  border:none;
  background:#E5E5E5;
  font-size:18px;
  font-weight:500;
`

export default function Input({placeholder, kind,}:InputProps) {
  return (
    <StyledInput type={kind} placeholder={placeholder}/>
  )
}
