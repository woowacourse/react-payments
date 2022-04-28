import Dot from "../Dot/dot.component";
import InputContainer from "../Input/input.component";
import HelpBox from "../HelpBox/helpBox.component";
import "./form.css";
import { useState } from "react";
import VirtualKeyboard from "../VirtualKeyboard/keyboard.component";

const labelEnum = {
  "card-user": (props) => (
    <div className="user-name-container">
      <label className="input-title">{props.label}</label>
      <div className="max-user-name-count">{`${props.inputInfo[0].value.length}/30`}</div>
    </div>
  ),
};

const inputEnum = {
  "card-password": (
    props,
    clicked,
    onFocusIn,
    onKeyDown,
    onClickCloseButton
  ) => (
    <div className="password-container">
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "first", value: props.value["first"] },
        ]}
        onFocusIn={onFocusIn}
        onChange={props.onChangeCardPassword}
        onKeyDown={onKeyDown}
      />
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "second", value: props.value["second"] },
        ]}
        onFocusIn={onFocusIn}
        onChange={props.onChangeCardPassword}
        onKeyDown={onKeyDown}
      />
      <Dot dotClass="password-form" />
      <Dot dotClass="password-form" />
      {clicked && (
        <VirtualKeyboard
          onClickVirtualKeyboard={props.onClickVirtualKeyboard}
          onClickCloseButton={onClickCloseButton}
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
  const [keyboardOn, setKeyboardOn] = useState(false);

  const onFocusIn = () => {
    setKeyboardOn(true);
  };

  const onClickCloseButton = () => {
    setKeyboardOn(false);
  };

  const onKeyDown = (e) => {
    e.preventDefault();
  };

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
          onFocusIn,
          onKeyDown,
          onClickCloseButton
        )
      ) : (
        <InputContainer {...props} />
      )}
    </div>
  );
};

export default Form;
