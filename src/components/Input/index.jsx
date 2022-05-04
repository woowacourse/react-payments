import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width};
  height: 45px;
  background: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  padding: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  ${props => props.style}
  &:focus {
    outline-color: ${props => (props.isValid ? '#04c09e' : 'red')};
  }
`;

function Input({
  value,
  defaultValue,
  width,
  type,
  maxLength,
  isCenter,
  placeholder,
  onChange,
  backgroundColor,
  borderRadius,
  color,
  isValid,
  disabled,
  ...rest
}) {
  return (
    <StyledInput
      value={value}
      defaultValue={defaultValue}
      width={width}
      type={type}
      maxLength={maxLength}
      textAlign={isCenter ? 'center' : 'left'}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      onChange={onChange}
      isValid={isValid}
      disabled={disabled}
      {...rest}
    />
  );
}

Input.defaultProps = {
  isCenter: true,
  backgroundColor: '#ecebf1',
  color: '#04C09E',
  borderRadius: '7px',
};

export default Input;
