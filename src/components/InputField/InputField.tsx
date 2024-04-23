import * as Field from './style';

interface InputFieldProps {
  label: string;
  error?: string;
}

const InputField = ({ label, error, children }: React.PropsWithChildren<InputFieldProps>) => {
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
