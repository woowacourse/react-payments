import { Fragment, memo } from "react";
import "./input.css";

const InputContainer = memo(
  ({ required, inputClass, inputInfo, connector, onChange }) => {
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
            />
          </Fragment>
        ))}
      </div>
    );
  }
);

export default InputContainer;
