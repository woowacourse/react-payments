import { useState } from "react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import { css } from "@emotion/react";

const CvcInputSection = ({ onValueHandler }: { onValueHandler: (cardInfo: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value: string) => {
    setErrorMessage("");
    setInputValue(value);
    onValueHandler(value);
  };

  const handleBlur = () => {
    if (inputValue === "" || inputValue === undefined) return;
    if (!/^\d+$/.test(inputValue)) {
      setErrorMessage("숫자만 입력 가능합니다");
    }
  };

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC" errorMessage={errorMessage}>
      <input
        maxLength={3}
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        css={css`
          flex: 1;
          height: 32px;
          border-radius: 2px;
          min-width: 0;
          border: 1.01px solid ${errorMessage ? "#ff3d3d" : "#ACACAC"};
          padding: 8px;
          box-sizing: border-box;
        `}
        placeholder={"123"}
      />
    </InputSectionLayout>
  );
};

export default CvcInputSection;
