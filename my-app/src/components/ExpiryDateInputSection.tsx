import { useState } from "react";
import InputSectionLayout from "./InputSectionLayout";
import ValidatedInputGroup from "./ValidatedInputGroup";

const ExpiryDateInputSection = ({
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

    const month = inputValues[0];
    if (!/^(0[1-9]|1[0-2])$/.test(month)) {
      setErrorMessage("유효하지 않은 날짜입니다.");
    }
  };

  return (
    <InputSectionLayout
      title="카드 유효기간을 입력해주세요"
      message="월/년도(MMYY)를 순서대로 입력해 주세요."
      tag="유효기간"
    >
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={validate}
        errorMessage={errorMessage}
        values={inputValues}
        inputOption={{ count: 2, maxLength: 2, placeHolder: ["MM", "YY"] }}
      />
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
