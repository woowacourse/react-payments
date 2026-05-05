import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

const CvcInputSection = ({ onValueHandler }: { onValueHandler: (cardInfo: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (_index: number, value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const handleBlur = (_i: number) => {
    if (inputValue === "" || inputValue === undefined) return;
    if (!/^\d+$/.test(inputValue)) {
      setErrorMessage("숫자만 입력 가능합니다");
    }
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        values={[inputValue]}
        errorIndex={errorMessage ? 0 : -1}
        inputOption={{ maxLength: 3, placeHolder: ["123"] }}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
