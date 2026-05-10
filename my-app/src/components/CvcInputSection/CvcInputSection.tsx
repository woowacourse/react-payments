import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

import { CVC_LENGTH } from "../../constants/cardField";
import { useCvcInput } from "../../hooks/useCvcInput";
import { inputStyle } from "../../styles/inputStyle";

type CvcInputSectionProps = {
  onValueHandler: (value: string) => void;
};

const CvcInputSection = ({ onValueHandler }: CvcInputSectionProps) => {
  const { inputValue, errorMessage, handlers } = useCvcInput({ onValueHandler });

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup errorMessage={errorMessage} legend="CVC">
        <input
          autoFocus
          maxLength={CVC_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => handlers.onChange(e.target.value)}
          onBlur={handlers.handleBlur}
          css={inputStyle(!!errorMessage, "80px")}
          placeholder="123"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default CvcInputSection;
