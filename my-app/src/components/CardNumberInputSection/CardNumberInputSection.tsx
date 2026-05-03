import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";
import { useState } from "react";
import { decideBrandName } from "../../utils/decideBrandName";

type CardNumberInputSectionProps = {
  onValueHandler: (cardInfo: string[], brand?: string) => void;
};

const CardNumberInputSection = ({ onValueHandler }: CardNumberInputSectionProps) => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);
  };

  const getValidationError = (values: string[]) => {
    for (const [i, value] of values.entries()) {
      if (!value) continue;
      if (!/^\d+$/.test(value)) {
        return { index: i, message: "숫자만 입력 가능합니다" };
      }
      if (i === 0 && decideBrandName(value) === "") {
        return { index: i, message: "이 카드 브랜드는 지원하지 않습니다." };
      }
    }
    return { index: -1, message: "" };
  };

  const handleBlur = () => {
    const { index, message } = getValidationError(inputValues);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
    >
      <ValidatedInputGroup
        onChange={onChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        errorIndex={errorIndex}
        values={inputValues}
        inputOption={{
          count: 4,
          maxLength: 4,
          placeHolder: ["1234", "1234", "1234", "1234"],
        }}
      />
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
