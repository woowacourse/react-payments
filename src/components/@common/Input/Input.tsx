import {forwardRef, ForwardRefExoticComponent, InputHTMLAttributes, LabelHTMLAttributes, RefAttributes} from 'react';
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

interface InputComponent extends ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> {
  Group: typeof InputGroup;
  Label: typeof Label;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {id: explicitId, ...rest} = props;
  const {id: contextId} = useInputContext();
  const id = explicitId || contextId;

  return <input css={inputContainer} id={id} ref={ref} {...rest} />;
}) as InputComponent;

Input.displayName = 'Input';
Input.Group = InputGroup;
Input.Label = Label;

export default Input;
