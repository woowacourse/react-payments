import styled from 'styled-components';

const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

function InputLabel({ label }) {
  return <InputLabelText>{label}</InputLabelText>;
}

export default InputLabel;
