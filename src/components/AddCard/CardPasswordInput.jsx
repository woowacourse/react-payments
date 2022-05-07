import { useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../../constants/constants";

export default function CardPasswordInput() {
  const {
    state: { password },
    actions: { handlePasswordUpdate },
  } = useContext(CardInfoContext);

  const passwordList = Object.values(password);
  const passwordLength = passwordList.reduce(
    (sum, currentInput) => currentInput.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={"카드 비밀번호 앞 두 자리"}
      wrapperWidth={"90px"}
      splitCount={2}
      errorMessage={"비밀번호는 0~9까지 숫자로 입력해주세요."}
      isComplete={passwordLength === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {passwordList.map((password) => (
        <Input
          key={password.keyType}
          name={"password"}
          className={"password"}
          type={"password"}
          placeholder={"•"}
          width={"100%"}
          maxLength={1}
          required
          isComplete={password.value.length === 1}
          onChange={(e) => handlePasswordUpdate(e, password.keyType)}
        />
      ))}
    </InputField>
  );
}
