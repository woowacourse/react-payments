import InputSectionLayout, { baseInputStyle } from "../InputSectionLayout/InputSectionLayout";
import { useState } from "react";
import { css } from "@emotion/react";
import { validateCardNumber } from "../../utils/validators";

const CardNumberInputSection = ({
  onValueHandler,
  inputValues,
}: {
  onValueHandler: (cardInfo: string[]) => void;
  inputValues: string[];
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setErrorMessage("");
    onValueHandler(newValues);
  };

  const handleBlur = () => {
    const { errorIndex, message } = validateCardNumber(inputValues);
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
          css={[baseInputStyle, css`border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};`]}
          placeholder={"1234"}
        />
      ))}
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
