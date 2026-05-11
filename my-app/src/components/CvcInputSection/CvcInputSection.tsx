import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

import { CVC_LENGTH } from "../../constants/cardField";
import { useSecretInput } from "../../hooks/useSecretInput";
import { inputStyle } from "../../styles/inputStyle";
import { validateNumeric } from "../../utils/validators";

type CvcInputSectionProps = {
  onValueHandler: (value: string) => void;
};

const CvcInputSection = ({ onValueHandler }: CvcInputSectionProps) => {
  const { inputValue, errorMessage, handlers } = useSecretInput({ onValueHandler, validate: validateNumeric });

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup errorMessage={errorMessage} legend="CVC">
        <input
          type="text"
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
