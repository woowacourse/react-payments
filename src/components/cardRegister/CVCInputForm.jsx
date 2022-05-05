import React, { useEffect } from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { TipButton } from "components/common/TipButton";
import {
  FlexWrapper,
  InputContainer,
  InputTitle,
} from "components/common/styled";
import { RULE_INPUT } from "constants/constants";

export const CVCInputForm = ({
  CVC,
  handleCVCInput,
  handleCardCVCCheck,
  handleModalVisible,
}) => {
  useEffect(() => {
    const isCVCCompleted = CVC.length === 3;

    handleCardCVCCheck(isCVCCompleted);
  }, [CVC]);

  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data)) {
      return;
    }

    handleCVCInput(e.target.value);
  };

  return (
    <InputContainer>
      <InputTitle htmlFor="input_CVC">보안카드(CVC/CVV)</InputTitle>
      <FlexWrapper alignItems="baseline" gap="10px">
        <InputBox width="25%">
          <InputBasic
            type="password"
            value={CVC}
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
