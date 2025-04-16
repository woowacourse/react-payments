import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { inputContainer, inputLabel } from './Input.style';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: LabelProps) {
  const { children, ...rest } = props;

  return (
    <label css={inputLabel} {...rest}>
      {children}
    </label>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  const { ...rest } = props;

  return <input css={inputContainer} {...rest} />;
}

Input.Label = Label;

export default Input;
