import React, { useEffect } from 'react';

import { MAX_LENGTH } from '../../constants/card';
import { CARD_INFO_TYPES } from '../../reducer/types';

import { QuestionMark } from '../common/QuestionMark';
import {
  FlexWrapper,
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from '../common/styled';

export const CVCInputForm = ({
  CVC,
  onCVCInput,
  onCardCVCCheck,
  openModal,
}) => {
  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > MAX_LENGTH.CVC) {
      return;
    }

    onCVCInput({
      type: CARD_INFO_TYPES.SET_CVC,
      payload: { CVC: e.target.value },
    });
  };

  useEffect(() => {
    const isCVCCompleted = CVC.length === MAX_LENGTH.CVC;

    onCardCVCCheck(isCVCCompleted);
  }, [CVC]);

  return (
    <InputContainer>
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <FlexWrapper alignItems={'baseline'} gap={'10px'}>
        <InputBox width="25%">
          <InputBasic type="password" value={CVC} onChange={handleCVCChange} />
        </InputBox>
        <QuestionMark onClick={openModal} />
      </FlexWrapper>
    </InputContainer>
  );
};
