import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { useRef } from "react";
import { css } from "@emotion/react";
import { validateCardNumber } from "../../../utils/validators";
import useInputValidation from "../../../hooks/useInputValidation";

const CardNumberInputSection = ({
  onChange,
  inputValues,
  fieldConfig,
}: {
  onChange: (value: string[]) => void;
  inputValues: string[];
  fieldConfig: number[];
}) => {
  const { errorMessage, errorIndex, clearError, handleBlur } = useInputValidation(
    validateCardNumber,
    inputValues,
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    clearError();
    onChange(newValues);

    // 현재 칸이 꽉 찼고, 마지막 칸이 아닐 때 다음칸 Input Dom에 포커스 이동.
    if (value.length === fieldConfig[index] && index < fieldConfig.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
      errorMessage={errorMessage}
    >
      {fieldConfig.map((maxLen, i) => (
        <input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          maxLength={maxLen}
          value={inputValues[i] ?? ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onBlur={handleBlur}
          css={[
            baseInputStyle,
            css`
              border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
            `,
          ]}
          placeholder={"1234"}
        />
      ))}
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
