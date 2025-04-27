import { Dispatch, SetStateAction, useRef, useState } from "react";
import InputForm from "../../../../../../components/common/inputForm/InputForm";
import Input from "../../../../../../components/common/inputForm/input/Input";
import { CARD_INFO } from "../../constants/CardInfo";
import { validateNumberString } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";
import { CardInfo } from "../../../../paymentInput/PaymentInputPage";

function CardNumberInput({
  setCardInfo,
  setValidState,
}: {
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  setValidState: Dispatch<SetStateAction<Record<string, boolean>>>;
}) {
  const [cardNumberInfo, setCardNumberInfo] = useState({
    cardNumbers: ["", "", "", ""],
    feedbackMessages: ["", "", "", ""],
  });

  const inputRefs = useRef([null, null, null, null]);

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

    setCardInfo((prev) => {
      return { ...prev, cardNumbers: updatedNumbers };
    });

    if (value.length === 4 && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (
      value.length === 4 &&
      index === 3 &&
      cardNumberInfo.feedbackMessages.some((message) => message === "")
    ) {
      setValidState((prev) => {
        console.log("prev -> ", prev);
        return {
          ...prev,
          cardNumberInput: true,
        };
      });
    }
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
          ref={(el) => (inputRefs.current[i] = el)}
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
