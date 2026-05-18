import InputSectionLayout from "../../common/InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../../common/ValidatedInputGroup/ValidatedInputGroup";

import { useExpiryDateInput } from "../../../hooks/useExpiryDateInput";
import { inputStyle } from "../../../styles/inputStyle";

type ExpiryDateInputSectionProps = {
  onValueHandler: (values: string[]) => void;
  serverErrorMessage?: string;
};

const EXPRIY_DATE_INPUT_LABELS = ["유효기간 월", "유효기간 년도"];

const ExpiryDateInputSection = ({ onValueHandler, serverErrorMessage }: ExpiryDateInputSectionProps) => {
  const { inputValues, errorMessage, errorIndex, inputRefs, fieldCount, fieldMaxLength, handlers } = useExpiryDateInput(
    { onValueHandler },
  );

  const resolvedErrorMessage = errorMessage || serverErrorMessage;

  return (
    <InputSectionLayout
      title="카드 유효기간을 입력해주세요"
      message="월/년도(MMYY)를 순서대로 입력해 주세요."
      tag="유효기간"
    >
      <ValidatedInputGroup errorMessage={resolvedErrorMessage} legend="유효기간">
        {Array.from({ length: fieldCount }, (_, i) => (
          <input
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            key={i}
            aria-label={EXPRIY_DATE_INPUT_LABELS[i]}
            autoFocus={i === 0}
            maxLength={fieldMaxLength}
            inputMode="numeric"
            value={inputValues[i] || ""}
            onChange={(e) => handlers.onChange(i, e.target.value)}
            onBlur={handlers.handleBlur}
            css={[inputStyle(errorIndex === i), { flex: 1 }]}
            placeholder={i === 0 ? "MM" : "YY"}
          />
        ))}
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default ExpiryDateInputSection;
