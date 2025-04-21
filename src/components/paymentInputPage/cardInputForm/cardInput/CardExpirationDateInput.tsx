import { Dispatch, SetStateAction, useRef, useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
  validateisNumberString,
} from "./validator/validateCardInput";

function CardExpirationDateInput({
  setExpirationDate,
}: {
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}) {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsValid: (state: boolean) => void
  ) {
    if (!monthRef.current || !yearRef.current) return;
    const month = monthRef.current.value;
    const year = yearRef.current.value;

    function errorFeedback(message: string) {
      setFeedbackMessage(message);
      setIsValid(false);
    }

    if (!validateisNumberString(e.target.value)) {
      errorFeedback("숫자만 입력 가능합니다.");
      return;
    }

    setExpirationDate([month, year]);

    if (
      e.target.name === "month" &&
      !validateExpirationDateMonth(month, year)
    ) {
      errorFeedback("유효하지 않은 카드입니다. 유효 기간을 확인해주세요.");
      return;
    }
    if (e.target.name === "year" && !validateExpirationDateYear(month, year)) {
      errorFeedback("유효하지 않은 카드입니다. 유효 기간을 확인해주세요.");
      return;
    }

    setFeedbackMessage("");
    setIsValid(true);
  }

  const inputs = Array.from({ length: 2 }).map((_, index) => {
    return (
      <Input
        ref={index === 0 ? monthRef : yearRef}
        type="tel"
        name={index === 0 ? "month" : "year"}
        placeholder={index === 0 ? "MM" : "YY"}
        onChange={(e, setIsValid) => onChangeHandler(e, setIsValid)}
        maxLength={CARD_INFO.EXPIRATION_DATE_LENGTH_PART}
      />
    );
  });

  return (
    <InputForm
      feedbackMessage={feedbackMessage}
      title="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {inputs}
    </InputForm>
  );
}
export default CardExpirationDateInput;
