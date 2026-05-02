import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

type ExpiryDateInputSectionProps = {
  onValueHandler: (cardInfo: string[]) => void;
};

const ExpiryDateInputSection = ({
  onValueHandler,
}: ExpiryDateInputSectionProps) => {
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
      if (i === 0 && !/^(0[1-9]|1[0-2])$/.test(value)) {
        errorIndex = i;
        message = "유효한 날짜를 입력해주세요";
        break;
      }
    }

    setErrorIndex(errorIndex);
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
