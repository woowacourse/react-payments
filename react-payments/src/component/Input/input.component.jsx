import { Fragment } from "react";
import "./input.css";

const InputContainer = ({
  required,
  inputClass,
  inputInfo,
  connector,
  onChange,
  onFocusIn,
  onKeyDown,
  formType,
}) => {
  return (
    <div className={`input-box ${inputClass}`}>
      {inputInfo.map(({ type, placeholder, name, value }, idx) => (
        <Fragment key={idx}>
          {idx && connector ? <p className="connector">{connector}</p> : null}
          <input
            name={name}
            className="input-basic"
            required={required}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onFocus={onFocusIn}
            onKeyDown={onKeyDown}
            data-testid={`${formType}-${idx}`}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default InputContainer;
