import Dot from "../Dot/dot.component";
import Input from "../Input/input.component";
import HelpBox from "../HelpBox/helpBox.component";
import "./form.css";

const inputEnum = {
  "card-password": (props) => (
    <div className="password-container">
      <Input {...props} />
      <Input {...props} />
      <Dot dotClass="password-form" />
      <Dot dotClass="password-form" />
    </div>
  ),
  "security-code": (props) => (
    <div className="security-code-container">
      <Input {...props} />
      <HelpBox />
    </div>
  ),
};

const Form = (props) => {
  const { name } = props;
  return (
    <div className="input-container">
      <label className="input-title">{props.label}</label>
      {inputEnum[name] ? inputEnum[name](props) : <Input {...props} />}
    </div>
  );
};

export default Form;
