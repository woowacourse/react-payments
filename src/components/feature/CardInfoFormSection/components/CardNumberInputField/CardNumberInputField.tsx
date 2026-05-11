import useFormValue from "@/components/common/FormContainer/useFormValue";
import useFocus from "@/hooks/useFocus";
import InputField from "@components/common/InputField";
import {
  detectCardBrand,
  formatCardNumberUnitByBrand,
  getCardNumberLengthByBrand,
  getCardNumberUnitMaxLengthByBrand,
} from "@utils/card";
import { useState } from "react";

import type { CardInfoFormState } from "../../formState";
import type { InputStatus } from "./errorMessage";
import ERROR_MESSAGE from "./errorMessage";
import { checkCardNumberInputStatus } from "./utils";

interface CardNumberInputFieldProps {
  onComplete: () => void;
}

type InputsStatuses = InputStatus[];

const INPUTS_STATUSES: InputsStatuses = [
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
];

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
  const { registerInputRef, setNextFocus } = useFocus();
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const brand = detectCardBrand(cardNumber);
  const formattedCardNumberUnits = formatCardNumberUnitByBrand(
    cardNumber,
    brand,
  );
  const cardNumberMaxLength = getCardNumberLengthByBrand(brand);

  const handleCardNumberBlur = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      getCardNumberUnitMaxLengthByBrand(brand, index),
    );

    setStatus((prev) => updateArray(prev, index, cardNumberInputStatus));
  };

  const handleCardNumberChange = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(
      input,
      getCardNumberUnitMaxLengthByBrand(brand, index),
    );

    setStatus((prev) => updateArray(prev, index, cardNumberInputStatus));

    const updatedFormattedUnits = updateArray(
      formattedCardNumberUnits,
      index,
      input,
    );
    const joined = updatedFormattedUnits.join("");
    const newCardNumber = joined.slice(
      0,
      getCardNumberLengthByBrand(detectCardBrand(joined)),
    );

    setValue("cardNumber", newCardNumber);

    const unitMaxLength = getCardNumberUnitMaxLengthByBrand(brand, index);
    if (input.length >= unitMaxLength) setNextFocus();

    if (newCardNumber.length >= cardNumberMaxLength) {
      onComplete();
    }
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={
        ERROR_MESSAGE[status[0]] ||
        ERROR_MESSAGE[status[1]] ||
        ERROR_MESSAGE[status[2]] ||
        ERROR_MESSAGE[status[3]]
      }
      inputPropsList={formattedCardNumberUnits.map((unit, index) => ({
        ref: (el) => registerInputRef(index)(el),
        key: `card-number-${index}`,
        placeholder: "1234",
        fullWidth: true,
        value: unit,
        onChange: (e) => handleCardNumberChange(index, e.target.value),
        onBlur: (e) => handleCardNumberBlur(index, e.target.value),
        state:
          status[index] === "DEFAULT" || status[index] === "SUCCESS"
            ? "default"
            : "error",
        autoFocus: index === 0 || index === 3,
      }))}
    />
  );
};

export default CardNumberInputField;
