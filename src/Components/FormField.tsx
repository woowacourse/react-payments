import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Tooltip from "./Tooltip";

interface Props {
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputPlaceholderList: (string | null)[];
}

const FormField: React.FC<Props> = ({ title, description, label, sizePreset, inputPlaceholderList }) => {
  const [inputValues, setInputValues] = useState(Array(inputPlaceholderList.length).fill([]));
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    inputValues.forEach((values) => {
      // TODO: values 유효성 검사
      // TODO: setErrorMessage
    });
  }, [inputValues]);

  const handleChange = (e, index) => {
    //TODO: setInputValues[index]
  };

  const handleSubmit = () => {
    //TODO: errorHandling
  };

  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <label htmlFor="id">{label}</label>
      {inputPlaceholderList.map((placeholder, index) => (
        <FormInput
          onChange={(e) => handleChange(e, index)}
          id={`id-${index}`}
          sizePreset={sizePreset}
          placeholder={placeholder ?? ""}
        ></FormInput>
      ))}
      {errorMessage && <Tooltip>{errorMessage}</Tooltip>}
    </div>
  );
};

export default FormField;
