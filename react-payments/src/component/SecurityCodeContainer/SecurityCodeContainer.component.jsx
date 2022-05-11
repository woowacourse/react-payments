import { memo, useContext } from "react";
import styled from "styled-components";

import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import HelpBox from "component/common/HelpBox/HelpBox.component";
import useKeyboardOn from "hooks/useKeyboardOn";
import VirtualKeyboard from "component/common/VirtualKeyboard/VirtualKeyboard.component";

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";

const SecurityCodeInputGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
`;

const SecurityCodeContainer = memo(() => {
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
});

export default SecurityCodeContainer;
