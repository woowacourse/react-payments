import { useState } from "react";
import InputSectionLayout from "./InputSectionLayout";
import ValidatedInputGroup from "./ValidatedInputGroup";

const CvcInputSection = ({
  onValueHandler,
}: {
  onValueHandler: (cardInfo: string[], brand?: string) => void;
}) => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);
  };

  const validate = () => {
    if (!/^\d+$/.test(inputValues.join(""))) {
      setErrorMessage("숫자만 입력 가능합니다");
      return;
    }
  };

  return (
    <InputSectionLayout
      title="CVC번호를 입력해 주세요"
      message=""
      tag="CVC"
    >
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={validate}
        errorMessage={errorMessage}
        values={inputValues}
        inputOption={{ count: 1, maxLength: 3, placeHolder: ["123"] }}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
