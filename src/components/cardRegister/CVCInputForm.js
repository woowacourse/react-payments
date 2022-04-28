import React, { useEffect } from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { QuestionMark } from '../common/QuestionMark';
import { FlexWrapper, InputContainer, InputTitle } from '../common/styled';

export const CVCInputForm = ({ CVC, handleCVCInput, handleCardCVCCheck }) => {
  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 3) {
      return;
    }

    handleCVCInput(e.target.value);
  };

  useEffect(() => {
    const isCVCCompleted = CVC.length === 3;

    handleCardCVCCheck(isCVCCompleted);
  }, [CVC]);

  return (
    <InputContainer>
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <FlexWrapper alignItems={'baseline'} gap={'10px'}>
        <InputBox width="25%">
          <InputBasic type="password" value={CVC} onChange={handleCVCChange} />
        </InputBox>
        <QuestionMark handler={() => {}} />
      </FlexWrapper>
    </InputContainer>
  );
};
