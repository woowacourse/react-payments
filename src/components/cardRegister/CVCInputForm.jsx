import React from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { TipButton } from "components/common/TipButton";
import {
  FlexWrapper,
  InputContainer,
  InputTitle,
} from "components/common/styled";
import { RULE_INPUT } from "constants/constants";

export const CVCInputForm = ({ handleCardCVCCheck, handleModalVisible }) => {
  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data)) {
      return;
    }

    handleCardCVCCheck(e.target.value.length === 3);
  };

  return (
    <InputContainer>
      <InputTitle htmlFor="input_CVC">보안카드(CVC/CVV)</InputTitle>
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
