import { forwardRef } from "react";
import "./index.scss";

export const Input = forwardRef((props, ref) => (
  <input
    ref={ref}
    onChange={props.onChange}
    type={props.type}
    maxLength={props.maxLength}
    placeholder={props.placeholder}
    className="input__contents"
  />
));
