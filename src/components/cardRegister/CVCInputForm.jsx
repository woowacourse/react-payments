import React, { useEffect } from "react";

import { InputBasic } from "../common/InputBasic";
import { InputBox } from "../common/InputBox";
import { TipButton } from "../common/TipButton";
import { FlexWrapper, InputContainer, InputTitle } from "../common/styled";

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
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <FlexWrapper alignItems={"baseline"} gap={"10px"}>
        <InputBox width="25%">
          <InputBasic
            type="password"
            value={CVC}
            maxLength="3"
            onChange={handleCVCChange}
          />
        </InputBox>
        <TipButton onClick={handleModalVisible} contents="?" />
      </FlexWrapper>
    </InputContainer>
  );
};
