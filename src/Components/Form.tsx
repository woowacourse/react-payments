import FormField from "./FormField";

interface Props {
  formFiledPropsList: FormFieldInfo[];
}

const Form = ({ formFiledPropsList }: Props) => {
  return (
    <form>
      {formFiledPropsList.map((formFieldProps, index) => (
        <FormField key={index} formFieldInfo={formFieldProps} />
      ))}
    </form>
  );
};

export default Form;
