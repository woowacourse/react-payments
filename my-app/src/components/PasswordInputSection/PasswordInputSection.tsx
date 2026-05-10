import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import ValidatedInputGroup from "../ValidatedInputGroup/ValidatedInputGroup";

import { PASSWORD_LENGTH } from "../../constants/cardField";
import { usePasswordInput } from "../../hooks/usePasswordInput";
import { inputStyle } from "../../styles/inputStyle";

type PasswordInputSectionProps = {
  onValueHandler: (value: string) => void;
};

const PasswordInputSection = ({ onValueHandler }: PasswordInputSectionProps) => {
  const { inputValue, errorMessage, handlers } = usePasswordInput({ onValueHandler });

  return (
    <InputSectionLayout title="비밀번호를 입력해 주세요" message="앞의 두자리를 입력해 주세요" tag="PASSWORD">
      <ValidatedInputGroup errorMessage={errorMessage} legend="PASSWORD">
        <input
          autoFocus
          maxLength={PASSWORD_LENGTH}
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => handlers.onChange(e.target.value)}
          onBlur={handlers.handleBlur}
          css={inputStyle(!!errorMessage, "80px")}
          placeholder="**"
        />
      </ValidatedInputGroup>
    </InputSectionLayout>
  );
};

export default PasswordInputSection;
