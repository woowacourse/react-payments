import { Dispatch, SetStateAction, useRef, useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from "./validator/validateCardInput";
import { getExpirationFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardExpirationDateInput({
  setCardInfo,
  setValidState,
}: {
  setCardInfo: Dispatch<SetStateAction<string[]>>;
  setValidState: Dispatch<SetStateAction<{}>>;
}) {
  const [expiration, setExpiration] = useState({
    month: "",
    year: "",
    feedbackMessage: {
      month: "",
      year: "",
    },
  });

  const inputRefs = useRef([null, null, null, null]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>, i) {
    const { name, value } = e.target;

    const next = {
      ...expiration,
      [name]: value,
    };
    const nextMonth = next.month;
    const nextYear = next.year;

    const monthValidator = validateExpirationDateMonth(nextMonth, nextYear);
    const yearValidator = validateExpirationDateYear(nextMonth, nextYear);

    const monthError = getExpirationFirstErrorMessage(monthValidator, "MONTH");
    const yearError = getExpirationFirstErrorMessage(yearValidator, "YEAR");

    setExpiration({
      month: nextMonth,
      year: nextYear,
      feedbackMessage: {
        month: monthError,
        year: yearError,
      },
    });

    setCardInfo((prev) => {
      return {
        ...prev,
        expirationDate: [nextMonth, nextYear],
      };
    });

    if (value.length === 2 && i !== 1) {
      inputRefs.current[i + 1].focus();
    } else if (
      value.length === 2 &&
      i === 1 &&
      (monthError && yearError) === ""
    ) {
      console.log("123");
      setValidState((prev) => {
        return {
          ...prev,
          cardExpirationDateInput: true,
        };
      });
    }
  }

  return (
    <InputForm
      feedbackMessage={
        expiration.feedbackMessage.month || expiration.feedbackMessage.year
      }
      title="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {["MONTH", "YEAR"].map((field, i) => {
        const name = field.toLowerCase() as "month" | "year";
        const isValid = expiration.feedbackMessage[name] === "";

        return (
          <Input
            ref={(el) => (inputRefs.current[i] = el)}
            key={name}
            type="tel"
            name={name}
            value={expiration[name]}
            isValid={isValid}
            placeholder={field === "MONTH" ? "MM" : "YY"}
            onChange={(e) => onChangeHandler(e, i)}
            maxLength={CARD_INFO.EXPIRATION_DATE_LENGTH_PART}
          />
        );
      })}
    </InputForm>
  );
}

export default CardExpirationDateInput;
