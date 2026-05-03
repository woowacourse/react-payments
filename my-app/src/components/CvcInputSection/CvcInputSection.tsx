import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

type CvcInputSectionProps = {
  onValueHandler: (cardInfo: string) => void;
};

const CvcInputSection = ({ onValueHandler }: CvcInputSectionProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (_index: number, value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const getValidationError = (value: string) => {
    if (!value) return "";
    if (!/^\d+$/.test(value)) return "숫자만 입력 가능합니다";
    return "";
  };

  const handleBlur = () => {
    setErrorMessage(getValidationError(inputValue));
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        values={[inputValue]}
        errorIndex={errorMessage ? 0 : -1}
        inputOption={{ count: 1, maxLength: 3, placeHolder: ["123"] }}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
