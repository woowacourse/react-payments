import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";

const CvcInputSection = ({
  onChange,
  inputValue,
}: {
  onChange: (value: string) => void;
  inputValue: string;
}) => {
  const handleChange = (value: string) => {
    onChange(value.replace(/\D/g, ""));
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC" errorMessage="">
      <input
        inputMode="numeric"
        maxLength={3}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        css={[
          baseInputStyle,
          css`
            border: 1.01px solid #acacac;
          `,
        ]}
        placeholder={"123"}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
