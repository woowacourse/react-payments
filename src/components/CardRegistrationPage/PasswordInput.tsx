import styled from "styled-components";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import { DotIcon } from "../../assets/icons";
import { useCardItemAction, useCardItemValue, useErrorMessageValue } from "../provider/CardItemProvider";

const PasswordInput = () => {
  const { password } = useCardItemValue();
  const { onChangePassword, registPasswordRef } = useCardItemAction();
  const { passwordErrorMessage } = useErrorMessageValue();

  return (
    <InputGroup labelValue="카드 비밀번호" errorMessage={passwordErrorMessage}>
      <BoxContainer>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input
            type="password"
            ref={(element) => registPasswordRef(0, element)}
            value={password[0]}
            onChange={onChangePassword(0)}
          ></Input>
        </InputBox>
        <InputBox width="43px" isError={!!passwordErrorMessage}>
          <Input
            type="password"
            ref={(element) => registPasswordRef(1, element)}
            value={password[1]}
            onChange={onChangePassword(1)}
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
