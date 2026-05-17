import InputField from "@components/common/InputField";
import useFocus from "@hooks/useFocus";
import { useFormValue } from "../../formContext";
import {
  detectCardBrand,
  formatCardNumberUnitByBrand,
  getCardNumberLengthByBrand,
  getCardNumberUnitMaxLengthByBrand,
} from "@utils/card";

import type { CardNumberStatusTuple } from "../../formState";
import ERROR_MESSAGE from "./errorMessage";
import { checkCardNumberInputStatus } from "./utils";

interface CardNumberInputFieldProps {
  onComplete: () => void;
}

const updateArray = <T extends unknown[]>(
  array: T,
  index: number,
  value: T[number],
): T => {
  const newArray = [...array] as unknown as T;
  newArray[index] = value;
  return newArray;
};

const CardNumberInputField = ({ onComplete }: CardNumberInputFieldProps) => {
  const { getValue, setValue } = useFormValue();
  const cardNumberUnits = getValue("cardNumber");
  const cardNumber = cardNumberUnits.join("");
  const status = getValue("cardNumberStatus");
  const { registerInputRef, setNextFocus } = useFocus();

  const brand = detectCardBrand(cardNumber);

  const handleCardNumberBlur = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      getCardNumberUnitMaxLengthByBrand(brand, index),
    );
    const blurStatus =
      cardNumberInputStatus === "DEFAULT" ? "INCOMPLETE" : cardNumberInputStatus;

    setValue("cardNumberStatus", updateArray(status, index, blurStatus));
  };

  const handleCardNumberChange = (index: number, input: string) => {
    const unitMaxLength = getCardNumberUnitMaxLengthByBrand(brand, index);

    const updatedUnits = updateArray(cardNumberUnits, index, input);
    const joined = updatedUnits.join("");
    const newBrand = detectCardBrand(joined);
    const newCardNumberMaxLength = getCardNumberLengthByBrand(newBrand);
    const newCardNumber = joined.slice(0, newCardNumberMaxLength);

    const newUnitCount = formatCardNumberUnitByBrand("", newBrand).length;
    const unitCountChanged = cardNumberUnits.length !== newUnitCount;
    const newCardNumberUnits = unitCountChanged
      ? formatCardNumberUnitByBrand(newCardNumber, newBrand)
      : updatedUnits;

    const effectiveUnitCount = newCardNumberUnits.length;

    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      unitMaxLength,
    );

    const newStatus = (
      unitCountChanged
        ? Array.from({ length: effectiveUnitCount }, (_, i) =>
            checkCardNumberInputStatus(
              newCardNumberUnits[i],
              getCardNumberUnitMaxLengthByBrand(newBrand, i),
            ),
          )
        : Array.from({ length: effectiveUnitCount }, (_, i) =>
            i === index ? cardNumberInputStatus : (status[i] ?? "DEFAULT"),
          )
    ) as CardNumberStatusTuple;

    setValue("cardNumberStatus", newStatus);
    setValue("cardNumber", newCardNumberUnits);

    if (input.length === unitMaxLength) setNextFocus();

    const allUnitsFilled =
      newBrand !== null &&
      newCardNumberUnits.every(
        (unit, i) =>
          checkCardNumberInputStatus(
            unit,
            getCardNumberUnitMaxLengthByBrand(newBrand, i),
          ) === "SUCCESS",
      );
    if (allUnitsFilled) {
      onComplete();
    }
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={
        cardNumberUnits.map((_, i) => ERROR_MESSAGE[status[i]]).find(Boolean) ??
        (!brand &&
        status.slice(0, cardNumberUnits.length).every((s) => s !== "DEFAULT")
          ? ERROR_MESSAGE.INVALID_BRAND
          : undefined)
      }
      inputPropsList={cardNumberUnits.map((unit, index) => ({
        ref: (el) => registerInputRef(index)(el),
        key: `card-number-${index}`,
        name: "card-number",
        placeholder: "1234",
        fullWidth: true,
        maxLength: getCardNumberUnitMaxLengthByBrand(brand, index),
        value: unit,
        onChange: (e) => handleCardNumberChange(index, e.target.value),
        onBlur: (e) => handleCardNumberBlur(index, e.target.value),
        state:
          status[index] === "DEFAULT" || status[index] === "SUCCESS"
            ? "default"
            : "error",
        autoFocus: index === 0,
      }))}
    />
  );
};

export default CardNumberInputField;
