import { useState } from "react";
import Input from "../../../../../../components/common/inputField/input/Input";
import InputField from "../../../../../../components/common/inputField/InputField";
import { CARD_INFO } from "../../constants/CardInfo";
import { validatePassword } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardPasswordInput({ setValidState }) {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    const errorResult = validatePassword(password);
    const errorMessage = getFirstErrorMessage(errorResult, "PASSWORD");
    setFeedbackMessage(errorMessage);
    if (password.length === 2 && errorMessage === "") {
      setValidState((prev) => {
        return {
          ...prev,
          cardPasswordInput: true,
        };
      });
    } else if (errorMessage !== "" || password.length < 2) {
      setValidState((prev) => {
        return {
          ...prev,
          cardPasswordInput: false,
        };
      });
    }
  }

  return (
    <InputField
      title="비밀번호를 입력해 주세요."
      label="비밀번호 앞 2자리"
      feedbackMessage={feedbackMessage}
    >
      <Input
        type="password"
        name="cardPassword"
        maxLength={CARD_INFO.PASSWORD_LENGTH}
        onChange={onChangeHandler}
        isValid={feedbackMessage === ""}
      />
    </InputField>
  );
}

export default CardPasswordInput;
