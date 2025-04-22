import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../../common/inputForm/input/Input";
import InputForm from "../../../common/inputForm/InputForm";
import { CARD_INFO } from "../../constants/CardInfo";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from "./validator/validateCardInput";
import { getExpirationFirstErrorMessage } from "./validator/getFirstErrorMessage";

function CardExpirationDateInput({
  setExpirationDate,
}: {
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}) {
  const [expiration, setExpiration] = useState({
    month: "",
    year: "",
    feedbackMessage: {
      month: "",
      year: "",
    },
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
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

    setExpirationDate([nextMonth, nextYear]);
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
      {["MONTH", "YEAR"].map((field) => {
        const name = field.toLowerCase() as "month" | "year";
        const isValid = expiration.feedbackMessage[name] === "";

        return (
          <Input
            key={name}
            type="tel"
            name={name}
            value={expiration[name]}
            isValid={isValid}
            placeholder={field === "MONTH" ? "MM" : "YY"}
            onChange={onChangeHandler}
            maxLength={CARD_INFO.EXPIRATION_DATE_LENGTH_PART}
          />
        );
      })}
    </InputForm>
  );
}

export default CardExpirationDateInput;
