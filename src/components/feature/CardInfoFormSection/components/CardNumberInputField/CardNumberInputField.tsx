import useFormValue from "@components/common/FormContainer/useFormValue";
import InputField from "@components/common/InputField";
import useFocus from "@hooks/useFocus";
import {
  detectCardBrand,
  formatCardNumberUnitByBrand,
  getCardNumberLengthByBrand,
  getCardNumberUnitMaxLengthByBrand,
} from "@utils/card";

import type { CardInfoFormState, CardNumberStatusTuple } from "../../formState";
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
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const cardNumber = getValue("cardNumber");
  const status = getValue("cardNumberStatus");
  const { registerInputRef, setNextFocus } = useFocus();

  const brand = detectCardBrand(cardNumber);
  const formattedCardNumberUnits = formatCardNumberUnitByBrand(
    cardNumber,
    brand,
  );

  const handleCardNumberBlur = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      getCardNumberUnitMaxLengthByBrand(brand, index),
    );

    setValue(
      "cardNumberStatus",
      updateArray(status, index, cardNumberInputStatus),
    );
  };

  const handleCardNumberChange = (index: number, input: string) => {
    const unitMaxLength = getCardNumberUnitMaxLengthByBrand(brand, index);

    const updatedFormattedUnits = updateArray(
      formattedCardNumberUnits,
      index,
      input,
    );
    const joined = updatedFormattedUnits.join("");
    const newBrand = detectCardBrand(joined);
    const newCardNumberMaxLength = getCardNumberLengthByBrand(newBrand);
    const newCardNumber = joined.slice(0, newCardNumberMaxLength);
    const effectiveUnitCount = formatCardNumberUnitByBrand(
      newCardNumber,
      newBrand,
    ).length;

    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      unitMaxLength,
    );
    const newStatus = updateArray(status, index, cardNumberInputStatus).map(
      (s, i) => (i < effectiveUnitCount ? s : "DEFAULT"),
    ) as CardNumberStatusTuple;

    setValue("cardNumberStatus", newStatus);
    setValue("cardNumber", newCardNumber);

    if (input.length === unitMaxLength) setNextFocus();

    const allValid = newStatus
      .slice(0, effectiveUnitCount)
      .every((s) => s === "SUCCESS");
    if (newCardNumber.length === newCardNumberMaxLength && allValid) {
      onComplete();
    }
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={
        formattedCardNumberUnits
          .map((_, i) => ERROR_MESSAGE[status[i]])
          .find(Boolean) ??
        (!brand &&
        status
          .slice(0, formattedCardNumberUnits.length)
          .every((s) => s !== "DEFAULT")
          ? ERROR_MESSAGE.INVALID_BRAND
          : undefined)
      }
      inputPropsList={formattedCardNumberUnits.map((unit, index) => ({
        ref: (el) => registerInputRef(index)(el),
        key: `card-number-${index}`,
        name: "card-number",
        placeholder: "1234",
        fullWidth: true,
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
