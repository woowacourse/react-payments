import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import {
  makeNewErrorMessages,
  validateIsValidLength,
} from "@/utils/validation";
import { INPUT_COUNTS, MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import { useState } from "react";
import { limitNumberLength } from "@/utils/numberHelper";
import { CardNumberInputType } from "@/pages/CardRegisterPage/CardRegisterPage";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
}

const CARD_NUMBERS_KEYS: (keyof CardNumberInputType)[] = [
  "cardNumbers1",
  "cardNumbers2",
  "cardNumbers3",
  "cardNumbers4",
];

const CardNumbersField = ({ cardNumbersState }: Props) => {
  const { values: cardNumbers, onChange: onChangeCardNumbers } =
    cardNumbersState;

  const [cardNumbersErrors, setCardNumbersErrors] = useState(
    new Array(INPUT_COUNTS.CARD_NUMBERS).fill(null)
  );

  const onValidateCardNumbers = (index: number) => {
    const errorMessage = getCardNumbersError(
      cardNumbers[CARD_NUMBERS_KEYS[index]]
    );
    setCardNumbersErrors((prev) =>
      makeNewErrorMessages(prev, errorMessage, index)
    );
  };

  const getCardNumbersError = (cardNumber: string) => {
    return cardNumber.length
      ? validateIsValidLength(cardNumber, VALID_LENGTH.CARD_NUMBERS)
      : null;
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={cardNumbersErrors}
      >
        {new Array(INPUT_COUNTS.CARD_NUMBERS)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              name={`cardNumbers${index + 1}`}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              onChange={(e) => {
                e.target.value = limitNumberLength({
                  value: e.target.value,
                  maxLength: MAX_LENGTH.CARD_NUMBERS,
                });
                onChangeCardNumbers(e);
              }}
              onBlur={() => onValidateCardNumbers(index)}
              isError={
                !!(
                  cardNumbers[CARD_NUMBERS_KEYS[index]] &&
                  cardNumbersErrors[index]
                )
              }
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardNumbersField;
