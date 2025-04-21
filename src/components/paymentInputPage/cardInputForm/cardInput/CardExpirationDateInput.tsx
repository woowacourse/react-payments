import { Dispatch, SetStateAction, useRef, useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

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

    const field = e.target.name === "month" ? "MONTH" : "YEAR";
    const validator =
      field === "MONTH"
        ? validateExpirationDateMonth(month, year)
        : validateExpirationDateYear(month, year);

    const errorMessage = getFirstErrorMessage(validator, field);

    if (errorMessage) {
      setFeedbackMessage(errorMessage);
      setIsValid(false);
      return;
    }

    setExpirationDate([month, year]);
    setFeedbackMessage("");
    setIsValid(true);
  }

  return (
    <InputForm
      feedbackMessage={feedbackMessage}
      title="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {["month", "year"].map((name) => {
        return (
          <Input
            ref={name === "month" ? monthRef : yearRef}
            type="tel"
            name={name}
            placeholder={name === "month" ? "MM" : "YY"}
            onChange={(e, setIsValid) => onChangeHandler(e, setIsValid)}
            maxLength={CARD_INFO.EXPIRATION_DATE_LENGTH_PART}
          />
        );
      })}
    </InputForm>
  );
}

export default CardExpirationDateInput;
