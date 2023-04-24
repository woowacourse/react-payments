import styled from "styled-components";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import { DotIcon } from "../../assets/icons";
import { useRef } from "react";
import { isNumber, isOverMaxLength } from "../../utils";
import { INPUT_LENGTH } from "../../constants";
import { useCardItemAction, useCardItemValue } from "../provider/CardItemProvider";
import { useErrorMessageAction, useErrorMessageValue } from "../provider/ErrorMessageProvider";
import useInputFocus from "../../hooks/useInputFocus";

const PasswordInput = () => {
  const { password } = useCardItemValue();
  const { setPassword } = useCardItemAction();

  const { passwordErrorMessage } = useErrorMessageValue();
  const { setPasswordErrorMessage } = useErrorMessageAction();

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const { isNextInputFocusable, focusNextInput } = useInputFocus(refs, INPUT_LENGTH.PASSWORD);

  const handleChangeInput = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, INPUT_LENGTH.PASSWORD)) return;

    if (!isNumber(inputValue)) {
      setPasswordErrorMessage("숫자만 입력해주세요");
      return;
    }

    const newInputs = [...password];
    newInputs[inputIndex] = inputValue;

    setPassword(newInputs);
    setPasswordErrorMessage("");

    if (isNextInputFocusable(inputValue, inputIndex)) {
      focusNextInput(inputIndex);
    }
  };

  return (
    <InputGroup labelValue="카드 비밀번호" errorMessage={passwordErrorMessage}>
      <BoxContainer>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input type="password" ref={refs[0]} value={password[0]} onChange={handleChangeInput(0)}></Input>
        </InputBox>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input type="password" ref={refs[1]} value={password[1]} onChange={handleChangeInput(1)}></Input>
        </InputBox>
        <DotIconWrapper>
          <DotIcon />
        </DotIconWrapper>
        <DotIconWrapper>
          <DotIcon />
        </DotIconWrapper>
      </BoxContainer>
    </InputGroup>
  );
};

const BoxContainer = styled.div`
  display: flex;
  gap: 7px;
`;

const DotIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 43px;
  height: 45px;
`;

export default PasswordInput;
