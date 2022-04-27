import Dot from "../Dot/dot.component";
import Input from "../Input/input.component";
import "./form.css";

const Form = (props) => {
  const { inputClass } = props;
  return (
    <div className="input-container">
      <label className="input-title">{props.label}</label>
      {inputClass !== "card-password-input" ? (
        <Input {...props} />
      ) : (
        <div className="password-container">
          <Input {...props} />
          <Input {...props} />
          <Dot dotClass="password-form" />
          <Dot dotClass="password-form" />
        </div>
      )}
    </div>
  );
};

export default Form;
