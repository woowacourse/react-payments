import React, { useEffect } from 'react';
import styled from 'styled-components';

import { MAX_LENGTH } from '../../constants/card';
import { CARD_INFO_TYPES } from '../../reducer/types';

import { QuestionMark } from '../common/QuestionMark';
import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from '../common/styled';

export const CVCInput = ({ CVC, onCVCInput, onCardCVCCheck, openModal }) => {
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
      <Style.CVCInputContainer>
        <Style.CVCInputBox>
          <InputBasic type="password" value={CVC} onChange={handleCVCChange} />
        </Style.CVCInputBox>
        <QuestionMark onClick={openModal} />
      </Style.CVCInputContainer>
    </InputContainer>
  );
};

const Style = {
  CVCInputContainer: styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
  `,
  CVCInputBox: styled(InputBox)`
    width: 25%;
  `,
};
