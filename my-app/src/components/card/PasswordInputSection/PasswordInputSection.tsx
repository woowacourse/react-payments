import InputSectionLayout from "../../common/InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../../common/ValidatedInputGroup/ValidatedInputGroup";

import { PASSWORD_LENGTH } from "../../../constants/cardField";
import { useSingleFieldInput } from "../../../hooks/useSingleFieldInput";
import { inputStyle } from "../../../styles/inputStyle";
import { validateNumeric } from "../../../utils/validators";

type PasswordInputSectionProps = {
  onValueHandler: (value: string) => void;
};

const PasswordInputSection = ({ onValueHandler }: PasswordInputSectionProps) => {
  const { inputValue, errorMessage, handlers } = useSingleFieldInput({ onValueHandler, validate: validateNumeric });

  return (
    <InputSectionLayout title="비밀번호를 입력해 주세요" message="앞의 두자리를 입력해 주세요" tag="비밀번호 앞 2자리">
      <ValidatedInputGroup errorMessage={errorMessage} legend="PASSWORD">
        <input
          type="password"
          autoFocus
          maxLength={PASSWORD_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => handlers.onChange(e.target.value)}
          onBlur={handlers.handleBlur}
          css={[inputStyle(!!errorMessage), { flex: 1 }]}
          placeholder="**"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default PasswordInputSection;
