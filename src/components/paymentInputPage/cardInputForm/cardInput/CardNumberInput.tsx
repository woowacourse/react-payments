import { Dispatch, SetStateAction, useState } from "react";
import InputForm from "../../../common/inputForm/InputForm";
import Input from "../../../common/inputForm/input/Input";
import { CARD_INFO } from "../../constants/CardInfo";
import { validateNumberString } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardNumberInput({
  setCardNumbers,
}: {
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  const [cardNumberInfo, setCardNumberInfo] = useState({
    cardNumbers: ["", "", "", ""],
    feedbackMessages: ["", "", "", ""],
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name.split("-")[1]);

    const updatedNumbers = [...cardNumberInfo.cardNumbers];
    const updatedMessages = [...cardNumberInfo.feedbackMessages];

    updatedNumbers[index] = value;

    const errorResult = validateNumberString(value);
    const errorMessage = getFirstErrorMessage(errorResult, "NUMBER");

    updatedMessages[index] = errorMessage;

    setCardNumberInfo({
      cardNumbers: updatedNumbers,
      feedbackMessages: updatedMessages,
    });

    setCardNumbers(updatedNumbers);
  }

  return (
    <InputForm
      feedbackMessage={cardNumberInfo.feedbackMessages.find((msg) => msg) || ""}
      title="결제할 카드 번호를 입력해주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      {cardNumberInfo.cardNumbers.map((number, i) => (
        <Input
          key={i}
          type="tel"
          name={`cardNumber-${i}`}
          value={number}
          placeholder="1234"
          maxLength={CARD_INFO.NUMBER_LENGTH_PART}
          onChange={onChangeHandler}
          isValid={cardNumberInfo.feedbackMessages[i] === ""}
        />
      ))}
    </InputForm>
  );
}

export default CardNumberInput;
