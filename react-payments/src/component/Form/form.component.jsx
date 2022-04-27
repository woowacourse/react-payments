import Dot from "../Dot/dot.component";
import InputContainer from "../Input/input.component";
import HelpBox from "../HelpBox/helpBox.component";
import "./form.css";

const labelEnum = {
  "card-user": (props) => (
    <div className="user-name-container">
      <label className="input-title">{props.label}</label>
      <div className="max-user-name-count">{`${props.inputInfo[0].value.length}/30`}</div>
    </div>
  ),
};

const inputEnum = {
  "card-password": (props) => (
    <div className="password-container">
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "first", value: props.value["first"] },
        ]}
      />
      <InputContainer
        {...props}
        inputInfo={[
          { type: "password", name: "second", value: props.value["second"] },
        ]}
      />
      <Dot dotClass="password-form" />
      <Dot dotClass="password-form" />
    </div>
  ),
  "security-code": (props) => (
    <div className="security-code-container">
      <InputContainer {...props} />
      <HelpBox />
    </div>
  ),
};

const Form = (props) => {
  const { formType } = props;
  return (
    <div className="input-container">
      {labelEnum[formType] ? (
        labelEnum[formType](props)
      ) : (
        <label className="input-title">{props.label}</label>
      )}
      {inputEnum[formType] ? (
        inputEnum[formType](props)
      ) : (
        <InputContainer {...props} />
      )}
    </div>
  );
};

export default Form;
