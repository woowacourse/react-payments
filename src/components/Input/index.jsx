import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width};
  height: 45px;
  background: #ecebf1;
  border-radius: 7px;
  padding: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: ${props => props.textAlign};
  color: #737373;
`;

function Input({ value, width, type, maxLength, isCenter, placeholder, onChange }) {
  return (
    <StyledInput
      value={value}
      width={width}
      type={type}
      maxLength={maxLength}
      textAlign={isCenter ? 'center' : 'left'}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
