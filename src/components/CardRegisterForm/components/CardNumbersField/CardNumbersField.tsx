import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import {
  makeNewErrorMessages,
  validateIsValidLength,
} from "@/utils/validation";
import { INPUT_COUNTS, VALID_LENGTH } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import { useState } from "react";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs>;
}

const CardNumbersField = ({ cardNumbersState }: Props) => {
  const { inputs: cardNumbers, onChange: onChangeCardNumbers } =
    cardNumbersState;

  const [cardNumbersErrorMessages, setCardNumbersErrorMessages] = useState(
    new Array(INPUT_COUNTS.CARD_NUMBERS).fill(null)
  );

  const onValidateCardNumbers = (index: number) => {
    const errorMessage = getCardNumbersError(cardNumbers[index]);
    setCardNumbersErrorMessages((prev) =>
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
        errorMessages={cardNumbersErrorMessages}
      >
        {cardNumbers.map((_: string, index: number) => (
          <Input
            type="number"
            key={index}
            placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
            onChange={(e) => {
              onChangeCardNumbers(e, index);
            }}
            onBlur={() => onValidateCardNumbers(index)}
            isError={!!(cardNumbers[index] && cardNumbersErrorMessages[index])}
          />
        ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardNumbersField;
