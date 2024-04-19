import * as Field from './style';

interface InputFieldProps {
  label: string;
  error?: string;
  children: JSX.Element;
}

const InputField = ({ label, error, children }: InputFieldProps) => {
  return (
    <>
      <Field.Fieldset>
        <Field.Legend>{label}</Field.Legend>
        {children}
      </Field.Fieldset>
      {error && <Field.ErrorCaption>{error}</Field.ErrorCaption>}
    </>
  );
};

export default InputField;
