import { ChangeEvent } from 'react';

import * as styled from './Input.styled';

interface InputProps {
  name: string;
  type: string;
  value: string;
  maxLength: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  numeric?: boolean;
  placeholder?: string;
  center?: boolean;
  pattern?: string;
}

const Input = (props: InputProps) => {
  return (
    <styled.Input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      center={props.center}
      type={props.type}
      data-numeric={props.numeric}
    />
  );
};

export default Input;
