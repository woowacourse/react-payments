import { CardInput, CardFieldset, CardLegend } from "../../style/CardStyles";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors } from "../../Utils";
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

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      Validator.isValidMonth(value);
      setError({ ...isError, [id]: { state: false, message: "" } });
      setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true, message: (err as Error).message },
      });
    }
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      Validator.isValidYear(value);
      setError({ ...isError, [id]: { state: false, message: "" } });
      setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true, message: (err as Error).message },
      });
    }
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isValidCardExpiryDateLength(value, e.target.maxLength);
      setError({ ...isError, [id]: { state: false, message: "" } });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true, message: (err as Error).message },
      });
    }
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>유효기간</CardLegend>
        <CardInput
          type="text"
          inputMode="numeric"
          id="expiry-month"
          onChange={changeCardExpiryMonth}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate["expiry-month"]}
          isError={isError["expiry-month"].state}
          placeholder="MM"
        />
        <CardInput
          type="text"
          inputMode="numeric"
          id="expiry-year"
          onChange={changeCardExpiryYear}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
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
