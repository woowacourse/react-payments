import { useState, ChangeEvent } from "react";

import CardInfoInput from "../../common/CardInfoInput";

import {
  CARD_ERROR_MESSAGE,
  EXPLANATION_MESSAGE,
  PLACE_HOLDER,
} from "../../../constant/message";

import { validateExpirationDate } from "../../../validation/ExpirationDate";
import { makeAppropriateExpirationDate } from "../../../util/trans";

import "./inputBoxExpirationDate.css";
import { INPUT_LENGTH_LIMIT } from "../../../constant/etc";

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
    const userInputExpirationDate = e.target.value.slice(
      0,
      INPUT_LENGTH_LIMIT.MAX_EXPIRATION_DATE
    );
    const appropriateExpirationDate = makeAppropriateExpirationDate(
      userInputExpirationDate
    );

    if (!validateExpirationDate(appropriateExpirationDate)) {
      setHaveError(true);
      changeCardExpirationDateStatus(false);
    } else if (
      appropriateExpirationDate.length ===
      INPUT_LENGTH_LIMIT.MAX_EXPIRATION_DATE
    ) {
      setHaveError(false);
      changeCardExpirationDateStatus(true, appropriateExpirationDate);
    } else {
      setHaveError(false);
      changeCardExpirationDateStatus(false);
    }

    setExpirationDate(appropriateExpirationDate);
  };

  return (
    <label className="input-box-expiration-date">
      <p>{EXPLANATION_MESSAGE.INPUT_EXPIRATION_DATE}</p>
      <CardInfoInput
        inputPlace="essential"
        name="expiration-date"
        className="input-expiration-date"
        type="text"
        onChange={changeExpirationDate}
        placeholder={PLACE_HOLDER.EXPIRATION_DATE}
        value={expirationDate}
      />
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_EXPIRATION_DATE}
      </p>
    </label>
  );
}
