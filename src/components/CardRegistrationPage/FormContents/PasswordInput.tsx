import styled from "styled-components";
import Input from "../../common/Input";
import InputBox from "../../common/InputBox";
import InputGroup from "../../common/InputGroup";
import { DotIcon } from "../../../assets/icons";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../../provider/CardItemProvider";
import useInputFocus from "../../../hooks/useInputFocus";
import { INPUT_MAX_LENGTH } from "../../../constants";

const PasswordInput = () => {
  const { password } = useCardItemValue();
  const { onChangePassword } = useCardItemAction();
  const { passwordErrorMessage } = useErrorMessageValue();

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.PASSWORD);

  const handleChangePassword = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChangePassword(inputIndex)(inputValue);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return (
    <InputGroup labelValue="카드 비밀번호" errorMessage={passwordErrorMessage}>
      <BoxContainer>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input
            type="password"
            ref={(element) => registRef(0, element)}
            value={password[0]}
            onChange={handleChangePassword(0)}
          ></Input>
        </InputBox>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input
            type="password"
            ref={(element) => registRef(1, element)}
            value={password[1]}
            onChange={handleChangePassword(1)}
          ></Input>
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
