import React from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

export const CVCInputForm = () => {
  return (
    <InputContainer>
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <InputBox width="25%">
        <InputBasic type="password" value="111" />
      </InputBox>
    </InputContainer>
  );
};
