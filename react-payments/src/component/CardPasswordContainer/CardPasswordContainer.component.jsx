import Label from "../common/Label/Label.component";
import InputBox from "../common/InputBox/InputBox.component";
import Input from "../common/Input/Input.component";
import MessageBox from "../common/MessageBox/MessageBox.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants";
import Dot from "../common/Dot/Dot.component";
import styled from "styled-components";
import { useContext } from "react";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import useKeyboardOn from "../../hooks/useKeyboardOn";
import VirtualKeyboard from "../common/VirtualKeyboard/Keyboard.component";

const PasswordInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const CardPasswordContainer = () => {
  const {
    state: { cardPassword, cardPasswordReady },
    action: {
      onChangeCardPassword,
      onClickCardPasswordBackspaceButton,
      onClickCardPasswordVirtualKeyboard,
    },
  } = useContext(CardPasswordContext);

  const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } =
    useKeyboardOn(cardPasswordReady);

  return (
    <>
      <Label>카드 비밀번호</Label>
      <PasswordInputGroup>
        <InputBox formType="card-password">
          <Input
            type="password"
            value={cardPassword["first"]}
            onChange={onChangeCardPassword}
            onKeyDown={onKeyDown}
            onFocus={openKeyboard}
            data-testid="card-password"
          />
        </InputBox>

        <InputBox formType="card-password">
          <Input
            type="password"
            value={cardPassword["second"]}
            onChange={onChangeCardPassword}
            onKeyDown={onKeyDown}
            onFocus={openKeyboard}
            data-testid="card-password"
          />
        </InputBox>

        <Dot size="small" formType="card-password" cardType="defaultCard" />
        <Dot size="small" formType="card-password" cardType="defaultCard" />
        {keyboardOn && (
          <VirtualKeyboard
            onClickVirtualKeyboard={onClickCardPasswordVirtualKeyboard}
            onClickCloseButton={closeKeyboard}
            onClickBackspaceButton={onClickCardPasswordBackspaceButton}
          />
        )}
      </PasswordInputGroup>

      {cardPasswordReady ? (
        <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
      ) : (
        <MessageBox type="error">{ERROR_MESSAGE.CARD_PASSWORD} </MessageBox>
      )}
    </>
  );
};

export default CardPasswordContainer;
