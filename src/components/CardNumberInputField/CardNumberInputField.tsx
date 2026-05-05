import InputField from "@components/common/InputField.tsx";
import { checkIsInt, validateCardNumberUnitRange } from "@utils/validator";
import { useState } from "react";
import {
  CARD_NUMBER_UNIT_MAX_LENGTH,
  HELPER_MESSAGE,
  type InputStatus,
} from "./constants";

export type CardNumberUnits = [string, string, string, string];
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

const CardNumberInputField = ({
  cardNumberUnits,
  onChange,
}: CardNumberInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const updateInputStatus = (index: number, inputStatus: InputStatus) => {
    setStatus((prev) => {
      const newInputsStatuses: InputsStatuses = [...prev];
      newInputsStatuses[index] = inputStatus;
      return newInputsStatuses;
    });
  };

  const handleCardNumberChange = (index: number, input: string) => {
    if (input.length !== 0 && !checkIsInt(+input)) {
      updateInputStatus(index, "NOT_NUMBER");
      return;
    }

    setStatus(INPUTS_STATUSES);

    const newCardNumberUnits: CardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input.slice(0, CARD_NUMBER_UNIT_MAX_LENGTH);
    onChange(newCardNumberUnits);
  };

  const handleCardNumberBlur = (index: number, input: string) => {
    if (input.length === 0) {
      updateInputStatus(index, "EMPTY");
      return;
    }

    if (!validateCardNumberUnitRange(+input)) {
      updateInputStatus(index, "INVALID_LENGTH");
      return;
    }
    setStatus(INPUTS_STATUSES);
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={
        HELPER_MESSAGE[
          status.find((inputStatus) => inputStatus !== "DEFAULT") ?? "DEFAULT"
        ]
      }
      inputPropsList={[
        {
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[0],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(0, input);
          },
          onBlur: (e) => {
            const input = e.target.value;
            handleCardNumberBlur(0, input);
          },
          state: status[0] === "DEFAULT" ? "default" : "error",
        },
        {
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(1, input);
          },
          onBlur: (e) => {
            const input = e.target.value;
            handleCardNumberBlur(1, input);
          },
          state: status[1] === "DEFAULT" ? "default" : "error",
        },
        {
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(2, input);
          },
          onBlur: (e) => {
            const input = e.target.value;
            handleCardNumberBlur(2, input);
          },
          state: status[2] === "DEFAULT" ? "default" : "error",
        },
        {
          placeholder: "1234",
          maxLength: CARD_NUMBER_UNIT_MAX_LENGTH,
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(3, input);
          },
          onBlur: (e) => {
            const input = e.target.value;
            handleCardNumberBlur(3, input);
          },
          state: status[3] === "DEFAULT" ? "default" : "error",
        },
      ]}
    />
  );
};

export default CardNumberInputField;
