import { useState } from "react";
import Input from "../../../../../../components/common/inputForm/input/Input";
import InputForm from "../../../../../../components/common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import { validateCVC } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardCVCInput({ setValidState }) {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const errorResult = validateCVC(value);
    const errorMessage = getFirstErrorMessage(errorResult, "CVC");
    setFeedbackMessage(errorMessage);
    if (value.length === 3 && errorMessage === "") {
      setValidState((prev) => {
        return {
          ...prev,
          cardCVCInput: true,
        };
      });
    } else if (errorMessage !== "") {
      setValidState((prev) => {
        return {
          ...prev,
          cardCVCInput: false,
        };
      });
    }
  }

  return (
    <InputForm
      title="CVC 번호를 입력해 주세요."
      label="CVC"
      feedbackMessage={feedbackMessage}
    >
      <Input
        type="tel"
        name="cardCVC"
        placeholder="123"
        maxLength={CARD_INFO.CVC_LENGTH}
        onChange={onChangeHandler}
        isValid={feedbackMessage === ""}
      />
    </InputForm>
  );
}

export default CardCVCInput;
