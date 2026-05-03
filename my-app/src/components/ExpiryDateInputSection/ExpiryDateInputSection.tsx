import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

type ExpiryDateInputSectionProps = {
  onValueHandler: (cardInfo: string[]) => void;
};

const ExpiryDateInputSection = ({ onValueHandler }: ExpiryDateInputSectionProps) => {
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

  const getValidationError = (values: string[]) => {
    for (const [i, value] of values.entries()) {
      if (!value) continue;
      if (!/^\d+$/.test(value)) {
        return { index: i, message: "숫자만 입력 가능합니다" };
      }
      if (i === 0 && !/^(0[1-9]|1[0-2])$/.test(value)) {
        return { index: i, message: "유효한 날짜를 입력해주세요" };
      }
    }
    return { index: -1, message: "" };
  };

  const handleBlur = () => {
    const { index, message } = getValidationError(inputValues);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="카드 유효기간을 입력해주세요"
      message="월/년도(MMYY)를 순서대로 입력해 주세요."
      tag="유효기간"
    >
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        errorIndex={errorIndex}
        values={inputValues}
        inputOption={{ count: 2, maxLength: 2, placeHolder: ["MM", "YY"] }}
      />
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
