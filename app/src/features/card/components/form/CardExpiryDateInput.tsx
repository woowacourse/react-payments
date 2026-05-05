import { CardFieldset, CardLegend } from "../../style/CardStyles";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors } from "../../../../Utils";
import { CARD_INPUT } from "../../Constants";
import { CardContext } from "../Card";
import { useState, useContext } from "react";
import { ErrorMessage } from "./ErrorMessage";

export function CardExpiryDateInput() {
  const { cardExpiryDate, setCardExpiryDate } = useContext(CardContext);
  const [isError, setError] = useState({
    "expiry-month": {
      state: false,
      message: "",
    },
    "expiry-year": {
      state: false,
      message: "",
    },
  });

  const runValidation = (validators: (() => void)[], id: string): boolean => {
    try {
      validators.forEach((validate) => {
        validate();
      });
      setError({ ...isError, [id]: { state: false, message: "" } });
      return true;
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true, message: (err as Error).message },
      });
      return false;
    }
  };

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (
      !runValidation(
        [() => Validator.isNumber(value), () => Validator.isValidMonth(value)],
        id,
      )
    )
      return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (
      !runValidation(
        [() => Validator.isNumber(value), () => Validator.isValidYear(value)],
        id,
      )
    )
      return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (
      !runValidation([() => Validator.isValidCardExpiryDateLength(value)], id)
    )
      return;
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>유효기간</CardLegend>
        <CardInput
          type="text"
          id="expiry-month"
          onChange={changeCardExpiryMonth}
          onBlur={handleBlurCardExpiryDate}
          maxLength={CARD_INPUT.EACH_EXPIRY_DATE_LENGTH}
          value={cardExpiryDate["expiry-month"]}
          isError={isError["expiry-month"].state}
          placeholder="MM"
        />
        <CardInput
          type="text"
          id="expiry-year"
          onChange={changeCardExpiryYear}
          onBlur={handleBlurCardExpiryDate}
          maxLength={CARD_INPUT.EACH_EXPIRY_DATE_LENGTH}
          value={cardExpiryDate["expiry-year"]}
          isError={isError["expiry-year"].state}
          placeholder="YY"
        />
      </CardFieldset>
      <ErrorMessage
        messages={sanitizeErrors(
          Object.keys(isError).map((key) => isError[key]["message"]),
        )}
      />
    </>
  );
}
