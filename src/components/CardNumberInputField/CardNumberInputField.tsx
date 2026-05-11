import {
  checkCardNumberLength,
  checkIsOnlyDigits,
  checkLengthMatches,
} from "@utils/validator";
import { useState } from "react";
import { HELPER_MESSAGE, type InputStatus } from "./constants";
import {
  detectCardBrand,
  getCardNumberFormat,
  getCardNumberPlaceholder,
  updateCardNumberUnitsFormat,
  isFormatChanged,
} from "@/utils/card";
import useInputFocus from "@/hooks/useInputFocus";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";

export type CardNumberUnits = string[];
export type CardNumberFormat = number[];

interface CardNumberInputFieldProps {
  cardNumberUnits: CardNumberUnits;
  onChange: (input: CardNumberUnits) => void;
  onNextStep: () => void;
}

type InputsStatuses = InputStatus[];

const INPUTS_STATUSES: InputsStatuses = [
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
  "DEFAULT",
];

const CardNumberInputField = ({
  cardNumberUnits,
  onChange,
  onNextStep,
}: CardNumberInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);
  const { registerInput, focusNextInput } = useInputFocus();

  const cardBrand = detectCardBrand(cardNumberUnits);
  const cardNumberFormat = getCardNumberFormat(cardBrand);

  const updateInputStatus = (index: number, inputStatus: InputStatus) => {
    setStatus((prev) => {
      const newInputsStatuses: InputsStatuses = [...prev];
      newInputsStatuses[index] = inputStatus;
      return newInputsStatuses;
    });
  };

  const updateCardNumberUnit = (
    index: number,
    input: string,
  ): CardNumberUnits => {
    const newCardNumberUnits = [...cardNumberUnits];
    newCardNumberUnits[index] = input.slice(0, cardNumberFormat[index]);

    return newCardNumberUnits;
  };

  const handleCardNumberChange = (index: number, input: string) => {
    if (!checkIsOnlyDigits(input)) {
      updateInputStatus(index, "NOT_NUMBER");
      return;
    }

    updateInputStatus(index, "DEFAULT");

    const newCardNumberUnits = updateCardNumberUnit(index, input);
    const newCardBrand = detectCardBrand(newCardNumberUnits);
    const newCardNumberFormat = getCardNumberFormat(newCardBrand);

    if (isFormatChanged(cardNumberFormat, newCardNumberFormat)) {
      const reformattedUnits = updateCardNumberUnitsFormat(
        newCardNumberUnits,
        newCardNumberFormat,
      );
      onChange(reformattedUnits);
      setStatus(reformattedUnits.map(() => "DEFAULT"));
    } else {
      onChange(newCardNumberUnits);
    }

    if (newCardNumberUnits[index].length === cardNumberFormat[index]) {
      focusNextInput(index);
    }

    if (checkCardNumberLength(newCardNumberUnits)) {
      onNextStep();
    }
  };

  const handleCardNumberBlur = (index: number, input: string) => {
    if (input.length === 0) {
      updateInputStatus(index, "EMPTY");
      return;
    }

    if (!checkLengthMatches(input, cardNumberFormat[index])) {
      updateInputStatus(index, "INVALID_LENGTH");
      return;
    }

    updateInputStatus(index, "DEFAULT");
  };

  return (
    <FormField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      helperMessage={
        HELPER_MESSAGE[
          status.find((inputStatus) => inputStatus !== "DEFAULT") ?? "DEFAULT"
        ]
      }
    >
      {cardNumberFormat.map((maxLength, index) => (
        <Input
          autoFocus={index === 0}
          key={index}
          ref={registerInput(index)}
          placeholder={getCardNumberPlaceholder(maxLength)}
          maxLength={maxLength}
          fullWidth
          value={cardNumberUnits[index]}
          onChange={(e) => {
            const input = e.target.value;
            handleCardNumberChange(index, input);
          }}
          onBlur={(e) => {
            const input = e.target.value;
            handleCardNumberBlur(index, input);
          }}
          state={status[index] === "DEFAULT" ? "default" : "error"}
        />
      ))}
    </FormField>
  );
};

export default CardNumberInputField;
