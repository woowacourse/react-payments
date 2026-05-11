import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import { validateExpiryDate } from "../../utils/validators";
import useInputValidation from "../../hooks/useInputValidation";

const ExpiryDateInputSection = ({
  onValueHandler,
  inputValues,
}: {
  onValueHandler: (cardInfo: string[]) => void;
  inputValues: string[];
}) => {
  const { errorMessage, errorIndex, clearError, handleBlur } = useInputValidation(validateExpiryDate, inputValues);
  const placeHolder = ["MM", "YY"];

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    clearError();
    onValueHandler(newValues);
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
          css={[baseInputStyle, css`border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};`]}
          placeholder={placeHolder[i]}
        />
      ))}
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
