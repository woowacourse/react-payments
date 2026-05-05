import { useState, useContext } from "react";
import { CardContext } from "../Card";
import { CardInput } from "./CardInput";
import { ErrorMessage } from "./ErrorMessage";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors } from "../../Utils";
import { CardFieldset, CardLegend } from "../../style/CardStyles";

export function CardNumberInput() {
  const { cardNumber, setCardNumber } = useContext(CardContext);

  const [isError, setError] = useState({
    "first-digits": {
      state: false,
      message: "",
    },
    "second-digits": {
      state: false,
      message: "",
    },
    "third-digits": {
      state: false,
      message: "",
    },
    "fourth-digits": {
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

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (!runValidation([() => Validator.isNumber(value)], id)) return;
    setCardNumber({ ...cardNumber, [id]: value });
  };

  const changeFirstDigitsCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, id } = e.target;
    if (
      !runValidation(
        [
          () => Validator.isNumber(value),
          () => Validator.isValidNetworkBrand(value),
        ],
        id,
      )
    )
      return;

    setCardNumber({ ...cardNumber, [id]: value });
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (!runValidation([() => Validator.isValidCardNumberLength(value)], id))
      return;
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>카드 번호</CardLegend>
        <CardInput
          id="first-digits"
          type="text"
          maxLength={4}
          value={cardNumber["first-digits"]}
          onChange={changeFirstDigitsCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError["first-digits"].state}
        />
        <CardInput
          id="second-digits"
          type="text"
          maxLength={4}
          value={cardNumber["second-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError["second-digits"].state}
        />
        <CardInput
          id="third-digits"
          type="text"
          maxLength={4}
          value={cardNumber["third-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError["third-digits"].state}
        />
        <CardInput
          id="fourth-digits"
          type="text"
          maxLength={4}
          value={cardNumber["fourth-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError["fourth-digits"].state}
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
