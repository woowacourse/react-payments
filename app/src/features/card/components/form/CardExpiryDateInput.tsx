import { CardFieldset, CardLegend } from "../../style/CardStyles";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors } from "../../Utils";
import { CARD_INPUT } from "../../Constants";
import useCardInputError from "../../hooks/useCardInputError";
import { ErrorMessage } from "./ErrorMessage";
import useFocusChain from "../../hooks/useFocusChain";
import type { CardExpiryDate, SetState } from "../../types";

interface CardExpiryDateInputProps {
  cardExpiryDate: CardExpiryDate;
  setCardExpiryDate: SetState<CardExpiryDate>;
}

export function CardExpiryDateInput({
  cardExpiryDate,
  setCardExpiryDate,
}: CardExpiryDateInputProps) {
  const [isError, handleChangeError, handleOnBlurError] = useCardInputError({
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
    const errorReport = handleChangeError(
      [() => Validator.isNumber(value), () => Validator.isValidMonth(value)],
      "expiryMonth",
    );
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, expiryMonth: value });
    changeFocus(e, index);
  };

  const changeCardExpiryYear = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const errorReport = handleChangeError(
      [() => Validator.isNumber(value), () => Validator.isValidYear(value)],
      "expiryYear",
    );
    if (errorReport.state) return;
    setCardExpiryDate({ ...cardExpiryDate, expiryYear: value });
    changeFocus(e, index);
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
          onBlur={(e) =>
            handleOnBlurError(
              [() => Validator.isValidCardExpiryDateLength(e.target.value)],
              "expiryMonth",
            )
          }
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
          onBlur={(e) =>
            handleOnBlurError(
              [() => Validator.isValidCardExpiryDateLength(e.target.value)],
              "expiryYear",
            )
          }
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
