import { useState } from "react";
import Input from "../../../common/inputFormTest/inputTest/Input";
import InputForm from "../../../common/inputFormTest/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import { validateCVC } from "./validator/validateCardInput";

function CardCVCInput() {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsValid: (state: boolean) => void
  ) {
    const cvc = e.target.value;
    if (!validateCVC(cvc)) {
      setFeedbackMessage("숫자만 입력 가능합니다.");
      setIsValid(false);
    } else {
      setFeedbackMessage("");
      setIsValid(true);
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
      />
    </InputForm>
  );
}

export default CardCVCInput;
