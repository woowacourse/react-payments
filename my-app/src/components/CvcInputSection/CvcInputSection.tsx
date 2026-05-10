import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";
import { inputStyle } from "../../styles/inputStyle";
import { validateNumeric } from "../../utils/validators";

const CVC_MAX_LENGTH = 3;

type CvcInputSectionProps = {
  onValueHandler: (cardInfo: string) => void;
};

const CvcInputSection = ({ onValueHandler }: CvcInputSectionProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const handleBlur = () => {
    setErrorMessage(validateNumeric(inputValue));
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup errorMessage={errorMessage} legend="CVC">
        <input
          autoFocus
          maxLength={CVC_MAX_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          css={inputStyle(!!errorMessage, "80px")}
          placeholder="123"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default CvcInputSection;
