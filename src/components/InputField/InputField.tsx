import { StyledError, StyledInputField, StyledInputs, StyledLabel } from './style';

interface InputFieldProps {
  label: string;
  error?: string;
  children: JSX.Element;
}

const InputField = ({ label, error, children }: InputFieldProps) => {
  return (
    <StyledInputField>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputs>{children}</StyledInputs>
      <StyledError>{error}</StyledError>
    </StyledInputField>
  );
};

export default InputField;
