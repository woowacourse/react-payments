import React from 'react';
import styled from 'styled-components';

import { InputBasic } from '../components/common/InputBasic';
import { InputBox } from '../components/common/InputBox';

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

export const CardRegisterPage = () => {
  return (
    <div>
      <InputContainer>
        <InputTitle>카드 번호</InputTitle>
        <InputBox>
          <InputBasic type="text" />
          <InputBasic type="text" />
          <InputBasic type="text" />
          <InputBasic type="text" />
        </InputBox>
      </InputContainer>
      <InputContainer>
        <InputTitle>만료일</InputTitle>
        <InputBox width="50%">
          <InputBasic type="text" placeholder="MM" />
          /
          <InputBasic type="text" placeholder="YY" />
        </InputBox>
      </InputContainer>
      <InputContainer>
        <InputTitle>카드 소유자 이름(선택)</InputTitle>
        <InputBasic type="text" value="유세지" />
      </InputContainer>
      <InputContainer>
        <InputTitle>보안카드(CVC/CVV)</InputTitle>
        <InputBox width="25%">
          <InputBasic type="password" value="111" />
        </InputBox>
      </InputContainer>
      <InputContainer>
        <InputTitle>카드 비밀번호</InputTitle>
        <InputBox width="50%">
          <InputBasic type="password" width="15%" value="1" />
          <InputBasic type="password" width="15%" value="1" />
          <InputBasic type="password" width="15%" value="1" />
          <InputBasic type="password" width="15%" value="1" />
        </InputBox>
      </InputContainer>
    </div>
  );
};
