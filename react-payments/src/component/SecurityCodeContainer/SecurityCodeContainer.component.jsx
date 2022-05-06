import Label from "../common/Label/Label.component";
import InputBox from "../common/InputBox/InputBox.component";
import Input from "../common/Input/Input.component";
import MessageBox from "../common/MessageBox/MessageBox.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants";
import { useContext } from "react";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import HelpBox from "../common/HelpBox/HelpBox.component";
import useKeyboardOn from "../../hooks/useKeyboardOn";
import VirtualKeyboard from "../common/VirtualKeyboard/Keyboard.component";
import styled from "styled-components";

const SecurityCodeInputGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
`;

const SecurityCodeContainer = () => {
  const {
    state: { securityCode, securityCodeReady },
    action: {
      onChangeSecurityCode,
      onClickSecurityVirtualKeyboard,
      onClickSecurityBackspaceButton,
    },
  } = useContext(SecurityCodeContext);

  const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } =
    useKeyboardOn(securityCodeReady);

  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <SecurityCodeInputGroup>
        <InputBox formType="security-code">
          <Input
            type="password"
            value={securityCode}
            onChange={onChangeSecurityCode}
            onFocus={openKeyboard}
            onKeyDown={onKeyDown}
            data-testid="security-code"
          />
        </InputBox>
        <HelpBox />
        {keyboardOn && (
          <VirtualKeyboard
            onClickVirtualKeyboard={onClickSecurityVirtualKeyboard}
            onClickBackspaceButton={onClickSecurityBackspaceButton}
            onClickCloseButton={closeKeyboard}
          />
        )}
      </SecurityCodeInputGroup>

      {securityCodeReady ? (
        <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
      ) : (
        <MessageBox type="error">{ERROR_MESSAGE["security-code"]} </MessageBox>
      )}
    </>
  );
};

export default SecurityCodeContainer;
