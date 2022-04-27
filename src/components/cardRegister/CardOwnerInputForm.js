import React from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputContainer, InputTitle } from '../common/styled';

export const CardOwnerInputForm = () => {
  return (
    <InputContainer>
      <InputTitle>카드 소유자 이름(선택)</InputTitle>
      <InputBasic type="text" value="유세지" />
    </InputContainer>
  );
};
