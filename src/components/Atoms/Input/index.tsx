import { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string;
  isCenter?: boolean;
  textAlign?: string;
  backgroundColor?: string;
  color?: string;
  isValid: boolean;
  readonly?: boolean;
}

type StyledInputProps = Pick<
  InputProps,
  'width' | 'height' | 'backgroundColor' | 'textAlign' | 'textAlign' | 'color' | 'isValid'
>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    value,
    name,
    defaultValue,
    width,
    height,
    type,
    maxLength,
    isCenter,
    placeholder,
    onChange,
    backgroundColor,
    color,
    isValid,
    disabled,
    readonly,
  } = props;

  return (
    <StyledInput
      value={value}
      name={name}
      ref={ref}
      defaultValue={defaultValue}
      width={width}
      height={height}
      type={type}
      maxLength={maxLength}
      textAlign={isCenter ? 'center' : 'left'}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      color={color}
      onChange={onChange}
      isValid={isValid}
      disabled={disabled}
      readOnly={readonly}
    />
  );
});

Input.defaultProps = {
  isCenter: true,
  height: '25px',
  backgroundColor: '#ecebf1',
  color: '#04C09E',
};

export default Input;

const StyledInput = styled.input<StyledInputProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.backgroundColor};
  border-radius: 7px;
  padding: 5px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  &:focus {
    outline-color: ${props => (props.isValid ? '#04c09e' : 'red')};
  }
`;
