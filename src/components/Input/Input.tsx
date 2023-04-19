import * as styled from './Input.styled';
import { InputProps } from '../../types/props';

const Input = (props: InputProps) => {
  return (
    <styled.Input
      value={props.value}
      onChange={props.onChange}
      width={props.width}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
