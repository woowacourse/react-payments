import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import { validateCvc } from "../../../utils/validators";
import useInputValidation from "../../../hooks/useInputValidation";

const CvcInputSection = ({
  onChange,
  inputValue,
}: {
  onChange: (value: string) => void;
  inputValue: string;
}) => {
  const { errorMessage, clearError, handleBlur } = useInputValidation(validateCvc, inputValue);

  const handleChange = (value: string) => {
    clearError();
    onChange(value.replace(/\D/g, ""));
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC" errorMessage={errorMessage}>
      <input
        inputMode="numeric"
        maxLength={3}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        css={[
          baseInputStyle,
          css`
            border: 1.01px solid ${errorMessage ? "#ff3d3d" : "#ACACAC"};
          `,
        ]}
        placeholder={"123"}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
