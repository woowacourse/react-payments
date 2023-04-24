import * as styled from './Input.styled';
import { ChangeEvent, forwardRef } from 'react';

interface InputProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeholder?: string;
  center?: boolean;
  type: string;
  dataType: string;
  dataNext: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  return (
    <styled.Input
      ref={ref}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      center={props.center}
      type={props.type}
      data-type={props.dataType}
      data-next={props.dataNext}
    />
  );
});

export default Input;
