import InputSectionLayout from "../../common/InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../../common/ValidatedInputGroup/ValidatedInputGroup";

import { CVC_LENGTH } from "../../../constants/cardField";
import { useSingleFieldInput } from "../../../hooks/useSingleFieldInput";
import { inputStyle } from "../../../styles/inputStyle";
import { validateNumeric } from "../../../utils/validators";

type CvcInputSectionProps = {
  onValueHandler: (value: string) => void;
};

const CVC_INPUT_LABEL = "CVC";

const CvcInputSection = ({ onValueHandler }: CvcInputSectionProps) => {
  const { inputValue, errorMessage, handlers } = useSingleFieldInput({ onValueHandler, validate: validateNumeric });

  return (
    <InputSectionLayout title="CVC번호를 입력해 주세요" message="" tag="CVC">
      <ValidatedInputGroup errorMessage={errorMessage} legend="CVC">
        <input
          type="text"
          aria-label={CVC_INPUT_LABEL}
          autoFocus
          maxLength={CVC_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => handlers.onChange(e.target.value)}
          onBlur={handlers.handleBlur}
          css={[inputStyle(!!errorMessage), { flex: 1 }]}
          placeholder="123"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default CvcInputSection;
