import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";
import { useState } from "react";
import { inputStyle } from "../../styles/inputStyle";

const NUMERIC_REGEX = /^\d+$/;
const CARD_NUMBER_MAX_LENGTH = 4;
const CARD_NUMBER_FIELD_COUNT = 4;

type CardNumberInputSectionProps = {
  onValueHandler: (numbers: string[]) => void;
  maxLength: number;
  isSupportedNetwork: boolean;
};

const CardNumberInputSection = ({ onValueHandler, maxLength, isSupportedNetwork }: CardNumberInputSectionProps) => {
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
      if (!NUMERIC_REGEX.test(value)) {
        return { index: i, message: "숫자만 입력 가능합니다" };
      }
      if (i === 0 && !isSupportedNetwork) return { index: i, message: "이 카드 브랜드는 지원하지 않습니다." };
    }
    return { index: -1, message: "" };
  };

  const handleBlur = () => {
    const { index, message } = getValidationError(inputValues);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  const lastInputMaxLength = maxLength - CARD_NUMBER_MAX_LENGTH * (CARD_NUMBER_FIELD_COUNT - 1);

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
    >
      <ValidatedInputGroup errorMessage={errorMessage} legend="카드 번호">
        {Array.from({ length: CARD_NUMBER_FIELD_COUNT }, (_, i) => (
          <input
            key={i}
            maxLength={i === CARD_NUMBER_FIELD_COUNT - 1 ? lastInputMaxLength : CARD_NUMBER_MAX_LENGTH}
            inputMode="numeric"
            value={inputValues[i] || ""}
            onChange={(e) => onChange(i, e.target.value)}
            onBlur={handleBlur}
            css={[inputStyle(errorIndex === i), { flex: 1 }]}
            placeholder="1234"
          />
        ))}
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
