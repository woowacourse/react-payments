import FormField from "./FormField";

interface Props {
  cardInfoState?: [CardInfo, React.Dispatch<React.SetStateAction<CardInfo>>];
  formFiledPropsList: FormFieldInfo[];
}

const Form = ({ cardInfoState, formFiledPropsList }: Props) => {
  return (
    <form>
      {formFiledPropsList.map((formFieldProps, index) => (
        <FormField id={index} formFieldInfo={formFieldProps} cardInfoState={cardInfoState} />
      ))}
    </form>
  );
};

export default Form;
