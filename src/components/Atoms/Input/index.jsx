import styled from 'styled-components';

const StyledInput = styled.input`
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

function Input({
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
}) {
  return (
    <StyledInput
      value={value}
      name={name}
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
    />
  );
}

Input.defaultProps = {
  isCenter: true,
  height: '45px',
  backgroundColor: '#ecebf1',
  color: '#04C09E',
};

export default Input;
