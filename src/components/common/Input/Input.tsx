import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  type?: string;
  placeholder?: string;
  value: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return <InputWrapper {...props} />;
}

export default Input;

// isError를 통해 border 색상 붉은색과 회색
const InputWrapper = styled.input<InputProps>`
  border: 1px solid ${(props) => (props.isError ? 'red' : 'gray')};
  border-radius: 2px;
  padding: 8px;
  font-size: 11px;
`;
