import { useState } from "react";
import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";
import { validateCvc } from "../../utils/validators";

const CvcInputSection = ({
  onValueHandler,
  inputValue,
}: {
  onValueHandler: (cardInfo: string) => void;
  inputValue: string;
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value: string) => {
    setErrorMessage("");
    onValueHandler(value);
  };

  const handleBlur = () => {
    const { message } = validateCvc(inputValue);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC" errorMessage={errorMessage}>
      <input
        maxLength={3}
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        css={[baseInputStyle, css`border: 1.01px solid ${errorMessage ? "#ff3d3d" : "#ACACAC"};`]}
        placeholder={"123"}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
