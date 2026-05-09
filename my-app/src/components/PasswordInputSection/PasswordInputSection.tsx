import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";
import { inputStyle } from "../../styles/inputStyle";

const NUMERIC_REGEX = /^\d+$/;
const PASS_WORD_LENGTH = 2;

type PasswordInputSectionProps = {
  onValueHandler: (cardInfo: string) => void;
};

const PasswordInputSection = ({ onValueHandler }: PasswordInputSectionProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const getValidationError = (value: string) => {
    if (!value) return "";
    if (!NUMERIC_REGEX.test(value)) return "숫자만 입력 가능합니다";
    return "";
  };

  const handleBlur = () => {
    setErrorMessage(getValidationError(inputValue));
  };

  return (
    <InputSectionLayout title="비밀번호를 입력해 주세요" message="앞의 두자리를 입력해 주세요" tag="PASSWORD">
      <ValidatedInputGroup errorMessage={errorMessage} legend="PASSWORD">
        <input
          maxLength={PASS_WORD_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          css={inputStyle(!!errorMessage, "80px")}
          placeholder="**"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default PasswordInputSection;
