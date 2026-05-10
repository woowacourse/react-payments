import { useState } from "react";
import { CardInput } from "./CardInput";
import { ErrorMessage } from "./ErrorMessage";
import NetworkBrandErrorMessage from "./NetworkBrandErrorMessage";
import useFocusChain from "../../hooks/useFocusChain";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { CardInputChecker } from "../../Checker";
import { sanitizeErrors, joinCardNumber, runValidation } from "../../Utils";
import { CardFieldset, CardLegend } from "../../style/CardStyles";

const CARD_NUMBER_FIELDS = [
  "firstDigits",
  "secondDigits",
  "thirdDigits",
  "fourthDigits",
] as const;

export function CardNumberInput({ cardNumber, setCardNumber }) {
  const [isError, setError] = useState({
    firstDigits: { state: false, message: "" },
    secondDigits: { state: false, message: "" },
    thirdDigits: { state: false, message: "" },
    fourthDigits: { state: false, message: "" },
  });

  const [networkBrandError, setNetworkBrandError] = useState({
    state: false,
    message: "",
  });

  const { ref, changeFocus } = useFocusChain(
    Object.keys(cardNumber).length,
    CARD_INPUT.EACH_NUMBER_LENGTH,
  );

  const runNetworkBrandValidation = (value: string) => {
    try {
      Validator.isValidNetworkBrand(value);
      setNetworkBrandError({ state: false, message: "" });
    } catch (err) {
      setNetworkBrandError({ state: true, message: (err as Error).message });
    }
  };

  const changeCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const field = CARD_NUMBER_FIELDS[index - 1];
    const newCardNumber = { ...cardNumber, [field]: value };
    const fullNumber = joinCardNumber(
      Object.values(newCardNumber),
      CARD_INPUT.EACH_NUMBER_LENGTH,
    );
    const errorReport = runValidation([() => Validator.isNumber(value)]);
    setError({ ...isError, [field]: errorReport });
    runNetworkBrandValidation(fullNumber);
    setCardNumber(newCardNumber);
    changeFocus(e, index);
  };

  const handleBlurCardNumber = (
    e: React.FocusEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const field = CARD_NUMBER_FIELDS[index - 1];
    if (
      !CardInputChecker.isCardNumberComplete(Object.values(cardNumber).join(""))
    ) {
      const errorReport = runValidation([
        () => Validator.isValidCardNumberLength(value),
      ]);
      setError({ ...isError, [field]: errorReport });
    }
  };

  return (
    <>
      <CardFieldset id="card-number-input-container">
        <CardLegend>카드 번호</CardLegend>
        <CardInput
          id="first-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber.firstDigits}
          onChange={(e) => changeCardNumber(e, 1)}
          onBlur={(e) => handleBlurCardNumber(e, 1)}
          placeholder="1234"
          ref={(node) => ref(1, node)}
          isError={isError.firstDigits.state}
        />
        <CardInput
          id="second-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber.secondDigits}
          onChange={(e) => changeCardNumber(e, 2)}
          onBlur={(e) => handleBlurCardNumber(e, 2)}
          placeholder="1234"
          ref={(node) => ref(2, node)}
          isError={isError.secondDigits.state}
        />
        <CardInput
          id="third-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber.thirdDigits}
          onChange={(e) => changeCardNumber(e, 3)}
          onBlur={(e) => handleBlurCardNumber(e, 3)}
          placeholder="1234"
          ref={(node) => ref(3, node)}
          isError={isError.thirdDigits.state}
        />
        <CardInput
          id="fourth-digits"
          type="text"
          maxLength={CARD_INPUT.EACH_NUMBER_LENGTH}
          value={cardNumber.fourthDigits}
          onChange={(e) => changeCardNumber(e, 4)}
          onBlur={(e) => handleBlurCardNumber(e, 4)}
          placeholder="1234"
          ref={(node) => ref(4, node)}
          isError={isError.fourthDigits.state}
        />
      </CardFieldset>
      <NetworkBrandErrorMessage
        message={networkBrandError["message"]}
      ></NetworkBrandErrorMessage>
      <ErrorMessage
        messages={sanitizeErrors(
          Object.keys(isError).map((key) => isError[key]["message"]),
        )}
      />
    </>
  );
}
