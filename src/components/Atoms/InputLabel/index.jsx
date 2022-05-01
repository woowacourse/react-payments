import styled from 'styled-components';

export const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

function InputLabel({ children }) {
  return <InputLabelText>{children}</InputLabelText>;
}

export default InputLabel;
