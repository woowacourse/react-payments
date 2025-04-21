import { useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { validatorUtils } from "../../../../utils/validationUtils";

function CardCVCInput() {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsValid: (state: boolean) => void
  ) {
    const cvc = e.target.value;
    if (!validatorUtils.isNumber(cvc)) {
      setFeedbackMessage("숫자만 입력 가능합니다.");
      setIsValid(false);
      return;
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
        maxLength={3}
        onChange={onChangeHandler}
      />
    </InputForm>
  );
}

export default CardCVCInput;
