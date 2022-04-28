import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width};
  height: 45px;
  background: ${props => props.backgroundColor};
  border-radius: 7px;
  padding: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
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
  color,
  isValid,
  disabled,
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
      color={color}
      onChange={onChange}
      isValid={isValid}
      disabled={disabled}
    />
  );
}

Input.defaultProps = {
  backgroundColor: '#ecebf1',
  color: '#04C09E',
};

export default Input;
