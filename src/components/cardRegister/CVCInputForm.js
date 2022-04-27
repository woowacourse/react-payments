import React from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

export const CVCInputForm = ({ CVC, handleCVCInput }) => {
  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 3) {
      return;
    }

    handleCVCInput(e.target.value);
  };

  return (
    <InputContainer>
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <InputBox width="25%">
        <InputBasic type="password" value={CVC} onChange={handleCVCChange} />
      </InputBox>
    </InputContainer>
  );
};
