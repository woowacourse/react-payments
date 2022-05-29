import styled from 'styled-components';

interface InputLabelProps {
  label: string;
}

const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: ${({ theme }) => theme.PALETTE.GRAY_004};
`;

function InputLabel({ label }: InputLabelProps) {
  return <InputLabelText>{label}</InputLabelText>;
}

export default InputLabel;
