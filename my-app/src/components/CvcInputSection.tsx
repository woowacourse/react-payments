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
  const [errorIndex, setErrorIndex] = useState<number>(-1);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);
  };

  const handleBlur = () => {
    let errorIndex = -1;
    let message = "";

    for (let i = 0; i < inputValues.length; i++) {
      const value = inputValues[i];
      if (value === "" || value === undefined) continue;
      if (!/^\d+$/.test(value)) {
        errorIndex = i;
        message = "숫자만 입력 가능합니다";
        break;
      }
    }

    setErrorIndex(errorIndex);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="CVC번호를 입력해 주세요"
      message=""
      tag="CVC"
    >
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        errorIndex={errorIndex}
        values={inputValues}
        inputOption={{ count: 1, maxLength: 3, placeHolder: ["123"] }}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
