import * as Field from './style';

interface InputFieldProps {
  label: string;
  error?: string;
  children: JSX.Element;
}

const InputField = ({ label, error, children }: InputFieldProps) => {
  return (
    <Field.Fieldset>
      <Field.Legend>{label}</Field.Legend>
      {children}
      {error && <Field.ErrorCaption>{error}</Field.ErrorCaption>}
    </Field.Fieldset>
  );
};

export default InputField;
