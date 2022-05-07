import { useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import {
  CARD_INFO_RULES,
  GUIDE_MESSAGE,
  MASKED_CHARACTER,
} from "../../constants/constants";

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
      guideMessage={GUIDE_MESSAGE.VALID_PASSWORD}
      isComplete={passwordLength === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {passwordList.map((password) => (
        <Input
          key={password.keyType}
          name={"password"}
          className={"password"}
          type={"password"}
          placeholder={MASKED_CHARACTER}
          width={"100%"}
          maxLength={CARD_INFO_RULES.PASSWORD_UNIT_LENGTH}
          required
          isComplete={
            password.value.length === CARD_INFO_RULES.PASSWORD_UNIT_LENGTH
          }
          onChange={(e) => handlePasswordUpdate(e, password.keyType)}
        />
      ))}
    </InputField>
  );
}
