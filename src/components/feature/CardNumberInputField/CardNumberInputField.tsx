import useFocus from "@/hooks/useFocus";
import type { CardNumberUnits } from "@/types/card";
import InputField from "@components/common/InputField";
import { useState } from "react";

import type { InputStatus } from "./errorMessage";
import ERROR_MESSAGE from "./errorMessage";
import checkCardNumberInputStatus from "./utils";

interface CardNumberInputFieldProps {
  cardNumberUnits: CardNumberUnits;
  onChange: (input: CardNumberUnits) => void;
}

type InputsStatuses = [InputStatus, InputStatus, InputStatus, InputStatus];

const INPUTS_STATUSES: InputsStatuses = [
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
];

const CARD_NUMBER_UNIT_MAX_LENGTH = 4;

const CardNumberInputField = ({
  cardNumberUnits,
  onChange,
}: CardNumberInputFieldProps) => {
  const { registerInputRef, setNextFocus } = useFocus();

  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const handleCardNumberBlur = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(input);

    setStatus((prev) => {
      const newInputsStatuses: InputsStatuses = [...prev];
      newInputsStatuses[index] = cardNumberInputStatus;
      return newInputsStatuses;
    });
  };

  const handleCardNumberChange = (index: number, input: string) => {
    const cardNumberInputStatus = checkCardNumberInputStatus(input);

    setStatus((prev) => {
      const newInputsStatuses: InputsStatuses = [...prev];
      newInputsStatuses[index] = cardNumberInputStatus;
      return newInputsStatuses;
    });

    const newCardNumberUnits: CardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input.slice(0, CARD_NUMBER_UNIT_MAX_LENGTH);
    onChange(newCardNumberUnits);

    if (
      newCardNumberUnits[index].length === CARD_NUMBER_UNIT_MAX_LENGTH &&
      index < cardNumberUnits.length - 1
    )
      setNextFocus();
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
      inputPropsList={[
        {
          ref: (el) => registerInputRef(0)(el),
          key: "card-number-0",
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[0],
          onChange: (e) => handleCardNumberChange(0, e.target.value),
          onBlur: (e) => handleCardNumberBlur(0, e.target.value),
          state: status[0] === "DEFAULT" ? "default" : "error",
          autoFocus: true,
        },
        {
          ref: (el) => registerInputRef(1)(el),
          key: "card-number-1",
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => handleCardNumberChange(1, e.target.value),
          onBlur: (e) => handleCardNumberBlur(1, e.target.value),
          state: status[1] === "DEFAULT" ? "default" : "error",
        },
        {
          ref: (el) => registerInputRef(2)(el),
          key: "card-number-2",
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => handleCardNumberChange(2, e.target.value),
          onBlur: (e) => handleCardNumberBlur(2, e.target.value),
          state: status[2] === "DEFAULT" ? "default" : "error",
        },
        {
          ref: (el) => registerInputRef(3)(el),
          key: "card-number-3",
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => handleCardNumberChange(3, e.target.value),
          onBlur: (e) => handleCardNumberBlur(3, e.target.value),
          state: status[3] === "DEFAULT" ? "default" : "error",
        },
      ]}
    />
  );
};

export default CardNumberInputField;
