import { useState, useRef } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";
import { inputStyle } from "../../styles/inputStyle";

const NUMERIC_REGEX = /^\d+$/;
const VALID_MONTH_REGEX = /^(0[1-9]|1[0-2])$/;
const EXPIRY_MAX_LENGTH = 2;
const EXPIRY_FIELD_COUNT = 2;

type ExpiryDateInputSectionProps = {
  onValueHandler: (cardInfo: string[]) => void;
};

const ExpiryDateInputSection = ({ onValueHandler }: ExpiryDateInputSectionProps) => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const latestValues = useRef<string[]>([]);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    latestValues.current = newValues;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);

    if (value.length === EXPIRY_MAX_LENGTH) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const getValidationError = (values: string[]) => {
    for (const [i, value] of values.entries()) {
      if (!value) continue;
      if (!NUMERIC_REGEX.test(value)) {
        return { index: i, message: "숫자만 입력 가능합니다" };
      }
      if (i === 0 && !VALID_MONTH_REGEX.test(value)) {
        return { index: i, message: "유효한 날짜를 입력해주세요" };
      }
    }
    return { index: -1, message: "" };
  };

  const handleBlur = () => {
    const { index, message } = getValidationError(latestValues.current);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="카드 유효기간을 입력해주세요"
      message="월/년도(MMYY)를 순서대로 입력해 주세요."
      tag="유효기간"
    >
      <ValidatedInputGroup errorMessage={errorMessage} legend="유효기간">
        {Array.from({ length: EXPIRY_FIELD_COUNT }, (_, i) => (
          <input
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            key={i}
            autoFocus={i === 0}
            maxLength={EXPIRY_MAX_LENGTH}
            inputMode="numeric"
            value={inputValues[i] || ""}
            onChange={(e) => onChange(i, e.target.value)}
            onBlur={handleBlur}
            css={inputStyle(errorIndex === i, "80px")}
            placeholder={i === 0 ? "MM" : "YY"}
          />
        ))}
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
