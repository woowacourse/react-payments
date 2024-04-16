import FormInput from "./FormInput";

interface Props {
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputPlaceholderList: (string | null)[];
}

const Form: React.FC<Props> = ({ title, description, label, sizePreset, inputPlaceholderList }) => {
  return (
    <form>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <label htmlFor="id">{label}</label>
      {inputPlaceholderList.map((placeholder, index) => (
        <FormInput id={`id-${index}`} sizePreset={sizePreset} placeholder={placeholder ?? ""}></FormInput>
      ))}
    </form>
  );
};

export default Form;
