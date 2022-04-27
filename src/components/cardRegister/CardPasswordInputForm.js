import React from 'react';
import styled from 'styled-components';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';
import Dot from '../common/Dot';

export const CardPasswordInputForm = () => {
  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBox
        width="50%"
        backgroundColor="transparent"
        justifyContent={'space-between'}
      >
        <InputBasic type="password" width="20%" value="1" />
        <InputBasic type="password" width="20%" value="1" />
        <Dot />
        <Dot />
      </InputBox>
    </InputContainer>
  );
};
