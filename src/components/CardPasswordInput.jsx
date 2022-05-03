import React from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";
import {
  CARD_INFO_RULES,
  CREATE_MASKED_CHARACTERS,
  INPUT_KEY_TABLE,
} from "../constants/constants";

const CardPasswordInput = React.forwardRef((props, inputRef) => {
  const { password, onChange, onKeyDown } = props;

  return (
    <InputField
      labelText={"카드 비밀번호 앞 두 자리"}
      errorMessage={"비밀번호는 0~9까지 숫자로 입력해주세요."}
      wrapperWidth={"90px"}
      splitCount={2}
      isComplete={password.join("").length === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {INPUT_KEY_TABLE.passwordNumbers.map((passwordKey, index) => (
        <Input
          key={index}
          type={"password"}
          value={password[index]}
          maxLength={1}
          name={passwordKey}
          onChange={(e) =>
            onChange(
              e,
              "passwordNumbers",
              index,
              CARD_INFO_RULES.PASSWORD_UNIT_LENGTH
            )
          }
          onKeyDown={onKeyDown}
          width={"100%"}
          placeholder={CREATE_MASKED_CHARACTERS(1)}
          isComplete={password[0].length === 1}
          ref={(element) => (inputRef.current.passwordNumbers[index] = element)}
        />
      ))}
    </InputField>
  );
});

export default CardPasswordInput;
