import { useState } from "react";
import { CardInput } from "./CardInput";
import { ErrorMessage } from "./ErrorMessage";
import NetworkBrandErrorMessage from "./NetworkBrandErrorMessage";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { sanitizeErrors, joinEachStringWithLength } from "../../../../Utils";
import { CardFieldset, CardLegend } from "../../style/CardStyles";

export function CardNumberInput({ cardNumber, setCardNumber }) {
  const [fieldError, setFieldError] = useState({
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

  const [networkBrandError, setNetworkBrandError] = useState({
    state: false,
    message: "",
  });

  const runFieldValidation = (
    validators: (() => void)[],
    id: string,
  ): boolean => {
    try {
      validators.forEach((validate) => {
        validate();
      });
      setFieldError({ ...fieldError, [id]: { state: false } });
      return true;
    } catch (err) {
      setFieldError({
        ...fieldError,
        [id]: { state: true, message: (err as Error).message },
      });
      return false;
    }
  };

  const runNetworkBrandValidation = (value: string) => {
    try {
      Validator.isValidNetworkBrand(value);
      setNetworkBrandError({ state: false, message: "" });
    } catch (err) {
      setNetworkBrandError({ state: true, message: (err as Error).message });
    }
  };

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    const newCardNumber = { ...cardNumber, [id]: value };
    const fullNumber = joinEachStringWithLength(
      Object.values(cardNumber),
      CARD_INPUT.EACH_NUMBER_LENGTH,
    );
    runFieldValidation([() => Validator.isNumber(value)], id);
    runNetworkBrandValidation(fullNumber);
    setCardNumber(newCardNumber);
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    runFieldValidation([() => Validator.isValidCardNumberLength(value)], id);
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>카드 번호</CardLegend>
        <CardInput
          id="first-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber["first-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={fieldError["first-digits"].state}
        />
        <CardInput
          id="second-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber["second-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={fieldError["second-digits"].state}
        />
        <CardInput
          id="third-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber["third-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={fieldError["third-digits"].state}
        />
        <CardInput
          id="fourth-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber["fourth-digits"]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={fieldError["fourth-digits"].state}
        />
      </CardFieldset>
      <NetworkBrandErrorMessage
        message={networkBrandError["message"]}
      ></NetworkBrandErrorMessage>
      <ErrorMessage
        messages={sanitizeErrors(
          Object.keys(fieldError).map((key) => fieldError[key]["message"]),
        )}
      />
    </>
  );
}
