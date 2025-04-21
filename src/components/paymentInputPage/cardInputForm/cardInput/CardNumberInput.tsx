import { Dispatch, SetStateAction, useState } from "react";
import InputForm from "../../../common/inputForm/InputForm";
import Input from "../../../common/inputForm/input/Input";
import { validatorUtils } from "../../../../utils/validationUtils";

const numbersArray = Array.from({ length: 4 }).fill("") as string[];

function CardNumberInput({
  setCardNumbers,
}: {
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsValid: (state: boolean) => void,
    index: number
  ) {
    const inputCardNumber = e.target.value;
    if (!validatorUtils.isNumber(inputCardNumber)) {
      setFeedbackMessage("숫자만 입력 가능합니다.");
      setIsValid(false);
      return;
    }

    numbersArray[index] = inputCardNumber;
    setCardNumbers([...numbersArray]);
  }

  const inputs = Array.from({ length: 4 }).map((_, index) => {
    return (
      <Input
        type="tel"
        name="cardNumber"
        placeholder="1234"
        maxLength={4}
        onChange={(e, setIsValid) => onChangeHandler(e, setIsValid, index)}
      />
    );
  });

  return (
    <InputForm
      feedbackMessage={feedbackMessage}
      title="결제할 카드 번호를 입력해주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      {inputs}
    </InputForm>
  );
}

export default CardNumberInput;
