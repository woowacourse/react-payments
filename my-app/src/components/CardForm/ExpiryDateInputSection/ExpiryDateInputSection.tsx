import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import { validateExpiryDate } from "../../../utils/validators";
import useInputValidation from "../../../hooks/useInputValidation";

const ExpiryDateInputSection = ({
  onChange,
  inputValues,
}: {
  onChange: (value: string[]) => void;
  inputValues: string[];
}) => {
  const { errorMessage, errorIndex, clearError, handleBlur } = useInputValidation(
    validateExpiryDate,
    inputValues,
  );
  const placeholders = ["MM", "YY"];

  const handleChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value.replace(/\D/g, "");

    clearError();
    onChange(newValues);
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
          inputMode="numeric"
          maxLength={2}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onBlur={handleBlur}
          css={[
            baseInputStyle,
            css`
              border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
            `,
          ]}
          placeholder={placeholders[i]}
        />
      ))}
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
