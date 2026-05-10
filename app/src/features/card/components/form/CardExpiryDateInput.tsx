import { CardFieldset, CardLegend } from "../../style/CardStyles";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors, runValidation } from "../../Utils";
import { CARD_INPUT } from "../../Constants";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import useFocusChain from "../../hooks/useFocusChain";
import type { CardExpiryDate, SetState } from "../../types";

interface CardExpiryDateInputProps {
  cardExpiryDate: CardExpiryDate;
  setCardExpiryDate: SetState<CardExpiryDate>;
}

export function CardExpiryDateInput({ cardExpiryDate, setCardExpiryDate }: CardExpiryDateInputProps) {
  const [isError, setError] = useState({
    expiryMonth: {
      state: false,
      message: "",
    },
    expiryYear: {
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
    const { value } = e.target;
    const errorReport = runValidation([
      () => Validator.isNumber(value),
      () => Validator.isValidMonth(value),
    ]);
    setError({ ...isError, expiryMonth: errorReport });
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, expiryMonth: value });
    changeFocus(e, index);
  };

  const changeCardExpiryYear = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const errorReport = runValidation([
      () => Validator.isNumber(value),
      () => Validator.isValidYear(value),
    ]);
    setError({ ...isError, expiryYear: errorReport });
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, expiryYear: value });
    changeFocus(e, index);
  };

  const handleBlurCardExpiryDate = (
    e: React.FocusEvent<HTMLInputElement>,
    field: "expiryMonth" | "expiryYear",
  ) => {
    const { value } = e.target;
    const errorReport = runValidation([
      () => Validator.isValidCardExpiryDateLength(value),
    ]);
    setError({ ...isError, [field]: errorReport });
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
          onBlur={(e) => handleBlurCardExpiryDate(e, "expiryMonth")}
          maxLength={CARD_INPUT.EACH_EXPIRY_DATE_LENGTH}
          value={cardExpiryDate.expiryMonth}
          isError={isError.expiryMonth.state}
          placeholder="MM"
        />
        <CardInput
          type="text"
          id="expiry-year"
          ref={(node) => ref(2, node)}
          onChange={(e) => changeCardExpiryYear(e, 2)}
          onBlur={(e) => handleBlurCardExpiryDate(e, "expiryYear")}
          maxLength={CARD_INPUT.EACH_EXPIRY_DATE_LENGTH}
          value={cardExpiryDate.expiryYear}
          isError={isError.expiryYear.state}
          placeholder="YY"
        />
      </CardFieldset>
      <ErrorMessage
        messages={sanitizeErrors(
          Object.values(isError).map((err) => err.message),
        )}
      />
    </>
  );
}
