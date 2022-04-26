import { Fragment } from "react";
import "./input.css";
import { v4 as uuid } from "uuid";

const Input = ({ required, inputClass, inputInfo, connector }) => {
  return (
    <div className={`input-box ${inputClass}`}>
      {inputInfo.map(({ type, placeholder }, idx) => (
        <Fragment key={uuid()}>
          {idx && connector ? <p className="connector">{connector}</p> : null}
          <input
            className="input-basic"
            required={required}
            type={type}
            placeholder={placeholder}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Input;
