import InputSectionLayout, {
  baseInputStyle,
} from "@/components/CardForm/InputSectionLayout/InputSectionLayout";
import { useRef } from "react";
import { css } from "@emotion/react";
import { validateCardNumber } from "@/utils/validators";
import useInputValidation from "@/hooks/useInputValidation";

const CardNumberInputSection = ({
  onChange,
  inputValues,
  fieldConfig,
  serverError,
}: {
  onChange: (value: string[]) => void;
  inputValues: string[];
  fieldConfig: number[];
  serverError?: string;
}) => {
  const { errorMessage, errorIndex, clearError, handleBlur, validate } = useInputValidation(
    (values) => validateCardNumber(values, fieldConfig),
    inputValues,
  );
  const displayError = errorMessage || serverError;
  const hasError = Boolean(displayError);
  const hasServerError = Boolean(serverError);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const skipNextBlurRef = useRef(false);

  const handleChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value.replace(/\D/g, "");

    clearError();
    onChange(newValues);

    // 현재 칸이 꽉 찼고, 마지막 칸이 아닐 때 다음칸 Input Dom에 포커스 이동.
    if (value.length === fieldConfig[index] && index < fieldConfig.length - 1) {
      validate(newValues);
      skipNextBlurRef.current = true;
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBlurSafe = () => {
    if (skipNextBlurRef.current) {
      skipNextBlurRef.current = false;
      return;
    }
    handleBlur();
  };

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
      errorMessage={displayError}
    >
      {fieldConfig.map((maxLen, i) => {
        const shouldHighlight = hasError && (hasServerError || errorIndex < 0 || errorIndex === i);

        return (
          <input
            key={i}
            inputMode="numeric"
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            maxLength={maxLen}
            value={inputValues[i] ?? ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onBlur={handleBlurSafe}
            css={[
              baseInputStyle,
              css`
                border: 1.01px solid ${shouldHighlight ? "#ff3d3d" : "#ACACAC"};
              `,
            ]}
            placeholder={"1234"}
          />
        );
      })}
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
