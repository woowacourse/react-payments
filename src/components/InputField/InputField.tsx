import * as Field from './style';

interface InputFieldProps {
  label: string;
  error?: string;
  children: JSX.Element;
}

const InputField = ({ label, error, children }: InputFieldProps) => {
  return (
    <Field.Container>
      <Field.Label>{label}</Field.Label>
      <Field.Inputs>{children}</Field.Inputs>
      <Field.Error>{error}</Field.Error>
    </Field.Container>
  );
};

export default InputField;
