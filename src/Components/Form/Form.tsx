import FormField from "../FormField/FormField";

interface Props {
  formFiledPropsList: FormFieldInfo[];
  formErrors: ErrorState;
}

const Form = ({ formFiledPropsList, formErrors }: Props) => {
  return (
    <form>
      {formFiledPropsList.map((formFieldProps, index) => (
        <FormField
          key={index}
          formFieldInfo={formFieldProps}
          formErrors={formErrors}
        />
      ))}
    </form>
  );
};

export default Form;
