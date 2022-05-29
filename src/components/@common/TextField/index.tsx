import * as React from 'react';
import Container from './styles';

interface PropTypes {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function TextField({ type, name, value, placeholder, maxLength, onChange, onBlur }: PropTypes) {
  return (
    <Container
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  maxLength: 0,
  onBlur: () => {},
};

export default TextField;
