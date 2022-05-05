import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

export default function CardPasswordInput(props) {
  const { password, onChange } = props;
  const { passwordLabelInfo, passwordInfo } = password;
  const passwordList = Object.values(passwordInfo);
  const passwordLength = passwordList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={passwordLabelInfo.labelText}
      wrapperWidth={passwordLabelInfo.wrapperWidth}
      splitCount={passwordLabelInfo.splitCount}
      errorMessage={passwordLabelInfo.errorMessage}
      isComplete={passwordLength === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {passwordList.map((password) => (
        <Input
          key={password.index}
          dataTargetGroup={password.className}
          className={password.className}
          name={password.name}
          value={password.value}
          type={password.type}
          placeholder={password.placeholder}
          width={password.width}
          maxLength={password.maxLength}
          required={password.required}
          isComplete={password.length === 1}
          onChange={(e) => onChange(e, password.keyType)}
        />
      ))}
    </InputField>
  );
}
