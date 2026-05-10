import { CardFieldset, CardLegend } from "../../style/CardStyles";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors, runValidation } from "../../Utils";
import { CARD_INPUT } from "../../Constants";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import useFocusChain from "../../hooks/useFocusChain";

export function CardExpiryDateInput({ cardExpiryDate, setCardExpiryDate }) {
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

  const { ref, changeFocus } = useFocusChain(
    Object.keys(cardExpiryDate).length,
    CARD_INPUT.EACH_EXPIRY_DATE_LENGTH,
  );

  const changeCardExpiryMonth = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value, id } = e.target;
    const errorReport = runValidation([
      () => Validator.isNumber(value),
      () => Validator.isValidMonth(value),
    ]);
    setError({ ...isError, [id]: errorReport });
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    changeFocus(e, index);
  };

  const changeCardExpiryYear = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value, id } = e.target;
    const errorReport = runValidation([
      () => Validator.isNumber(value),
      () => Validator.isValidYear(value),
    ]);
    setError({ ...isError, [id]: errorReport });
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    changeFocus(e, index);
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    const errorReport = runValidation([
      () => Validator.isValidCardExpiryDateLength(value),
    ]);
    setError({ ...isError, [id]: errorReport });
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>유효기간</CardLegend>
        <CardInput
          type="text"
          id="expiry-month"
          ref={(node) => ref(1, node)}
          onChange={(e) => changeCardExpiryMonth(e, 1)}
          onBlur={handleBlurCardExpiryDate}
          maxLength={CARD_INPUT.EACH_EXPIRY_DATE_LENGTH}
          value={cardExpiryDate["expiry-month"]}
          isError={isError["expiry-month"].state}
          placeholder="MM"
        />
        <CardInput
          type="text"
          id="expiry-year"
          ref={(node) => ref(2, node)}
          onChange={(e) => {
            changeCardExpiryYear(e, 2);
          }}
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
