import { useState } from "react";
import type { CardNumberUnits } from "../pages/AddNewCardPage.tsx";
import InputField from "./InputField.tsx";

interface CardNumberInputFieldProps {
  cardNumberUnits: CardNumberUnits;
  onChange: (input: CardNumberUnits) => void;
}

export type InputStatus = "default" | "error";

type InputsStatuses = [InputStatus, InputStatus, InputStatus, InputStatus];

const INPUTS_STATUSES: InputsStatuses = [
  "default",
  "default",
  "default",
  "default",
];

const CardNumberInputField = ({
  cardNumberUnits,
  onChange,
}: CardNumberInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const handleCardNumberChange = (index: number, input: string) => {
    if (input.length !== 0)
      if (Number.isNaN(+input) || +input < 0 || +input !== +parseInt(input)) {
        setStatus((prev) => {
          const newInputsStatuses: InputsStatuses = [...prev];
          newInputsStatuses[index] = "error";
          return newInputsStatuses;
        });

        return;
      }

    setStatus(INPUTS_STATUSES);

    const newCardNumberUnits: CardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input.slice(0, 4);
    onChange(newCardNumberUnits);
  };

  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={status.includes("error") ? "숫자만 입력 가능합니다." : ""}
      inputPropsList={[
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[0],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(0, input);
          },
          state: status[0],
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[1],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(1, input);
          },
          state: status[1],
        },
        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[2],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(2, input);
          },
          state: status[2],
        },

        {
          placeholder: "1234",
          fullWidth: true,
          value: cardNumberUnits[3],
          onChange: (e) => {
            const input = e.target.value;
            handleCardNumberChange(3, input);
          },
          state: status[3],
        },
      ]}
    />
  );
};

export default CardNumberInputField;
