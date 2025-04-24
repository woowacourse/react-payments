import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { inputContainer, inputLabel } from './Input.style';
import { InputGroup, useInputContext } from "../../../context";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

function Label(props: LabelProps) {
  const {children, htmlFor: explicitHtmlFor, ...rest} = props;
  const {id: contextId} = useInputContext();
  const htmlFor = explicitHtmlFor || contextId;

  return (
    <label css={inputLabel} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}

function Input(props: InputProps) {
  const {id: explicitId, ...rest} = props;
  const {id: contextId} = useInputContext();
  const id = explicitId || contextId;
  return <input css={inputContainer} id={id} {...rest} />;
}

Input.Group = InputGroup;
Input.Label = Label;

export default Input;
