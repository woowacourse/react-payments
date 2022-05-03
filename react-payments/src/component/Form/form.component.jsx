import Dot from "../Dot/dot.component";
import InputContainer from "../Input/input.component";
import HelpBox from "../HelpBox/helpBox.component";
import "./form.css";
import VirtualKeyboard from "../VirtualKeyboard/keyboard.component";
import useKeyboardOn from "../../hooks/useKeyboardOn";
import MessageBlock from "../MessageBlock/messageBlock.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants";

const labelEnum = {
  "card-user": (props) => (
    <div className="user-name-container">
      <label className="input-title">{props.label}</label>
      <div className="max-user-name-count">{`${props.inputInfo[0].value.length}/30`}</div>
    </div>
  ),
};

const inputEnum = {
  "card-password": (props, clicked, openKeyboard, onKeyDown, closeKeyboard) => (
    <div className="password-container">
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "first", value: props.value["first"] },
        ]}
        onFocusIn={openKeyboard}
        onChange={props.onChangeCardPassword}
        onKeyDown={onKeyDown}
      />
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "second", value: props.value["second"] },
        ]}
        onFocusIn={openKeyboard}
        onChange={props.onChangeCardPassword}
        onKeyDown={onKeyDown}
      />
      <Dot dotClass="password-form" />
      <Dot dotClass="password-form" />
      {clicked && (
        <VirtualKeyboard
          onClickVirtualKeyboard={props.onClickVirtualKeyboard}
          onClickCloseButton={closeKeyboard}
          onClickBackspaceButton={props.onClickBackspaceButton}
        />
      )}
    </div>
  ),
  "security-code": (
    props,
    clicked,
    onFocusIn,
    onKeyDown,
    onClickCloseButton
  ) => (
    <div className="security-code-container">
      <InputContainer
        {...props}
        onFocusIn={onFocusIn}
        onKeyDown={onKeyDown}
        onChange={props.onChangeSecurityCode}
      />
      <HelpBox />
      {clicked && (
        <VirtualKeyboard
          onClickVirtualKeyboard={props.onClickVirtualKeyboard}
          onClickCloseButton={onClickCloseButton}
          onClickBackspaceButton={props.onClickBackspaceButton}
        />
      )}
    </div>
  ),
};

const Form = (props) => {
  const { formType } = props;
  const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } = useKeyboardOn(
    props.ready
  );

  return (
    <div className="input-container">
      {labelEnum[formType] ? (
        labelEnum[formType](props)
      ) : (
        <label className="input-title">{props.label}</label>
      )}
      {inputEnum[formType] ? (
        inputEnum[formType](
          props,
          keyboardOn,
          openKeyboard,
          onKeyDown,
          closeKeyboard
        )
      ) : (
        <InputContainer {...props} />
      )}
      {props.required &&
        (props.ready ? (
          <MessageBlock messageClass="success-message">
            {SUCCESS_MESSAGE}
          </MessageBlock>
        ) : (
          <MessageBlock messageClass="error-message">
            {ERROR_MESSAGE[formType]}
          </MessageBlock>
        ))}
    </div>
  );
};

export default Form;
