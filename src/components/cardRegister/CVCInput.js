import { useState, useEffect } from "react";
import styled from "styled-components";

import { MAX_LENGTH } from "../../constants/card";
import useCardInfoContext from "../../hooks/useCardInfoContext";
import { setCVCComplete } from "../../providers/CardInfoCompleteProvider";
import { setCVC } from "../../providers/CardInfoProvider";

import { QuestionMark } from "../common/QuestionMark";
import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from "../common/styled";

export const CVCInput = ({ openModal }) => {
  const { infoDispatch, completeDispatch } = useCardInfoContext();
  const [CVC, setCVCInput] = useState("");

  const handleCVCChange = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > MAX_LENGTH.CVC) {
      return;
    }

    setCVCInput(e.target.value);
  };

  useEffect(() => {
    const isCVCCompleted = CVC.length === MAX_LENGTH.CVC;

    completeDispatch(setCVCComplete(isCVCCompleted));
  }, [CVC]);

  const updateTypedCVC = (e) => {
    infoDispatch(setCVC(e.target.value));
  };

  return (
    <InputContainer>
      <InputTitle>보안카드(CVC/CVV)</InputTitle>
      <Style.CVCInputContainer>
        <Style.CVCInputBox>
          <InputBasic
            type="password"
            value={CVC}
            onChange={handleCVCChange}
            onBlur={updateTypedCVC}
          />
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
