import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import { useState } from "react";
import { decideBrandName } from "../../utils/decideBrandName";
import { css } from "@emotion/react";

const CardNumberInputSection = ({
  onValueHandler,
}: {
  onValueHandler: (cardInfo: string[], brand?: string) => void;
}) => {
  const [inputValues, setInputValues] = useState<string[]>(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);
  };

  const handleBlur = () => {
    let errorIndex = -1;
    let message = "";

    for (let i = 0; i < inputValues.length; i++) {
      const value = inputValues[i];
      if (value === "" || value === undefined) continue;
      if (!/^\d+$/.test(value)) {
        errorIndex = i;
        message = "숫자만 입력 가능합니다";
        break;
      }
      if (i === 0 && decideBrandName(value) === "") {
        errorIndex = i;
        message = "이 카드 브랜드는 지원하지 않습니다.";
        break;
      }
    }

    setErrorIndex(errorIndex);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
      errorMessage={errorMessage}
    >
      {inputValues.map((value, i) => (
        <input
          key={i}
          maxLength={4}
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
          placeholder={"1234"}
        />
      ))}
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
