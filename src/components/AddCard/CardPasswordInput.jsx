import { useContext } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import {
  CARD_INFO_RULES,
  GUIDE_MESSAGE,
  MASKED_CHARACTER,
} from "../../constants/constants";
import { isInvalidPassword } from "../../validators/validator.ts";
import { setPassword } from "../../reducer/cardReducer";

export default function CardPasswordInput() {
  const {
    state: { password },
    dispatch,
  } = useContext(CardInfoContext);

  const passwordList = Object.entries(password);
  const passwordLength = passwordList.reduce(
    (sum, currentPassword) => currentPassword[1].length + sum,
    0
  );

  const handlePasswordUpdate = ({ target: { value } }, passwordOrder) => {
    if (isInvalidPassword(value)) return;

    dispatch(setPassword({ value, passwordOrder }));
  };

  return (
    <InputField
      labelText={"카드 비밀번호 앞 두 자리"}
      wrapperWidth={"90px"}
      splitCount={2}
      guideMessage={GUIDE_MESSAGE.VALID_PASSWORD}
      isComplete={passwordLength === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {passwordList.map((password) => {
        const [passwordKey, passwordValue] = password;
        return (
          <Input
            key={passwordKey}
            name={"password"}
            className={"password"}
            type={"password"}
            placeholder={MASKED_CHARACTER}
            width={"100%"}
            maxLength={CARD_INFO_RULES.PASSWORD_UNIT_LENGTH}
            required
            isComplete={
              passwordValue.length === CARD_INFO_RULES.PASSWORD_UNIT_LENGTH
            }
            onChange={(e) => handlePasswordUpdate(e, passwordKey)}
          />
        );
      })}
    </InputField>
  );
}
