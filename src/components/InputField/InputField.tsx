import * as Styled from './style';

interface InputFieldProps {
  label: string;
  error?: string;
  children: JSX.Element;
}

const InputField = ({ label, error, children }: InputFieldProps) => {
  return (
    <Styled.InputField>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Inputs>{children}</Styled.Inputs>
      <Styled.Error>{error}</Styled.Error>
    </Styled.InputField>
  );
};

export default InputField;
