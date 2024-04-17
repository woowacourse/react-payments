import FormField from "./FormField";

interface Props {
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfo>>;
  formFiledPropsList: FormFieldInfo[];
}

const Form = ({ setCardInfo, formFiledPropsList }: Props) => {
  return (
    <form>
      {formFiledPropsList.map((formFieldProps, index) => (
        <FormField id={index} formFieldInfo={formFieldProps} setCardInfo={setCardInfo} />
      ))}
    </form>
  );
};

export default Form;
