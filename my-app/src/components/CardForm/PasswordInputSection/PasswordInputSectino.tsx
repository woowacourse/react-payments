import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import useInputValidation from "../../../hooks/useInputValidation";
import { validateCvc } from "../../../utils/validators";

const PasswordInputSection = ({
  onValueHandler,
  inputValue,
}: {
  onValueHandler: (cardInfo: string) => void;
  inputValue: string;
}) => {
  const { errorMessage, clearError, handleBlur } = useInputValidation(validateCvc, inputValue);

  const onChange = (value: string) => {
    clearError();
    onValueHandler(value.replace(/\D/g, ""));
  };

  return (
    <InputSectionLayout
      title="비밀번호를 입력해 주세요"
      message="앞의 2자리를 입력해주세요"
      tag="비밀번호 앞 2자리"
      errorMessage={errorMessage}
    >
      <input
        type="password"
        inputMode="numeric"
        autoComplete="off"
        maxLength={2}
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        css={[
          baseInputStyle,
          css`
            border: 1.01px solid ${errorMessage ? "#ff3d3d" : "#ACACAC"};
          `,
        ]}
      />
    </InputSectionLayout>
  );
};

export default PasswordInputSection;
