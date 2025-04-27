import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regexString?: RegExp;
  autoFocus?: boolean;
}

interface InputWrapperProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  value: string;
  name: string;
}

function Input(props: InputProps) {
  const { regexString, onChange, ...rest } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!regexString) {
      onChange(e);
      return;
    }

    const regex = new RegExp(regexString);
    if (regex.test(value)) {
      onChange(e);
    }
  };
  return <InputWrapper {...rest} onChange={handleChange} />;
}

export default Input;

const InputWrapper = styled.input<InputWrapperProps>`
  width: 100%;
  border: 1px solid ${(props) => (props.isError ? 'red' : 'gray')};
  border-radius: 2px;
  padding: 8px;
  font-size: 11px;
`;
