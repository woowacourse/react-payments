import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Tooltip from "./Tooltip";

interface Props {
  id: number;
  formFieldInfo: FormFieldInfo;
  setCardInfo?: React.Dispatch<React.SetStateAction<CardInfo>>;
}

const FormField: React.FC<Props> = ({
  formFieldInfo: { title, description, label, sizePreset, inputPlaceholderList },
}) => {
  const [inputValues, setInputValues] = useState(Array(inputPlaceholderList.length).fill([])); // 각각의 input의 유효성을 검사하기 위한 상태
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    inputValues.forEach((values) => {
      // TODO: values 유효성 검사
      // TODO: setErrorMessage
    });
  }, [inputValues]);

  const handleChange = (e, index) => {
    //TODO: setInputValues[index]
    //TODO: setCardInfo((prev)=>{prev[formFieldInfo.key] = e.target.value})
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
