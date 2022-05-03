import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

export default function CardPassword({ inputs }: { inputs: HTMLInputElement[] }) {
  const {
    cardInfo: { password },
    cardInfoValidation: { password: validation },
    onChangePassword: onChange,
  } = useContext(CardInfoContext);

  return (
    <InputContainer title="카드 비밀번호" validation={validation}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={0}
        className="password-input"
        inputs={inputs}
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={1}
        className="password-input"
        inputs={inputs}
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
    </InputContainer>
  );
}
