import { Option, TextFieldEvent } from '.';

interface ButtonProps {
  className: string;
  isDisabled: boolean;
  onClick: () => void;
  children: JSX.Element;
}

interface FieldSetProps {
  title: string;
  inputWidth: number;
  errorMessage: string;
  children: JSX.Element | JSX.Element[];
}

interface HeaderProps {
  className: string;
  children: JSX.Element;
}

interface TextFieldProps {
  type: string;
  className: string;
  name: string;
  value: string;
  placeholder: string;
  maxLength: number;
  onChange: ({ target }: TextFieldEvent, option: Option) => void;
  onBlur: () => void;
}

export { ButtonProps, FieldSetProps, HeaderProps, TextFieldProps };
