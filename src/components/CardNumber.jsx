import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin: 16px 0;
`;

const InputTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

const InputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export default function CardNumber() {
  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <InputBasic type="text" maxLength="4" />
        <InputBasic type="text" maxLength="4" />
        <InputBasic type="password" maxLength="4" />
        <InputBasic type="password" maxLength="4" />
      </InputBox>
    </InputContainer>
  );
}
