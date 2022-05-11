import React, { useState } from "react";

import { RULE_INPUT } from "constants/constants";
import {
  FlexWrapper,
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
  TipButton,
} from "components/common";

export const CVCInput = ({
  isValid,
  handleCardCVCCheck,
  handleModalVisible,
}) => {
  const handleCVCChange = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      return;
    }

    handleCardCVCCheck(e.target.value.length === 3);
  };

  return (
    <InputContainer>
      <InputTitle htmlFor="input_CVC" isValid={isValid}>
        보안카드(CVC/CVV)
      </InputTitle>
      <FlexWrapper alignItems="baseline" gap="10px">
        <InputBox width="25%">
          <InputBasic
            type="password"
            id="input_CVC"
            maxLength="3"
            pattern={RULE_INPUT.CVC_RULE}
            onChange={handleCVCChange}
          />
        </InputBox>
        <TipButton onClick={handleModalVisible} contents="?" />
      </FlexWrapper>
    </InputContainer>
  );
};
