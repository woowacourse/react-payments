import { useState, ChangeEvent } from "react";

import Input from "../../common/Input";

import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { validateExpirationDate } from "../../../validation/ExpirationDate";
import { makeAppropriateExpirationDate } from "../../../util/trans";

import "./inputBoxExpirationDate.css";

interface InputBoxExpirationDateProps {
  changeCardExpirationDateStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function InputBoxExpirationDate(
  props: InputBoxExpirationDateProps
) {
  const { changeCardExpirationDateStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");

  const changeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputExpirationDate = e.target.value.slice(0, 5);
    const appropriateExpirationDate = makeAppropriateExpirationDate(
      userInputExpirationDate
    );

    if (!validateExpirationDate(appropriateExpirationDate)) {
      setHaveError(true);
      changeCardExpirationDateStatus(false);
    } else if (appropriateExpirationDate.length === 5) {
      setHaveError(false);
      changeCardExpirationDateStatus(true, appropriateExpirationDate);
    } else {
      setHaveError(false);
      changeCardExpirationDateStatus(false);
    }

    setExpirationDate(appropriateExpirationDate);
  };

  return (
    <div className="input-box-expiration-date">
      <p>만료일</p>
      <Input
        name="expiration-date"
        className="input-expiration-date"
        type="text"
        onChange={changeExpirationDate}
        placeholder="MM / YY"
        inputMode="numeric"
        value={expirationDate}
      />
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_EXPIRATION_DATE}
      </p>
    </div>
  );
}
