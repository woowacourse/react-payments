import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import { validateExpiryDate } from "../../utils/validators";

const ExpiryDateInputSection = ({
  onValueHandler,
}: {
  onValueHandler: (cardInfo: string[], brand?: string) => void;
}) => {
  const [inputValues, setInputValues] = useState<string[]>(["", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  const placeHolder = ["MM", "YY"];
  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);
  };

  const handleBlur = () => {
    const { errorIndex, message } = validateExpiryDate(inputValues);
    setErrorIndex(errorIndex);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="카드 유효기간을 입력해주세요"
      message="월/년도(MMYY)를 순서대로 입력해 주세요."
      tag="유효기간"
      errorMessage={errorMessage}
    >
      {inputValues.map((value, i) => (
        <input
          key={i}
          maxLength={2}
          value={value}
          onChange={(e) => onChange(i, e.target.value)}
          onBlur={handleBlur}
          css={css`
            flex: 1;
            height: 32px;
            border-radius: 2px;
            min-width: 0;
            border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
            padding: 8px;
            box-sizing: border-box;
          `}
          placeholder={placeHolder[i]}
        />
      ))}
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
