import { useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import { validateCVC } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardCVCInput() {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const cvc = e.target.value;
    const errorResult = validateCVC(cvc);
    const errorMessage = getFirstErrorMessage(errorResult, "CVC");
    setFeedbackMessage(errorMessage);
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
