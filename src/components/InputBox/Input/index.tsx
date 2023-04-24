import * as styled from './Input.styled';
import { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeholder?: string;
  center?: boolean;
  type: string;
  dataType: string;
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
      data-type={props.dataType}
    />
  );
};

export default Input;
