import { forwardRef } from "react";
import "./index.scss";

export const Input = forwardRef((props, ref) => (
  <input
    ref={ref}
    onChange={props.onChange}
    type={props.type}
    maxLength={props.maxLength}
    value={props.value}
    placeholder={props.placeholder}
    onKeyDown={props.onKeyDown}
    className="input__contents"
    data-testid={props.testId}
  />
));
