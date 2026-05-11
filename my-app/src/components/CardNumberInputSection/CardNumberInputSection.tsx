import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

import { useCardNumberInput } from "../../hooks/useCardNumberInput";
import { inputStyle } from "../../styles/inputStyle";

type CardNumberInputSectionProps = {
  onValueHandler: (numbers: string[]) => void;
  maxLength: number;
  isSupportedNetwork: boolean;
};

const CardNumberInputSection = ({
  onValueHandler,
  maxLength,
  isSupportedNetwork,
}: CardNumberInputSectionProps) => {
  const {
    inputValues,
    errorMessage,
    errorIndex,
    warningMessage,
    inputRefs,
    lastInputMaxLength,
    fieldCount,
    fieldMaxLength,
    handlers,
  } = useCardNumberInput({ onValueHandler, maxLength, isSupportedNetwork });

  return (
    <InputSectionLayout
      title="결제할 카드 번호를 입력해 주세요"
      message="본인 명의의 카드만 결제 가능합니다."
      tag="카드 번호"
    >
      <ValidatedInputGroup errorMessage={errorMessage} warningMessage={warningMessage} legend="카드 번호">
        {Array.from({ length: fieldCount }, (_, i) => (
          <input
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            key={i}
            maxLength={i === fieldCount - 1 ? lastInputMaxLength : fieldMaxLength}
            inputMode="numeric"
            value={inputValues[i] || ""}
            onChange={(e) => handlers.onChange(i, e.target.value)}
            onBlur={handlers.handleBlur}
            css={[inputStyle(errorIndex === i), { flex: 1 }]}
            placeholder="1234"
          />
        ))}
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default CardNumberInputSection;
